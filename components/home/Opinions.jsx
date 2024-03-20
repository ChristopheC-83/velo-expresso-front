"use client";

import { opinions } from "@/lib/opinions"; // prendre seulement si validate !!! true
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import OpinionCard from "./components/OpinionCard";
import OpinionInput from "./components/OpinionInput";

export default function Opinions() {
  const [indexOpinion, setIndexOpinion] = useState(2);

  function nextOpinion() {
    if (indexOpinion < opinions.length - 1) {
      setIndexOpinion(indexOpinion + 1);
    } else {
      setIndexOpinion(0);
    }
  }

  function prevOpinion() {
    if (indexOpinion > 0) {
      setIndexOpinion(indexOpinion - 1);
    } else {
      setIndexOpinion(opinions.length - 1);
    }
  }
  return (
    <div className="bg-neutral-800 min-h-[100px]  justify-center pb-4 md:py-6">
      <h2 className="py-4 text-center text-white">Ils nous font confiance :</h2>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className="scale-50 translate-x-[280px]">
              <OpinionCard
                opinions={opinions}
                indexOpinion={indexOpinion - 2}
              />
            </div>
            <div className="z-10 scale-75 translate-x-[110px]">
              <OpinionCard
                opinions={opinions}
                indexOpinion={indexOpinion - 1}
              />
            </div>
            <div className="z-20">
              <OpinionCard opinions={opinions} indexOpinion={indexOpinion} />
            </div>

            <div className="z-10 scale-75 translate-x-[-110px]">
              <OpinionCard
                opinions={opinions}
                indexOpinion={indexOpinion + 1}
              />
            </div>
            <div className="scale-50 translate-x-[-280px]">
              <OpinionCard
                opinions={opinions}
                indexOpinion={indexOpinion + 2}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between text-4xl  sm:text-6xl  w-[300px] right-1/2 text-white my-4">
          <FaArrowCircleLeft
            onClick={prevOpinion}
            className="overflow-hidden bg-black rounded-full cursor-pointer"
          />
          <FaArrowCircleRight
            onClick={nextOpinion}
            className="overflow-hidden bg-black rounded-full cursor-pointer"
          />
        </div>
        <OpinionInput />
      </div>
    </div>
  );
}
