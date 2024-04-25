/* eslint-disable react/no-unescaped-entities */
// page des tarifs location
// alimenté par le propriétaire du magasin

"use client";

import Loader from "@/app/loading";
import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { useRentals } from "@/hooks/useRentals";
import he from "he";
import { motion } from "framer-motion";
import { cardToUpVariants, subTitleVariants } from "@/lib/framerVariants";

export default function Rentals() {
  const { data: rentals, isFetching, error } = useRentals();
  const rentalsItems = rentals?.rentalsItems;
  const rentalsText = rentals?.textUnderRentals.text_rental;
  let decryptedText = "";

  if (rentalsText) {
    decryptedText = he.decode(rentalsText);
  }

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div className="relative w-full overflow-hidden ">
      <ArrowToTop />
      <HeaderImage image="/images/rental/rental.jpg" title="La location" />
      <Container>
        <div className="w-full px-4">
          <motion.div
            initial={subTitleVariants.initialFromLeft}
            whileInView={subTitleVariants.finalState}
          >
            <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
              Une demi-journée ? Une semaine ?
            </h2>
          </motion.div>
          <motion.div
            initial={subTitleVariants.initialFromRight}
            whileInView={subTitleVariants.finalState}
          >
            <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
              Un VTT ? Un vélo électrique ?
            </h2>
          </motion.div>
          <motion.div
            initial={subTitleVariants.initialFromLeft}
            whileInView={subTitleVariants.finalState}
          >
            <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
              Nous allons voir tout ça ensemble.
            </h2>
          </motion.div>

          {/*  tableau des tarifs pour les locations, mis en DB et modifiables par le propriétaire du mag */}
          <motion.div
            initial={cardToUpVariants.initialFromDown}
            whileInView={cardToUpVariants.finalState}
            className="flex flex-wrap justify-center border-4 border-black w-full mx-auto my-6 lg:w-full max-w-[950px]"
          >
            <div className="flex w-full bg-neutral-900 text-neutral-50 font-weight">
              <p className="timing-rental w-[30%]">Article</p>
              <p className="timing-rental w-[15%]">Demi-journée</p>
              <p className="timing-rental w-[15%]">Journée</p>
              <p className="timing-rental w-[15%]">Journée Supp.</p>
              <p className="timing-rental w-[15%]">Semaine</p>
            </div>
            {rentalsItems.map((item) => (
              <div key={item.id} className="flex w-full">
                <div className="price-rental  w-[30%] bg-neutral-900 text-neutral-50 ">
                  <p className="mr-auto">{he.decode(item.name)}</p>
                </div>
                <p className="price-rental w-[15%]">{item.half_day} €</p>
                <p className="price-rental w-[15%]">{item.day} €</p>
                <p className="price-rental w-[15%]">{item.extra_day} €</p>
                <p className="price-rental w-[15%]">{item.week} €</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Texte fourni par la DB, par le proprio du mag */}
        <div className="w-full px-4 mx-auto mb-6 sm:w-4/5 md:w-3/5">
          <hr />
          {decryptedText && (
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: decryptedText }}
            />
          )}
        </div>
      </Container>
    </div>
  );
}
