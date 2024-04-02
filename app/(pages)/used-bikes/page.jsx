/* eslint-disable react/no-unescaped-entities */
// les vélos d'occasion
"use client";

import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import CardUsedBike from "@/components/bikes/CardUsedBike";
import Link from "next/link";
import { useState } from "react";
import { useBikes } from "@/hooks/useBikes";
import Loader from "@/app/loading";
import { motion, AnimatePresence } from "framer-motion";

export default function UsedBikes() {
  // const bikes = bikesCatalogue.filter((bike) => bike.new === false);
  const [showText, setShowText] = useState(false);
  const { data: bikesApi, isFetching, isLoading, error } = useBikes();
  const bikes = bikesApi?.bikes.filter((bike) => bike.bike_new === "used");
  // if (bikes) {
  //   console.log(bikes);
  // }

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
        image="/images/rental/rental.jpg"
        title="Les Vélos d'occasion"
      />
      <Container>
        <motion.div
        initial={{
          opacity: 0.15,
          x: -250,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: -0.15,
            ease: "easeInOut",
          },
        }}
        >
          <h3 className="m-4 text-xl text-center font-weight sm:text-3xl ">
            Vous cherchez un vélo d'occasion ?
          </h3>
          <div className="flex items-center justify-center">
            <div className="w-fit">
              <h3 className="m-4 text-xl text-center font-weight sm:text-3xl ">
                Nous avons des vélos d'occasion !
              </h3>
              <div
                onClick={() => {
                  setShowText(!showText);
                }}
                className="cursor-pointer text-end text-ve-blue"
              >
                {!showText && "lire la suite... ⏬"}
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showText && (
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -50, opacity: 0 }}
            >
              <div className="mx-auto w-fit">
                <p>Parce que ça sera une bonne affaire.</p>
                <p>Parce que vous voulez donner une seconde vie à un vélo.</p>
                <p>
                  Parce qu'il y en a pour tout le monde (femme, enfant, homme,
                  électrique ou non !)
                </p>
                <p>
                  Un vélo d'occasion permet de se lancer ou de continuer
                  l'aventure !{" "}
                </p>
                <p className="py-2 text-center">
                  <b>Venez les tester directement en magasin 😉</b>
                </p>
                <div
                  onClick={() => {
                    setShowText(!showText);
                  }}
                  className="cursor-pointer text-end text-ve-blue"
                >
                  {showText && "masquer ⏫"}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-1 gap-2 p-2 max-w-[300px] mx-auto sm:grid-cols-2  sm:max-w-[650px] md:grid-cols-3 md:max-w-[1000px] lg:grid-cols-4 lg:max-w-[1200px] sm:gap-3 md:gap-4 sm:p-3 lg:p-4 mb-6">
          {bikes?.map((bike) => (
          <motion.div
          key={bike?.bike_id}
          initial={{
            opacity: 0.5,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
              delay: -0.15,
              ease: "easeInOut",
            },
          }}
        >
            <CardUsedBike bike={bike} />
            
            </motion.div>
          ))}
        </div>
        <h4 className="py-4 font-normal text-center">
          Vous savez exactement ce que vous voulez ? <br /> Vous voulez
          inaugurer votre{" "}
          <Link href="/new-bikes">
            <u>
              <b>vélo neuf !</b>
            </u>
          </Link>
        </h4>
      </Container>
    </div>
  );
}
