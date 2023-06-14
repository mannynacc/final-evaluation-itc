import Link from "next/link"

function ResultCard({
  driver_img_url,
  driver_name,
  driver_lastname,
  driver_id,
  pit_stop_time,
  prediction,
}) {
  return (
    <Link href={`/driver/${driver_id}`}>
      <div className="bg-black rounded-2xl text-white p-2 px-6 my-2">
        <div className="flex border-b-2 border-white mb-3">
          <div className="w-full mb-1">
            <img
              src={driver_img_url}
              alt={driver_img_url}
              className="w-20 h-24 object-cover inline-block mb-1"
            />

            <p className="font-thin text-lg -mb-1">{driver_name}</p>
            <p className="font-semibold text-3xl">{driver_lastname}</p>
          </div>
          <p className="text-6xl mt-2">{driver_id}</p>
        </div>
        <div className="mb-2">
          <span className="bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {prediction}%
          </span>
          <span className="bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
            {pit_stop_time}s
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ResultCard
