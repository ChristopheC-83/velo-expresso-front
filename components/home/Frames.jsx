// sur smartphone, les blocs sont en colonne les uns au dessous des autres
// sur desktop, les blocs sont en ligne, 2 par ligne
//  ce sont des cadre de communication pour les sections du site
// alimenté par le propriétaire du magasin

import Image from "next/image";
import Container from "../container/Container";
import { frames } from "@/lib/frames";

export default function Frames() {
  return (
    <Container>
      <div className="min-h-screen lg:my-8 ">
        <div className="flex flex-col lg:gap-8 lg:flex-row lg:flex-wrap lg:justify-center">
          {frames.map((frame, index) => (
            <div
              key={frame.id}
              className={`relative lg:w-2/5 lg:h-[600px] lg:shadow-lg hover:scale-[1.01] lg:transition-all lg:duration-500 `}
            >
              <Image
                src={frame.image}
                alt={frame.title}
                width={500}
                height={450}
                className={`object-cover w-full h-[450px] transition-transform duration-500 ease-in-out lg:h-[600px] `}
              />
              {/* overlay si image trop clair */}
              <div
                className={`absolute inset-0 bg-neutral-900 bg-opacity-30`}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-white gap-y-4 lg:justify-between lg:py-12">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  {frame.title}
                </h2>
                <p className="w-1/2 text-center">{frame.text}</p>
                <a
                  href={frame.btnLink}
                  className="px-4 py-2 mt-4 font-semibold text-white border-2 border-white bg-neutral-900/50 "
                >
                  {frame.btnText}
                  {index}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
