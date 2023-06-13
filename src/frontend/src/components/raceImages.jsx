import React from 'react'

import raceData from '../json/raceData.js'

const RaceImages = ({selectedRace}) => {
    const race = raceData.races.find((race) => race.name === selectedRace);
    return (
        <div>
          {race && (
            <img src={race.imageUrl} alt="Race Image" className="my-5" />
          )}
        </div>
      );
};


export default RaceImages


