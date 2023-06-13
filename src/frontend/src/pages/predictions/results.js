import { HeaderF1 } from "@/components/Header"
import ResultCard from "@/components/ResultCard"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Results() {
  const router = useRouter()
  const { jsonData } = router.query
  const parsedData = JSON.parse(jsonData)
  const [responseData] = useState(parsedData)

  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <h2 className="text-4xl font-bold font-formula1 mb-10">Resultados</h2>
        {responseData && (
          <div>
            <h3>Circuito: </h3>
            <span>{responseData[0].race}</span>
          </div>
        )}
        <div className="overflow-y-auto">
          {responseData.map((data, i) => (
            <ResultCard
              key={i}
              driver_id={data.driver_id}
              driver_name={data.driver_name}
              driver_lastname={data.driver_lastname}
              pit_stop_time={data.pit_stop_time}
              prediction={data.prediction}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
