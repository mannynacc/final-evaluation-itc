from pickle import load
import pandas as pd
import pickle
import sys
from sklearn.preprocessing import LabelEncoder, StandardScaler
from random import randint
import math

drivers = ['Lewis Hamilton', 'Fernando Alonso', 'Pierre Gasly', 'Nico Hülkenberg', 'Sergio Pérez', 'Valtteri Bottas', 'Kevin Magnussen', 'Max Verstappen', 'Carlos Sainz', 'Esteban Ocon', 'Lance Stroll', 'Charles Leclerc', 'Lando Norris', 'George Russell', 'Alexander Albon', 'Yuki Tsunoda', 'Guanyu Zhou', 'Nyck de Vries', 'Oscar Piastri', 'Logan Sargeant']

# Dictionnary used by ML Model hypothesis
driver_dict = pickle.load(open('./driver_dict','rb'))

# Predictions after each race
driver_pred_dict = pickle.load(open('./driver_pred_dict','rb'))

# Dataset generated in previous phase
data = pd.read_csv('./race_results.csv')

# Model loaded
clf = pickle.load(open('./MLP_Final_Model.pkl','rb'))

sc  = pickle.load(open('StandardScaler.pkl', 'rb'))
le = pickle.load(open('LabelEncoder.pkl', 'rb'))


def pred(race):
    res = []
    total_predictions = 0
    winner_already_exits = False
    
    
    for driver in drivers:
        # Buscar valor en dataset
        race_id = data.loc[data['name'] == race]['raceId'].max()
        driver_id = data.loc[data['driver'] == driver]['driverId'].max()
        driver_avg_pit = data.loc[data['driver'] == driver][data['name'] == race]['avg_pit_stop_duration_ms'].min()
        driver_confidence = driver_dict[driver].max()
        if math.isnan(driver_avg_pit):
            continue
        driver_age = data.loc[data['driver'] == driver]['current_age'].max()
        nationality = data.loc[data['driver'] == driver]['nationality'].max()

        gp = le.fit_transform([race]).max()
        le_driver = le.fit_transform([driver]).max()

        le_nationality = le.fit_transform([nationality]).max()
        avg_pit_stop_duration_ms = sc.fit_transform([[driver_avg_pit]]).max()

        transf_data = [[float(i) for i in [0, race_id, gp, 2023, driver_id, le_driver, driver_age, le_nationality, avg_pit_stop_duration_ms]]]
        # print(transf_data)
        # clf = names_model_dict[model]

        prediction = clf.predict_proba(transf_data).max()
            
        prediction = prediction * driver_confidence
        
        res.append([driver, prediction, race, driver_avg_pit / 1000])
    
    res = sorted(res, key=lambda x: x[1], reverse=True)[0:5]
    print(res)
    
    total_predictions = sum([p[1] for p in res])
    
    for p in res:
        p[1] = p[1] / total_predictions
    
    return res