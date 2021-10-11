from flask import Flask, request
app = Flask(__name__)

def add(a, b):
    return a + b


@app.route('/add', methods=["POST"])
def add_handler():
    request_data = request.get_json()
    a = request_data["a"]
    b = request_data["b"]

    response = { "sum" : add(a, b) }
    return response

@app.route('/query-example')
def query_example():
    # if key doesn't exist, returns None
    language = request.args.get('language')

    return '''<h1>The language value is: {}</h1>'''.format(language)

if __name__ == '__main__':
    app.run(debug = False, host="0.0.0.0", port="3000")