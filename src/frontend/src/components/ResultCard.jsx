function ResultCard({
  driver_name,
  driver_lastname,
  driver_id,
  pit_stop_time,
  prediction,
}) {
  return (
    <div className="bg-black rounded-md text-white p-3 my-2">
      <div className="flex border-b-2  border-black mb-3">
        <div className="w-full">
          <span>img</span>
          <p className="font-thin text-lg -mb-2">{driver_name}</p>
          <p className="font-semibold text-3xl">{driver_lastname}</p>
        </div>
        <p className="text-5xl">{driver_id}</p>
      </div>
      <span className="bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {prediction}%
      </span>
      <span className="bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
        {pit_stop_time}s
      </span>
    </div>
  )
}

export default ResultCard
