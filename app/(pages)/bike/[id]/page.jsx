/* eslint-disable react/no-unescaped-entities */
// Un vélo détaillé en fonction de son ID
// la DB des vélos est alimentée par le propriétaire du magasin

"use client";

import Loader from "@/app/loading";
import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { useBikes } from "@/hooks/useBikes";
import he from "he";
import { motion } from "framer-motion";

import Image from "next/image";
import { cardToUpVariants, subTitleVariants } from "@/lib/framerVariants";

export default function OneBike({ params }) {
  const imgPath = "https://dbve.barpat.fun/public/assets/images/bikes/";

  let { id } = params;
  id = parseInt(id, 10);
  // const bike = bikesCatalogue.filter((bike) => bike?.id === id)[0];
  const { data: bikesApi, isFetching, isLoading, error } = useBikes();
  const bike = bikesApi?.bikes.filter((bike) => bike?.bike_id == id)[0];

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
    <div className="relative w-full overflow-hidden">
      <ArrowToTop />
      <HeaderImage
        image={imgPath + bike?.bike_picture}
        title={bike?.bike_brand}
        subtitle={bike?.bike_model}
      />
      <Container>
        <motion.div
          initial={subTitleVariants.initialFromLeft}
          whileInView={subTitleVariants.finalState}
        >
          <h2 className="m-8 text-xl text-center font-weight sm:text-3xl ">
            Le <span className="uppercase ">{bike?.bike_brand}</span>{" "}
            <span className="capitalize ">{bike?.bike_model}</span>
          </h2>
        </motion.div>
        <motion.div
          initial={subTitleVariants.initialFromRight}
          whileInView={subTitleVariants.finalState}
        >
          <h3 className="m-8 text-lg text-center font-weight sm:text-2xl ">
            Vélo
            {bike?.bike_new === "new" ? " neuf." : " d' occasion."}
          </h3>
        </motion.div>
        <motion.div
          initial={cardToUpVariants.initialFromDown}
          whileInView={cardToUpVariants.finalState}
          className="flex flex-col w-full max-w-[600px] mx-auto mb-4 px-2"
        >
          <div className="one-bike-array bg-neutral-200">
            <h3>Marque :</h3>
            <h4 className="font-normal uppercase ">
              <b>{bike?.bike_brand}</b>
            </h4>
          </div>
          <div className="one-bike-array ">
            <h3>Modèle :</h3>
            <h4 className="font-normal capitalize ">
              <b>{bike?.bike_model}</b>
            </h4>
          </div>
          <div className="one-bike-array bg-neutral-200">
            <h3>Neuf ?</h3>
            <h4 className="font-normal">
              {bike?.bike_new === "new" ? "oui" : "occasion"}
            </h4>
          </div>
          {bike?.bike_type && (
            <div className="one-bike-array ">
              <h3>Type :</h3>
              <h4 className="font-normal">{bike?.bike_type}</h4>
            </div>
          )}
          {bike?.bike_size && (
            <div className="one-bike-array bg-neutral-200">
              <h3>Taille du Cadre :</h3>
              <h4 className="font-normal">{bike?.bike_size}</h4>
            </div>
          )}
          {bike?.bike_suspension && (
            <div className="one-bike-array">
              <h3>Suspension :</h3>
              <h4 className="font-normal">{bike?.bike_suspension}</h4>
            </div>
          )}
          {bike?.bike_speeds_number && (
            <div className="one-bike-array bg-neutral-200">
              <h3>Nombre de vitesses :</h3>
              <h4 className="font-normal">{bike?.bike_speeds_number}</h4>
            </div>
          )}
          {bike?.bike_transmission && (
            <div className="one-bike-array">
              <h3>Transmission :</h3>
              <h4 className="font-normal">{bike?.bike_transmission}</h4>
            </div>
          )}
          {bike?.bike_wheels_dim && (
            <div className="one-bike-array bg-neutral-200">
              <h3>Dimension des roues</h3>
              <h4 className="font-normal">{bike?.bike_wheels_dim}"</h4>
            </div>
          )}
          {bike?.bike_wheels && (
            <div className="one-bike-array">
              <h3>Roues :</h3>
              <h4 className="font-normal">{bike?.bike_wheels}</h4>
            </div>
          )}
          {bike?.bike_brake && (
            <div className="one-bike-array bg-neutral-200">
              <h3>Freins : </h3>
              <h4 className="font-normal">{bike?.bike_brake}</h4>
            </div>
          )}

          <div className="one-bike-array ">
            <h3>Electrique :</h3>
            <h4 className="font-normal">{bike?.bike_elec ? "oui" : "non"} </h4>
          </div>

          {bike?.bike_elec_detail && (
            <div className="one-bike-array bg-neutral-200">
              <h3>Détail :</h3>
              <h4 className="font-normal">{bike?.bike_elec_detail}</h4>
            </div>
          )}

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
          {bike?.bike_description && (
            <div className="w-full my-6">
              <h3><u>Informations complémentaires :</u></h3>
              <br />
              <h4 className="font-normal">
                {he.decode(bike?.bike_description)}
              </h4>
            </div>
          )}
        </motion.div>
      </Container>

      <div className="relative w-full my-16 flexMid">
        <Image
          alt={bike?.bike_model}
          src={imgPath + bike?.bike_picture}
          width={900}
          height={600}
        />
      </div>
    </div>
  );
}
