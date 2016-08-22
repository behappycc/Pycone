
# python native module
import sys
import json
from datetime import datetime
import argparse

# flask module
from flask import Flask, request, render_template, make_response, jsonify
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)


def main():
    parser = argparse.ArgumentParser(description='Pycone Server')
    parser.add_argument('-p', type=int, help='listening port for Pycone Server')
    args = parser.parse_args()
    port = args.p 
    print("Server starting......")
    app.run(port=port, debug=True)
    #app.run('140.112.42.151', port=port, debug=True)

class IndexHandler(Resource):
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('index.html'),200,headers)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

api.add_resource(IndexHandler, '/', '/index')

if __name__ == '__main__':
    main()