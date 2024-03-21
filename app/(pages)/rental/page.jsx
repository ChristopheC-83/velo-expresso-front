/* eslint-disable react/no-unescaped-entities */
// page des tarifs location
"use client";

import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { rental } from "@/lib/rental";

export default function page() {
  return (
    <div className="relative w-full">
      <ArrowToTop />
      <HeaderImage image="/images/rental/rental.jpg" title="La location" />
      <Container>
        <div className="w-full">
          <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
            Une demi-journée ? Une semaine ?
          </h2>
          <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
            Un VTT ? Un vélo électrique ?
          </h2>
          <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
            Nous allons voir tout ça ensemble.
          </h2>

          <div className="flex flex-wrap justify-center border-4 border-black w-11/12 mx-auto my-6 lg:w-full max-w-[950px]">
            <div className="flex w-full bg-ve-blue/50 font-weight">
              <p className="timing-rental w-[30%]">Article</p>
              <p className="timing-rental w-[15%]">Demi-journée</p>
              <p className="timing-rental w-[15%]">Journée</p>
              <p className="timing-rental w-[15%]">Journée Supp.</p>
              <p className="timing-rental w-[15%]">Semaine</p>
            </div>
            {rental.map((item) => (
              <div key={item.id} className="flex w-full">
                <p className="price-rental w-[30%] bg-ve-blue/50">
                  {item.item}
                </p>
                <p className="price-rental w-[15%]">{item.demiJournee} €</p>
                <p className="price-rental w-[15%]">{item.journee} €</p>
                <p className="price-rental w-[15%]">{item.journeeSupp} €</p>
                <p className="price-rental w-[15%]">{item.semaine} €</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto mb-6 sm:w-4/5 md:w-3/5">
          <h5 className="mb-2">
            * Le tarif d'une location sera déduit du prix d'un vélo neuf acheté
            dans le mois qui suit la location.
          </h5>
          <h5 className="mb-2">
            * Horaires de location : 9h-19h et du mardi au samedi.
          </h5>
          <h5 className="mb-2">
            * Des tarifs de groupe ( 6 personnes ou plus ) sont disponibles sur
            demande.
          </h5>
        </div>
      </Container>
    </div>
  );
}
