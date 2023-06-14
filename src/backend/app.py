from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
import winner_predictor
import driversInfo

app = Flask(__name__)
CORS(app)
api = Blueprint('api', __name__)

drivers = driversInfo.drivers

@api.route('/predict',methods=['POST'])
def predict_position():
    _json = request.json
    race = _json["race"]

    if race:
        prediction = winner_predictor.pred(race)
        print("This is prediction: ", prediction)

        return_data = []

        for p in prediction:
            driver_info = drivers.get(p[0])
            driver_id = driver_info["id"]
            driver_img_url = driver_info["img_url"]
            driver_separeted = p[0].split(" ")
            driver_name = driver_separeted[0]
            driver_lastname = driver_separeted[1]
            driver_prediction_formatted = "{:.2f}".format(p[1] * 100)
            driver_pit_stop_time_formatted = "{:.3f}".format(p[3])
            predict_json = {
                "driver_name": driver_name, 
                "driver_lastname": driver_lastname,
                "prediction": driver_prediction_formatted,
                "driver_id": driver_id,
                "driver_img_url": driver_img_url, 
                "race": p[2],
                "pit_stop_time": driver_pit_stop_time_formatted
            }
            return_data.append(predict_json)

        return jsonify(return_data)
    
    else:
        resp = jsonify({'msg' : 'Bad Request - no race given'})
        resp.status_code = 400
        return resp

@api.route('/driver/<int:id>',methods=['GET'])
def get_driver_info(id):
    driver_info = None
    driver_fullname = None

    for driver in drivers:
        if drivers[driver]['id'] == id:
            driver_info = drivers[driver]
            driver_fullname = driver
            break
    
    if driver_info:
        driver_name = driver_fullname.split(" ")[0]
        driver_lastname = driver_fullname.split(" ")[1]
        return_data = {
            "name": driver_name,
            "lastname": driver_lastname,
            "id": driver_info['id'],
            "img_url": driver_info['img_url'],
            "team": driver_info['team'],
            "country": driver_info['country'],
            "podiums": driver_info['podiums'],
            "points": driver_info['points'],
            "grands_prix_entered": driver_info['grands_prix_entered'],
            "world_championships": driver_info['world_championships'],
            "highest_race_finish": driver_info['highest_race_finish'],
            "highest_grid_position": driver_info['highest_grid_position'],
            "date_of_birth": driver_info['date_of_birth'],
            "place_of_birth": driver_info['place_of_birth'],
            "biography": driver_info['biography']
        }

        return jsonify(return_data)
    else:
        resp = jsonify({'msg' : 'Bad Request - no driver found'})
        resp.status_code = 404
        return resp


app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
