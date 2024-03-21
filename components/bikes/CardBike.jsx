import Image from "next/image";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

export default function CardBike({ bike }) {
  return (
    <div
      className={`flex flex-col justify-start h-[100%] border-2 overflow-hidden  w-full ${
        bike?.promo && "promo"
      }`}
    >
      <div className="relative w-full p-2 overflow-hidden aspect-square">
        <Image
          src={bike?.picture}
          alt={bike?.model}
          fill
          className="object-cover w-10/12 overflow-hidden duration-300 tr ansition-all hover:scale-105 aspect-auto"
        />
      </div>
      <div className="flex flex-col items-start p-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col ">
            <h2>{bike?.typeBike}</h2>
            <div className="flex flex-col">
                <h3 className="pr-2 mb-2 font-weight">
                  {bike?.brand} 
                </h3>
                <h3 className="pr-2 mb-2 font-weight">
                {bike?.model}
                </h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="pb-2 text-xs text-neutral-500">En savoir plus</p>
              <Link className="pr-2 text-3xl" href={`/bike/${bike?.id}`}>
                <FaPlusCircle />
              </Link>
          </div>
        </div>

        {!bike.promo ? (
          <h3>{bike?.price} €</h3>
        ) : (
          <div className="flex items-center justify-between w-full">
            <h3 className="text-neutral-500">
              <s>{bike?.price} €</s>
            </h3>{" "}
            <h3 className="text-2xl text-red-600">{bike?.pricePromo} €</h3>
          </div>
        )}
      </div>
    </div>
  );
}