import requests
import json
from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return app.send_static_file('index.html')



if __name__ == '__main__':
    app.run(debug=True)
