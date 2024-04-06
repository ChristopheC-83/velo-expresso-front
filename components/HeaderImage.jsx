// image d'entête d'un page

import { motion } from "framer-motion";

export default function HeaderImage({ image, title, subtitle }) {
  return (
    <motion.div className="w-full  h-[60vw] sm:h-[90vh] bg-ve-dark overflow-hidden">
      <motion.div
        className={`relative w-full h-full bg-no-repeat bg-top aspect-square sm:aspect-[16/9] overflow-hidden bg-auto sm:bg-cover bg-fixed`}
        style={{ backgroundImage: `url(${image})` }}
        
      >
        <div className="relative w-full h-full text-white flexMid">
          <div className={`absolute inset-0 ${"bg-neutral-900/20"}`}></div>
          <motion.div
            className="absolute top-[45%]  w-full"
            initial={{
              y: -40,
              scale: 0.75,
              opacity: 0,
            }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <h2 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-7xl text-shadow-xl">
              {title}
            </h2>
            {subtitle && (
              <h3 className="mt-4 text-2xl text-center sm:text-3xl md:text-4xl lg:text-6xl text-shadow-xl">
                {subtitle}
              </h3>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
