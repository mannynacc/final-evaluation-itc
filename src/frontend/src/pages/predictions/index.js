import React, { useState } from "react"
import { HeaderF1 } from "@/components/Header"
import { circuits } from "@/data/circuits"
import { tracks } from "../../json/raceData.js"
import axios from "axios"
import { useRouter } from "next/router"

export default function Predictions() {
  const [race, setRace] = useState("")
  const [selectedImage, setSelectedImage] = useState("")
  const router = useRouter()

  const handleRaceChange = (event) => {
    const race = event.target.value
    setRace(race)

    const selectedTrack = tracks.find((track) => track.name === race)

    if (selectedTrack) {
      setSelectedImage(selectedTrack.imageUrl)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("api/predict", {
        race,
      })
      const jsonData = response.data

      router.push({
        pathname: "/predictions/results",
        query: { jsonData: JSON.stringify(jsonData) },
      })
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <h2 className="text-4xl font-bold font-formula1 mb-3">Predicciones</h2>
        <span className="font-thin mb-10">
          ¡Descubre quienes serán los próximos ganadores para el circuito
          seleccionado!
        </span>
        <form onSubmit={handleSubmit}>
          <label className="font-normal text-lg font-formula1 text-gray-500">
            Circuito
          </label>
          <select
            className="ring-inset pr-10 pl-3 py-[0.7em] mt-1 border-0 text-lg rounded-md w-full block text-black ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            onChange={handleRaceChange}
            value={race}
          >
            <option disabled value="">
              Selecciona circuito
            </option>
            {circuits.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="mt-5 flex bg-f1-red rounded-xl px-5 py-3 text-lg font-formula1 text-white"
            >
              Enviar
            </button>
          </div>
        </form>
        {selectedImage && (
          <img src={selectedImage} alt={race} className="mt-5" />
        )}
      </div>
    </div>
  )
}
