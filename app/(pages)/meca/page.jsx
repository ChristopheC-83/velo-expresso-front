/* eslint-disable react/no-unescaped-entities */
// page des tarifs atelier
"use client";

import Loader from "@/app/loading";
import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { useWorkshop } from "@/hooks/useWorkshop";
import he from "he";
import {motion} from "framer-motion";

export default function Atelier() {
  const { data: workshop, isFetching, error } = useWorkshop();
  const categories = workshop?.categoriesWorkshop;
  const tasks = workshop?.tasksWorkshop;

  // console.log(categories);
  // console.log(tasks);

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div className="relative w-full">
      <ArrowToTop />
      <HeaderImage image="/images/meca/meca.jpg" title="L'atelier"/>
      <Container>
        <div className="w-full">
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
            <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
              Retrouvez ici les tarifs et les forfaits pour l'entretien de votre
              vélo :
            </h2>
          </motion.div>
          <motion.div
          initial={{
            opacity: 0.15,
            x: 250,
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
            <h4 className="m-4 text-xl text-center font-weight sm:text-3xl ">
              Nous montons également les pièces <br />que vous nous rapportez avec votre vélo 😉
            </h4>
          </motion.div>

          <div className="flex flex-wrap justify-center w-full gap-2 pt-4 mx-auto my-6 sm:gap-x-2 md:gap-x-4 md:w-full">
            {categories.map((categorie, index) => (
              <div
                key={categorie.id}
                className="w-full h-fit text-center border-x-2 border-t-2 border-black xs:w-[350px]"
              >
                <div className="flex flex-col">
                  <h3 className="py-4 uppercase border-b-2 border-black bg-ve-blue/50">
                    {categorie.name}
                  </h3>

                  {tasks
                    .filter((task) => task.task_category === categorie.name)
                    .map((operation) => (
                      <div
                        key={operation.id}
                        className="flex items-center justify-between w-full p-2 border-b-2 border-black"
                      >
                        <p>{he.decode(operation.name)}</p>
                        <p>{operation.task_price} €</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <div className="w-[350px] h-1"></div>
            <div className="w-[350px] h-1"></div>
          </div>
        </div>
        <div className="w-full mx-auto my-6 sm:w-4/5 md:w-3/5">
        <hr />
          <h5 className="mt-6 mb-4">
            * Ces tarifs sont estimatifs. Un devis final vous sera communiqué
            lorsque nous verrons le vélo en magasin.
          </h5>
          <h5 className="mb-4">
            * Une intervention peut mettre à jour une/des défectuosité(s). Dans
            ce cas, un nouveau devis vous sera adressé.
          </h5>
          <h5 className="mb-4">
            * Les cables internes pouvant prendre du temps à être changés, un
            supplément s'élevant jusqu'à 90€ pourra être ajouté à la facture.
          </h5>
          <h5 className="mb-4">
            * Les tarifs des prestations s'entendent hors pièces.
          </h5>
        </div>
      </Container>
    </div>
  );
}
