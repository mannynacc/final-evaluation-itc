import { HeaderF1 } from "@/components/Header"

export default function Rules() {
  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black">
      <HeaderF1 />
      <div className="flex h-full flex-col font-hauora py-5">
        <h2 className="text-4xl font-bold font-formula1 mb-3">
          Reglas basicas
        </h2>
        <span className="font-thin mb-10">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </span>
        <ul className="list-disc list-inside space-y-4 overflow-y-auto">
          <li className="font-thin">
            <span className="font-bold">Sistema de Puntos:</span> Los 10 mejores
            pilotos reciben puntos. Quien tiene más puntos al final de la
            temporada, gana.
          </li>
          <li className="font-thin">
            <span className="font-bold">Pit Stops:</span> Los equipos deben
            cambiar al menos dos tipos de neumáticos en cada carrera.
          </li>
          <li className="font-thin">
            <span className="font-bold">Safety Car y Virtual Safety Car:</span>
            Controlan la velocidad durante incidentes para mantener la
            seguridad.
          </li>
          <li className="font-thin">
            <span className="font-bold">Penalizaciones:</span>
            Los pilotos pueden ser penalizados por romper las reglas.
          </li>
          <li className="font-thin">
            <span className="font-bold">Bandera Azul:</span>
            Señal para los pilotos más lentos para dejar pasar a los que vienen
            una vuelta por delante.
          </li>
        </ul>
      </div>
    </div>
  )
}
