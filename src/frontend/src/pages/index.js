import Image from "next/image"
import Link from "next/link"
import { HeaderF1Red } from "@/components/Header"
import oracleLogo from "/public/images/oracle-logo-white.png"

export default function Welcome() {
  return (
    <div className="flex flex-col bg-[url('/bg/f1_bg.jpg')] bg-cover h-screen px-8 py-3">
      <HeaderF1Red />
      <div className="flex h-full justify-between flex-col font-hauora py-5 pt-12">
        <div>
          <h2 className="text-3xl tracking-tight text-white font-bold font-formula1 mb-3">
            ¡Bienvenido!
          </h2>
          <span className="text-lg leading-3 text-white pr-14 font-thin font-hauora">
            Prepárate para vivir la emoción de la Fórmula 1 como nunca antes.
          </span>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-center items-center mt-4">
            <span className="font-hauora text-center text-sm text-slate-500">
              Powered by
            </span>
            <Image
              alt="Oracle logo"
              src={oracleLogo}
              className="flex h-8 w-auto mt-[-3px]"
            />
          </div>
          <div className="flex justify-end font-light hover:font-medium">
            <Link
              href={"/home"}
              className="flex bg-f1-red rounded-xl px-5 py-3 text-lg font-formula1 text-white"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
