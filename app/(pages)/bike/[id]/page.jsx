/* eslint-disable react/no-unescaped-entities */
// Un vélo détaillé
// la DB des vélos est alimentée par le propriétaire du magasin

"use client";

import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";

import { bikesCatalogue } from "@/lib/bikes";
import Image from "next/image";

export default function OneBike({ params }) {
  let { id } = params;
  id = parseInt(id, 10);
  const bike = bikesCatalogue.filter((bike) => bike.id === id)[0];

  return (
    <div className="relative w-full">
      <ArrowToTop />
      <HeaderImage
        image={bike.picture}
        title={bike.brand}
        subtitle={bike.model}
      />
      <Container>
        <h2 className="m-8 text-xl text-center font-weight sm:text-3xl ">
          Le {bike.brand} {bike.model} en détails :
        </h2>
        <div className="flex flex-col w-full max-w-[600px] mx-auto mb-4 px-2">
          <div className="one-bike-array bg-neutral-200">
            <h3>Marque :</h3>
            <h4 className="font-normal ">
              <b>{bike.brand}</b>
            </h4>
          </div>
          <div className="one-bike-array ">
            <h3>Modèle :</h3>
            <h4 className="font-normal">
              <b>{bike.model}</b>
            </h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Neuf ?</h3>
            <h4 className="font-normal">{bike.new ? "oui" : "occasion"}</h4>
          </div>
          <div className="one-bike-array ">
            <h3>Type :</h3>
            <h4 className="font-normal">{bike.typeBike}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Taille du Cadre :</h3>
            <h4 className="font-normal">{bike.size}</h4>
          </div>
          <div className="one-bike-array">
            <h3>Suspension :</h3>
            <h4 className="font-normal">{bike.suspension}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Nombre de vitesses :</h3>
            <h4 className="font-normal">{bike.numberSpeeds}</h4>
          </div>
          <div className="one-bike-array">
            <h3>Transmission :</h3>
            <h4 className="font-normal">{bike.transmission}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Dimension des roues</h3>
            <h4 className="font-normal">{bike.wheelsType} "</h4>
          </div>
          <div className="one-bike-array">
            <h3>Roues :</h3>
            <h4 className="font-normal">{bike.wheels}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Freins</h3>
            <h4 className="font-normal">{bike.brake} "</h4>
          </div>
          <div className="one-bike-array">
            <h3>Roues :</h3>
            <h4 className="font-normal">{bike.wheels}</h4>
          </div>

          <div className="one-bike-array bg-neutral-200">
            <h3>Electrique :</h3>
            <h4 className="font-normal">{bike.electric ? "oui" : "non"} </h4>
          </div>
          <div className="one-bike-array">
            <h3>Détail :</h3>
            <h4 className="font-normal">{bike.detail}</h4>
          </div>

          {!bike.promo ? (
            <div className="one-bike-array bg-neutral-200">
              <h3>Prix</h3>
              <h4>{bike.price} €</h4>
            </div>
          ) : (
            <>
              <div className="one-bike-array bg-neutral-200">
                <h3>Prix</h3>
                <h4 className="font-normal">
                  <s>{bike.price} €</s>
                </h4>
              </div>
              <div className="text-white bg-red-500 one-bike-array">
                <h3>Prix Promo</h3>
                <h3 className="text-white">{bike.pricePromo} €</h3>
              </div>
            </>
          )}
          {bike.description && (
            <div className="w-full my-4">
              <h3>Description</h3>
              <h4 className="font-normal">{bike.description}</h4>
            </div>
          )}
        </div>
      </Container>
      <div className="relative w-full my-6 flexMid">
        <Image alt={bike.model} src={bike.picture} width={900} height={600} />
      </div>
    </div>
  );
}
