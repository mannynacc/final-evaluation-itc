import { HeaderF1 } from "@/components/Header"
import { Selector } from "@/components/Selector"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black max-w-lg mx-auto">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <h2 className="text-4xl font-bold font-formula1 mb-3">Home</h2>
        <span className="font-thin">
          Explora las reglas, realiza tus predicciones y sé parte de la acción
        </span>
        <div className="flex flex-col mt-8 justify-between space-y-10 h-full">
          <Link className="w-full h-full" href="/rules">
            <Selector
              height={"full"}
              title={"Reglas"}
              imgFile={"hero-tyresgroup.png"}
              bgPosition={"left_6rem"}
            />
          </Link>
          <Link className="w-full h-full" href="/predictions">
            <Selector
              height={"full"}
              title={"Predicciones"}
              imgFile={"front-redbull.png"}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
