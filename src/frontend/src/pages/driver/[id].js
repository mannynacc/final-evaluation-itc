import { HeaderF1 } from "@/components/Header"
import { getDriverInfo } from "@/services/getDriversInfo"
import Image from "next/image"
import Router from "next/router"

export default function Page({ driver }) {
  const goBackButton = () => {
    Router.back()
  }

  const Card = ({ title, value }) => (
    <div className="flex justify-between">
      <p className="font-semibold">{title}:</p>
      <p className="text-right">{value}</p>
    </div>
  )

  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black max-w-lg mx-auto">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold font-formula1">Info Piloto</h2>
          <button onClick={goBackButton}>{`\u2190`} Ir atras</button>
        </div>
        <Image
          priority
          src={driver.img_url}
          alt={driver.img_url}
          width={200}
          height={200}
          className="w-48 h-48 object-cover inline-block mb-1"
        />
        <div className="grid grid-cols-1 gap-y-4 mx-2 border border-slate-50 p-4 rounded-xl font-formula1 shadow-xl">
          {driver && (
            <div className="text-black text-sm space-y-2">
              <Card
                title="Nombre"
                value={driver.name + " " + driver.lastname}
              />
              <Card title="Piloto" value={driver.id} />
              <Card title="Equipo" value={driver.team} />
              <Card title="País" value={driver.country} />
              <Card title="Podios" value={driver.podiums} />
              <Card title="Puntos" value={driver.points} />
              <Card
                title="Grand Prix Ingresados"
                value={driver.grands_prix_entered}
              />
              <Card
                title="Campeonatos Mundiales"
                value={driver.world_championships}
              />
              <Card title="Mejor Posición" value={driver.highest_race_finish} />
              <Card
                title="Mejor Posición en parilla"
                value={driver.highest_grid_position}
              />
              <Card title="Fecha nacimiento" value={driver.date_of_birth} />
              <Card title="Lugar nacimiento" value={driver.place_of_birth} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const driver = await getDriverInfo(params.id)
  // const driver = {
  //   id: "1",
  //   img_url: "https://example.com/driver1.jpg",
  //   team: "Team A",
  //   country: "Country X",
  //   podiums: "5",
  //   points: "120",
  //   grands_prix_entered: "20",
  //   world_championships: "1",
  //   highest_race_finish: "1st",
  //   highest_grid_position: "2nd",
  //   date_of_birth: "1990-01-01",
  //   place_of_birth: "City Y",
  //   biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // }
  return {
    props: { driver },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "4" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "14" } },
      { params: { id: "16" } },
      { params: { id: "18" } },
      { params: { id: "20" } },
      { params: { id: "21" } },
      { params: { id: "22" } },
      { params: { id: "23" } },
      { params: { id: "24" } },
      { params: { id: "27" } },
      { params: { id: "31" } },
      { params: { id: "44" } },
      { params: { id: "55" } },
      { params: { id: "63" } },
      { params: { id: "77" } },
      { params: { id: "81" } },
    ],

    fallback: false,
  }
}
