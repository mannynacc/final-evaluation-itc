export const Selector = ({
  height = "1/2",
  title,
  bgPosition,
  imgFile = "",
}) => {
  return (
    <div
      className={`bg-slate-100 rounded-xl h-${height} py-5 px-8 bg-no-repeat bg-[length:90%_auto] bg-[${bgPosition}] relative overflow-hidden`}
    >
      <span className="text-gray-950 text-3xl font-formula1">{title}</span>
      <img
        src={`/images/${imgFile}`}
        alt=""
        className="absolute right-0 bottom-0 object-cover md:max-w-[65%]"
      />
    </div>
  )
}
