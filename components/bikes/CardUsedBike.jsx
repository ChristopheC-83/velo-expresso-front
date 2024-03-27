import Image from "next/image";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

export default function CardBike({ bike }) {
  const imgPath = "https://dbve.barpat.fun/public/assets/images/bikes/";
  return (
    <div
      className={`flex flex-col justify-start h-[100%] border-2 overflow-hidden  w-full`}
    >
      <div className="relative w-full p-2 overflow-hidden aspect-square">
        <Image
          src={imgPath + bike?.bike_picture}
          alt={bike?.bike_model}
          fill
          className="object-cover w-10/12 overflow-hidden duration-300 tr ansition-all hover:scale-105 aspect-auto"
        />
      </div>
      <div className="flex flex-col items-start p-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col ">
            <h2>{bike?.bike_type}</h2>
            <div className="flex flex-col">
              <h3 className="pr-2 mb-2 font-weight">{bike?.bike_brand}</h3>
              <h3 className="pr-2 mb-2 font-weight">{bike?.bike_model}</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="pb-2 text-xs text-neutral-500">En savoir plus</p>
            <Link className="pr-2 text-3xl" href={`/bike/${bike?.bike_id}`}>
              <FaPlusCircle />
            </Link>
          </div>
        </div>

        <h3>{bike?.bike_price} €</h3>
      </div>
    </div>
  );
}
