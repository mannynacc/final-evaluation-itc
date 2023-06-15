import React from "react"

import raceData from "../json/raceData.js"
import Image from "next/image.js"

const RaceImages = ({ selectedRace }) => {
  const race = raceData.races.find((race) => race.name === selectedRace)
  return (
    <div>
      {race && (
        <Image
          priority
          src={race.imageUrl}
          alt="Race Image"
          className="my-5"
          width={500}
          height={500}
        />
      )}
    </div>
  )
}

export default RaceImages
