/* eslint-disable react/no-unescaped-entities */
// Un vélo détaillé
"use client";

import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";

import { bikesCatalogue } from "@/lib/bikes";

export default function OneBike({ params }) {
  let { id } = params;
  id = parseInt(id, 10)
  const bike = bikesCatalogue.filter((bike) => bike.id === id)[0];
  console.log(bike);

  return (
    <div className="relative w-full">
    <ArrowToTop />
    <HeaderImage image={bike.picture} title={bike.brand} subtitle={bike.model}/>
    <Container>
      <h3 className="m-4 text-xl text-center font-weight sm:text-3xl ">
        Passionné, amateur ou débutant ?{" "}
      </h3>
    
      </Container>
    </div>
    );
}
