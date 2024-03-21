/* eslint-disable react/no-unescaped-entities */
// les vélos neufs
"use client";

import HeaderImage from "@/components/HeaderImage";
import CardBike from "@/components/bikes/CardBike";
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
        <div className="grid grid-cols-1 gap-2 p-2 max-w-[300px] mx-auto sm:grid-cols-2  sm:max-w-[650px] md:grid-cols-3 md:max-w-[1000px] lg:grid-cols-4 lg:max-w-[1200px] sm:gap-3 md:gap-4 sm:p-3 lg:p-4 mb-6">
          {bikes.map((bike) => (
            <CardBike key={bike.id} bike={bike} />
          ))}
        </div>
      </Container>
    </div>
  );
}
