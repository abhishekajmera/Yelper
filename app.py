import requests
import json
from flask import Flask, request, jsonify


app = Flask(__name__, static_folder='static')


@app.route('/')
@app.route('/index')
def index():
    """Return a friendly HTTP greeting."""
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(debug=True,use_reloader=True)
