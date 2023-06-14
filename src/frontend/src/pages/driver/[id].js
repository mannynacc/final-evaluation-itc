import { HeaderF1 } from "@/components/Header"
import { getDriverInfo } from "@/services/getDriversInfo"
import Router from "next/router"

export default function Page({ driver }) {
  const goBackButton = () => {
    Router.back()
  }

  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black max-w-lg mx-auto">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <div className="flex justify-between items-start mb-10">
          <h2 className="text-4xl font-bold font-formula1">Driver info</h2>
          <button onClick={goBackButton}>Go back</button>
        </div>
        {driver && (
          <div className="text-black">
            <h3>Driver: </h3>
            <span>{driver.id}</span>
          </div>
        )}
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
