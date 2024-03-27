/* eslint-disable react/no-unescaped-entities */
// Un vélo détaillé
// la DB des vélos est alimentée par le propriétaire du magasin

"use client";

import Loader from "@/app/loading";
import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { useBikes } from "@/hooks/useBikes";

import { bikesCatalogue } from "@/lib/bikes";
import Image from "next/image";

export default function OneBike({ params }) {
  
  const imgPath = "https://dbve.barpat.fun/public/assets/images/bikes/";
  
  let { id } = params;
  id = parseInt(id, 10);
  // const bike = bikesCatalogue.filter((bike) => bike?.id === id)[0];

  const { data: bikesApi, isFetching, isLoading, error } = useBikes();
  const bike = bikesApi?.bikes.filter((bike) => bike?.bike_id == id)[0];

  if (bike) {
    console.log(bike);
  }

  if (isFetching) {
    return <Loader />;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div className="relative w-full">
      <ArrowToTop />
      <HeaderImage
        image={imgPath + bike?.bike_picture}
        title={bike?.bike_brand}
        subtitle={bike?.bike_model}
      />
      <Container>
        <h2 className="m-8 text-xl text-center font-weight sm:text-3xl ">
          Le {bike?.bike_brand} {bike?.bike_model} en détails
        </h2>
        <div className="flex flex-col w-full max-w-[600px] mx-auto mb-4 px-2">
          <div className="one-bike-array bg-neutral-200">
            <h3>Marque :</h3>
            <h4 className="font-normal ">
              <b>{bike?.bike_brand}</b>
            </h4>
          </div>
          <div className="one-bike-array ">
            <h3>Modèle :</h3>
            <h4 className="font-normal">
              <b>{bike?.bike_model}</b>
            </h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Neuf ?</h3>
            <h4 className="font-normal">{bike?.bike_new ? "oui" : "occasion"}</h4>
          </div>
          <div className="one-bike-array ">
            <h3>Type :</h3>
            <h4 className="font-normal">{bike?.bike_type}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Taille du Cadre :</h3>
            <h4 className="font-normal">{bike?.bike_size}</h4>
          </div>
          <div className="one-bike-array">
            <h3>Suspension :</h3>
            <h4 className="font-normal">{bike?.bike_suspension}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Nombre de vitesses :</h3>
            <h4 className="font-normal">{bike?.bike_speeds_number}</h4>
          </div>
          <div className="one-bike-array">
            <h3>Transmission :</h3>
            <h4 className="font-normal">{bike?.bike_transmission}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Dimension des roues</h3>
            <h4 className="font-normal">{bike?.bike_wheels_dim} "</h4>
          </div>
          <div className="one-bike-array">
            <h3>Roues :</h3>
            <h4 className="font-normal">{bike?.bike_wheels}</h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Freins</h3>
            <h4 className="font-normal">{bike?.bike_brake} "</h4>
          </div>
          <div className="one-bike-array">
            <h3>Roues :</h3>
            <h4 className="font-normal">{bike?.bike_wheels}</h4>
          </div>

          <div className="one-bike-array bg-neutral-200">
            <h3>Electrique :</h3>
            <h4 className="font-normal">{bike?.bike_elec ? "oui" : "non"} </h4>
          </div>
          <div className="one-bike-array">
            <h3>Détail :</h3>
            <h4 className="font-normal">{bike?.bike_elec_detail}</h4>
          </div>

          {!bike?.bike_promo ? (
            <div className="one-bike-array bg-neutral-200">
              <h3>Prix</h3>
              <h4>{bike?.bike_price} €</h4>
            </div>
          ) : (
            <>
              <div className="one-bike-array bg-neutral-200">
                <h3>Prix</h3>
                <h4 className="font-normal">
                  <s>{bike?.bike_price} €</s>
                </h4>
              </div>
              <div className="text-white bg-red-500 one-bike-array">
                <h3>Prix Promo</h3>
                <h3 className="text-white">{bike?.bike_price_promo} €</h3>
              </div>
            </>
          )}
          {bike?.description && (
            <div className="w-full my-4">
              <h3>Description</h3>
              <h4 className="font-normal">{bike?.bike_description}</h4>
            </div>
          )}
        </div>
      </Container>
      <div className="relative w-full my-6 flexMid">
        <Image alt={bike?.bike_model} src={imgPath + bike?.bike_picture} width={900} height={600} />
      </div>
    </div>
  );
}
