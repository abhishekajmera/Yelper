import requests
import json
from flask import Flask, request, jsonify



app = Flask(__name__)

@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return app.send_static_file('place.html')


@app.route('/search', methods=["GET"])
def do_search():
    print('hello')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
