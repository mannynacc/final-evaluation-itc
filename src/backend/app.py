from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
import winner_predictor

app = Flask(__name__)
CORS(app)
api = Blueprint('api', __name__)


@app.route('/predict',methods=['POST'])
def predict_position():
    _json = request.json
    race = _json["race"]

    if race:
        prediction = winner_predictor.pred(race)
        print("This is prediction: ", prediction)

        return_data = []

        for p in prediction:
            driver_separeted = p[0].split(" ")
            driver_name = driver_separeted[0]
            driver_lastname = driver_separeted[1]
            driver_prediction_formatted = "{:.2f}".format(p[1] * 100)
            driver_pit_stop_time_formatted = "{:.3f}".format(p[3])
            predict_json = {
                "driver_name": driver_name, 
                "driver_lastname": driver_lastname,
                "prediction": driver_prediction_formatted, 
                "race": p[2],
                "pit_stop_time": driver_pit_stop_time_formatted
            }
            return_data.append(predict_json)

        return jsonify(return_data)
    
    else:
        resp = jsonify({'msg' : 'Bad Request - no race given'})
        resp.status_code = 400
        return resp

@api.route('/submit', methods=['POST'])
def handle_submit():
    if request.method == "POST":
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        job = request.form['job']
        print(f'first name : {first_name}')
        print(f'last name : {last_name}')
        print(f'job : {job}')

        # do your processing logic here.

        return jsonify({
            "firstName": first_name,
            "lastName": last_name,
            "job": job
        })


app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5050)
