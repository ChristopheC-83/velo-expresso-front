/* eslint-disable react/no-unescaped-entities */
// les vélos neufs
"use client";

import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { bikesCatalogue } from "@/lib/bikes";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const bikes = bikesCatalogue.filter((bike) => bike.new === true);
  console.log("bikes", bikes);

  return (
    <div className="relative w-full">
      <ArrowToTop />
      <HeaderImage image="/images/rental/rental.jpg" title="Les Vélos" />
      <Container>
        <h3 className="m-4 text-xl text-center font-weight sm:text-3xl ">
          Passionné, amateur ou débutant, <br />
          nous avons le vélo qu'il vous faut.
        </h3>
        <div className="grid w-full grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 md:gap-4 sm:p-3 lg:p-4">
          {bikes.map((bike) => (
            <Link
              href={`/bike/${bike?.id}`}
              key={bike?.id}
              className={`flex flex-col justify-between h-[100%] border-2 overflow-hidden  w-full ${
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
                <h3>{bike?.typeBike}</h3>
                <h4 className="mb-2 text-center font-weight">
                  {bike?.brand} {bike?.model}
                </h4>

                {!bike.promo ? (
                  <h3>{bike?.price} €</h3>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-neutral-500">
                      <s>{bike?.price} €</s>
                    </h4>{" "}
                    <h2 className="text-red-600">{bike?.pricePromo} €</h2>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
