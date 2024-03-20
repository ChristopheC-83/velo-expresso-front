export default function HeaderImage({ image, title }) {
  return (
    <div className="w-full  h-[100vw] lg:h-[90vh] bg-ve-dark ">
      <div
        className={`relative w-full h-[100vw] lg:h-[90vh] bg-no-repeat bg-top aspect-square lg:aspect-[16/9] overflow-hidden bg-cover `}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative w-full h-full text-white flexMid">
          <div className={`absolute inset-0 ${"bg-neutral-900/50"}`}></div>
          <div className="absolute top-[45%]  w-full">
            <h2 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-7xl text-shadow-xl">{title}</h2>
          </div>

        </div>
      </div>
    </div>
  );
}
