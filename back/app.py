from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from llm import LLM
from datetime import datetime

app = Flask(__name__)
CORS(app)

llm = LLM()

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///words.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Word(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(100), nullable=False)
    english_translation = db.Column(db.String(100), nullable=False)
    german_description = db.Column(db.Text, nullable=False)
    examples = db.Column(db.JSON, nullable=False)
    article = db.Column(db.String(10), nullable=False)

    add_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    first_memorized_date = db.Column(db.DateTime, nullable=True)  
    second_memorized_date = db.Column(db.DateTime, nullable=True)  
    third_memorized_date = db.Column(db.DateTime, nullable=True)  
    fourth_memorized_date = db.Column(db.DateTime, nullable=True)  
    all_memorized_rounds_done = db.Column(db.Boolean, default=False, nullable=False)

with app.app_context():
    db.create_all()

@app.route('/submit-new-words', methods=['POST'])
def submit_new_words():
    try:
        data = request.get_json()
        words_text = data.get('words')

        if not words_text:
            return make_response(jsonify({"message": "Words are required."}), 400)

        words_list = [word.strip() for word in words_text.split(",") if word.strip()]
        if not words_list:
            return make_response(jsonify({"message": "No valid words found."}), 400)

        llm_response = llm(words_list)

        new_words = []
        for word_info in llm_response:
            new_word = Word(
                word=word_info.get('corrected_original_word'),
                english_translation=word_info.get('english_translation'),
                german_description=word_info.get('german_description'),
                examples=word_info.get('examples'),
                article=word_info.get('article')
            )
            new_words.append(new_word)

        db.session.add_all(new_words)
        db.session.commit()

        return jsonify({"message": "Words successfully submitted!", "words": llm_response}), 200

    except Exception as e:
        return make_response(jsonify({"message": str(e)}), 500)


@app.route('/verify-new-words', methods=['POST'])
def verify_new_words():
    try:
        data = request.get_json()
        print(data)
        # new_words = []
        # for word_info in llm_response:
        #     new_word = Word(
        #         word=word_info.get('corrected_original_word'),
        #         english_translation=word_info.get('english_translation'),
        #         german_description=word_info.get('german_description'),
        #         examples=word_info.get('examples'),
        #         article=word_info.get('article')
        #     )
        #     new_words.append(new_word)

        # db.session.add_all(new_words)
        # db.session.commit()

        return jsonify({"message": "Words successfully submitted!", "words": "llm_response"}), 200

    except Exception as e:
        return make_response(jsonify({"message": str(e)}), 500)




@app.route('/words', methods=['GET'])
def get_words():
    try:
        # Retrieve all words from the database
        words = Word.query.all()
        words_list = [{"id": word.id, "word": word.word} for word in words]
        return jsonify({"words": words_list}), 200

    except Exception as e:
        return make_response(jsonify({"message": str(e)}), 500)

@app.route('/new-words', methods=['GET'])
def get_new_words():
    print("++++++++++++")
    try:
        words_to_review = db.session.query(Word).filter(
                Word.first_memorized_date.is_(None),
                Word.second_memorized_date.is_(None),
                Word.third_memorized_date.is_(None),
                Word.fourth_memorized_date.is_(None)
            ).order_by(Word.add_date.asc()).all()
        for word in words_to_review:
            print(word.add_date)
        words_list = [{"id": word.id, "word": word.word, "english_translation":word.english_translation, "german_description":word.german_description, "examples": word.examples, "article": word.article} for word in words_to_review]
        return jsonify({"words": words_list}), 200

    except Exception as e:
        return make_response(jsonify({"message": str(e)}), 500)
    
@app.route('/generate', methods=['GET'])
def generate_for_review_words():
    try:
        content = "Ich lese gerne Bücher in meiner Freizeit.', 'In der Bibliothek gibt es viele interessante Bücher. eine klare, farblose, geschmacklose Flüssigkeit, die in Flüssen, Seen, Meeren und als Regen fällt eine klare, farblose, geschmacklose Flüssigkeit, die in Flüssen, Seen, Meeren und als Regen fällt eine klare, farblose, geschmacklose Flüssigkeit, die in Flüssen, Seen, Meeren und als Regen fällt eine klare, farblose, geschmacklose Flüssigkeit, die in Flüssen, Seen, Meeren und als Regen fällt"
        return jsonify({"content": content}), 200

    except Exception as e:
        return make_response(jsonify({"message": str(e)}), 500)



if __name__ == '__main__':
    app.run(debug=True)
