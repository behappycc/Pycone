
# python native module
import os
import sys
import json
import time
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

    def post(self):
        message = json.loads(request.get_data(as_text=True))
        print(message['name'])
        for key in list(message.keys()):
            print('key: %s , value: %s' % (key, message[key]))

        # Create message folder
        if not os.path.exists("message"):
            os.mkdir("message")

        with open('message/message.txt', 'a') as file:
            file.write('time: ' + time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + '\n')
            file.write('name: ' + message['name'] + '\n')
            file.write('email: ' + message['email'] + '\n')
            file.write('message: ' + message['message'] + '\n')
            file.write('----------' + '\n')

        response_to_send = {}
        response_to_send['response'] = "謝謝您的來信!"
        print(response_to_send)
        return json.dumps(response_to_send);

class CoursesHandler(Resource):
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('courses.html'),200,headers)

class PythonForBeginnersHandler(Resource):
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('python_for_beginners.html'),200,headers)

class QAHandler(Resource):
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('qa.html'),200,headers)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


api.add_resource(IndexHandler, '/', '/index')
api.add_resource(CoursesHandler, '/courses')
api.add_resource(PythonForBeginnersHandler, '/courses/python_for_beginners')
api.add_resource(QAHandler, '/qa')

if __name__ == '__main__':
    main()