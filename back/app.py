from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for React frontend

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///words.db'  # SQLite database
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the Word model
class Word(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(100), nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

@app.route('/submit-words', methods=['POST'])
def submit_words():
    try:
        # Parse JSON data from the request
        data = request.get_json()
        words_text = data.get('words')

        if not words_text:
            return make_response(jsonify({"message": "Words are required."}), 400)

        # Split the string into individual words
        words_list = [word.strip() for word in words_text.split(",") if word.strip()]

        if not words_list:
            return make_response(jsonify({"message": "No valid words found."}), 400)

        # Add each word to the database
        new_words = [Word(word=word) for word in words_list]
        db.session.add_all(new_words)
        db.session.commit()

        return jsonify({"message": "Words successfully submitted!", "words": words_list}), 200

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

if __name__ == '__main__':
    app.run(debug=True)
