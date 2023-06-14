import { HeaderF1 } from "@/components/Header"
import ResultCard from "@/components/ResultCard"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function Results() {
  const router = useRouter()
  const { jsonData } = router.query
  const [responseData, setResponseData] = useState([])

  useEffect(() => {
    if (jsonData) {
      const parsedData = JSON.parse(jsonData)
      setResponseData(parsedData)
    }
  }, [jsonData])

  if (!responseData) {
    return null // or show a loading indicator/error message
  }

  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black max-w-lg mx-auto">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <h2 className="text-4xl font-bold font-formula1 mb-10">Resultados</h2>
        {responseData.length > 0 && (
          <div>
            <h3>Circuito: </h3>
            <span>{responseData[0].race}</span>
          </div>
        )}
        <div className="overflow-y-auto">
          {responseData.map((data, i) => (
            <ResultCard
              key={i}
              driver_img_url={data.driver_img_url}
              driver_name={data.driver_name}
              driver_lastname={data.driver_lastname}
              driver_id={data.driver_id}
              pit_stop_time={data.pit_stop_time}
              prediction={data.prediction}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
