// sur smartphone, les blocs sont en colonne les uns au dessous des autres
// sur desktop, les blocs sont en ligne, 2 par ligne
//  ce sont des cadre de communication pour les sections du site
// alimenté par le propriétaire du magasin

import Image from "next/image";
import Container from "../container/Container";
import { frames } from "@/lib/frames";
import he from "he";
import { useFrames } from "@/hooks/useFrames";
import Loader from "@/app/loading";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Frames() {
  const { data: frames, isFetching, error } = useFrames();
  const allFrames = frames?.allFrames;
  // console.log(allFrames);

  const imgPath = "https://dbve.barpat.fun/public/assets/images/frames/";

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <Container>
      <div className="min-h-screen lg:my-8 ">
        <div className="flex flex-col lg:gap-8 lg:flex-row lg:flex-wrap lg:justify-center">
          {allFrames.map((frame) => (
            <motion.div
              key={frame?.id}
              className={`relative lg:w-2/5 lg:h-[600px] lg:shadow-lg hover:scale-[1.01] lg:transition-all lg:duration-500 `}
              initial={{
                opacity: 0.75,
                y: 20,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.2,
                  delay: -0.15,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src={imgPath + frame?.image}
                alt={frame?.title}
                width={500}
                height={450}
                className={`object-cover w-full h-[450px] transition-transform duration-500 ease-in-out lg:h-[600px] `}
              />
              {/* overlay si image trop clair */}
              <div
                className={`absolute inset-0 bg-neutral-900 bg-opacity-50`}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-white gap-y-4 lg:justify-between lg:py-12">
                <motion.h2
                  className="text-3xl font-bold sm:text-4xl md:text-5xl"
                  initial={{
                    opacity: 0.1,
                    y: -40,
                    scale: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.33,
                      delay: 0.15,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {he.decode(frame?.title)}
                </motion.h2>
                <motion.h5
                  className="w-1/2 text-center"
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.75,
                      delay: 0.15,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {he.decode(frame?.text)}
                </motion.h5>
                <Link
                  href={frame?.btnLink}
                  className="px-4 py-2 mt-4 font-semibold text-white border-2 border-white bg-neutral-900/50 "
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.15,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {he.decode(frame?.btnText)}
                  </motion.p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
