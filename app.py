from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sign')
def sign():
    return render_template('sign.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/web')
def web():
    return render_template('web.html')


if __name__ == '__main__':
    app.run(debug=True)