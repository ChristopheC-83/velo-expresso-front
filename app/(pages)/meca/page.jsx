/* eslint-disable react/no-unescaped-entities */
// page des tarifs atelier
"use client";

import Loader from "@/app/loading";
import HeaderImage from "@/components/HeaderImage";
import Container from "@/components/container/Container";
import ArrowToTop from "@/components/home/components/ArrowToTop";
import { useWorkshop } from "@/hooks/useWorkshop";
import { categoriesMeca, meca } from "@/lib/meca";

export default function Atelier() {
  const { data: workshop, isFetching, error } = useWorkshop();
  console.log(workshop);
  const categories = workshop?.categoriesWorkshop
  const tasks = workshop?.tasksWorkshop

  console.log(categories);
  console.log(tasks);

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div className="relative w-full">
      <ArrowToTop />
      <HeaderImage image="/images/meca/meca.jpg" title="L'atelier" />
      <Container>
        <div className="w-full">
          <h2 className="m-4 text-xl text-center font-weight sm:text-3xl ">
            Retrouvez ici les tarifs et les forfaits pour l'entretien de votre
            vélo.
          </h2>

          <div className="flex flex-wrap justify-center w-full gap-2 pt-4 mx-auto my-6 sm:gap-x-2 md:gap-x-4 md:w-full">
            {categoriesMeca.map((categorie) => (
              <div
                key={categorie.id}
                className="w-full h-fit text-center border-x-2 border-t-2 border-black xs:w-[350px]"
              >
                <div className="flex flex-col">
                  <h3 className="py-4 uppercase border-b-2 border-black bg-ve-blue/50">
                    {categorie.categorie}
                  </h3>

                  {meca
                    .filter((item) => item.categorie === categorie.categorie)
                    .map((operation) => (
                      <div
                        key={operation.id}
                        className="flex items-center justify-between w-full p-2 border-b-2 border-black"
                      >
                        <p>{operation.opération}</p>
                        <p>{operation.prix} €</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <div className="w-[350px] h-1"></div>
            <div className="w-[350px] h-1"></div>
          </div>
        </div>
        <div className="w-full mx-auto mb-6 sm:w-4/5 md:w-3/5">
          <h5 className="mb-2">
            * Ces tarifs sont estimatifs. Un devis final vous sera communiquer
            lorsque nous verrons le vélo en magasin.
          </h5>
          <h5 className="mb-2">
            * Une intervention peut mettre à jour une/des défectuosité(s). Dans
            ce cas, un nouveau devis vous sera adressé.
          </h5>
          <h5 className="mb-2">
            * Les cables internes pouvant prendre du temps à être changés, un
            supplément s'élevant jusqu'à 90€ pourra être ajouté à la facture.
          </h5>
        </div>
      </Container>
    </div>
  );
}
