from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
submitted_words = []

@app.route('/submit-words', methods=['POST'])
def submit_word():
    try:

        data = request.get_json()
        words = data.get('words')
        print("-------->", words)

        if not word:
            return make_response(jsonify({"message": "Word is required."}), 400)

        submitted_words.append(words)

        return jsonify({"message": "Word successfully submitted!", "word": word}), 200

    except Exception as e:
        return make_response(jsonify({"message": str(e)}), 500)

@app.route('/words', methods=['GET'])
def get_words():
    return jsonify({"submitted_words": submitted_words}), 200

if __name__ == '__main__':
    app.run(debug=True)
