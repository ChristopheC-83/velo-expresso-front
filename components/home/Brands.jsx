// cercle avec le bleu rotatif + logo des marques
// alimenté par le propriétaire du magasin

import Image from "next/image";
import Link from "next/link";
import Container from "../container/Container";
import { usePartners } from "@/hooks/usePartners";
import Loader from "@/app/loading";
import { motion } from "framer-motion";

export default function Brands() {
  const { data: partners, isFetching, error } = usePartners();
  // console.log(partners?.allPartners);
  const allPartners = partners?.allPartners;
  const imgPath = "https://dbve.barpat.fun/public/assets/images/partners/";

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div className="bg-neutral-800 min-h-[100px] justify-center pb-4 md:py-12">
      <Container>
        <h2 className="py-4 text-center text-white">
          Nous leur faisons confiance :
        </h2>
        <div className="flex flex-wrap justify-center">
          {allPartners.map((brand) => (
            <motion.div
              key={brand.id}
              initial={{
                opacity: 0.25,
                y: 80,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                  ease: "easeInOut",
                },
              }}
              className="m-1.5 w-[145px] h-[145px] sm:w-[180px] sm:h-[180px] md:w-[230px] md:h-[230px] shrink-0 partenaire-ext lg:m-12 "
            >
              <div className="absolute bgc-rotate flexMid"></div>
              <Link
                href={brand.link}
                target="_blank"
                rel="noreferrer"
                className="w-full h-full flexMid"
              >
                <Image
                  src={imgPath + brand.logo}
                  alt={brand.name}
                  width={400}
                  height={400}
                  className="logo-brand"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
