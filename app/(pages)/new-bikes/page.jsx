/* eslint-disable react/no-unescaped-entities */
// les vélos neufs
"use client";

import Loader from "@/app/loading";
import HeaderImage from "@/components/HeaderImage";
import CardBike from "@/components/bikes/CardBike";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { useBikes } from "@/hooks/useBikes";
import { cardToUpVariants, subTitleVariants } from "@/lib/framerVariants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {  useState } from "react";

export default function NewBikes() {
  const [showText, setShowText] = useState(false);
  const { data: bikesApi, isFetching, isLoading, error } = useBikes();
  //  on filtre les vélos neufs parmi les vélos proposés en base de données
  const bikes = bikesApi?.bikes.filter((bike) => bike.bike_new === "new");

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
      <HeaderImage image="/images/newBikes/neuf.jpg" title="Les Vélos"/>
      <Container>
        <motion.div
                initial={subTitleVariants.initialFromLeft}
                whileInView={subTitleVariants.finalState}
        >
          <h3 className="m-4 text-xl text-center font-weight sm:text-3xl ">
            Passionné, amateur ou débutant ?{" "}
          </h3>
          <div className="flex items-center justify-center">
            <div className="w-fit">
              <h3> nous avons le vélo qu'il vous faut.</h3>
              <h3> en magasin, nous avons par exemple :</h3>
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
                <p>Parce qu'il sera exactement comme vous le souhaitez.</p>
                <p>
                  Parce qu'il bénéniciera des dernières innovations matériel.
                </p>
                <p>Parce qu'il sera garanti.</p>
                <p>
                  Un vélo neuf est un investissement dans votre pratique du vélo
                  !
                </p>
                <p className="py-2 text-center">
                  <b>
                    Venez les tester ou voir les disponibilités sur commande en
                    magasin 😎.
                  </b>
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
              initial={cardToUpVariants.initialFromDown}
              whileInView={cardToUpVariants.finalState}
            >
              <CardBike bike={bike} />
            </motion.div>
          ))}
        </div>
        <h4 className="py-12 font-normal text-center">
          Pour se lancer ou trouver une bonne affaire :<br />
          <Link href="/used-bikes">
            <u>
              <b>nos vélos d'occasion !</b>
            </u>
          </Link>
        </h4>
      </Container>
    </div>
  );
}
