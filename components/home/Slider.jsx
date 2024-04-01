// slider d'accueil
// peut contenir des lien et/ou infos
// alimenté par le propriétaire du magasin

"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Loader from "@/app/loading";
import { useSlider } from "@/hooks/useSlider";
import he from "he";

export default function Slider() {
  const [sliderNumber, setSliderNumber] = useState(0);
  const {data:sliders, isFetching, error} = useSlider();
  const allSliders = sliders?.allSliders;
  // console.log(allSliders?.length);
  const imgPath = "https://dbve.barpat.fun/public/assets/images/slider/";
  

  function nextSlider() {
    if (sliderNumber < allSliders.length - 1) {
      setSliderNumber(sliderNumber + 1);
    } else {
      setSliderNumber(0);
    }
  }

  function prevSlider() {
    if (sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
    } else {
      setSliderNumber(allSliders.length - 1);
    }
  }

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  
  return (
    <div className="w-full  h-[100vw] lg:h-[90vh] bg-ve-dark ">
      <div
        className={`relative w-full h-[100vw] lg:h-[90vh] bg-no-repeat bg-top aspect-square lg:aspect-[16/9] overflow-hidden bg-cover lg:bg-fixed`}
        key={allSliders[sliderNumber]?.slider_id}
        style={{ backgroundImage: `url(${imgPath+allSliders[sliderNumber]?.image})` }}
      >
        <div className="flex flex-col justify-center w-full h-full">
          <div className="relative flex justify-center w-full h-full text-white">
            <div
              className={`absolute inset-0 ${
                allSliders[sliderNumber]?.overlay=="1" && "bg-neutral-900/70"
              }`}
            ></div>
            <div className="absolute p-4 top-12  sm:top-[25%]  w-3/4 text-center">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl ">{he.decode(allSliders[sliderNumber]?.title)}</h2>
            </div>
            {allSliders[sliderNumber]?.btnLink &&
            <>
            <a
              href={allSliders[sliderNumber]?.btnLink}
              className="absolute p-2 translate-x-1/2 border-4 border-white bottom-14 sm:bottom-36 w-[200px] sm:w-[300px] flexMid right-1/2 bg-neutral-900"
            >
              <h2 className="text-xl sm:text-3xl">
                {allSliders[sliderNumber]?.btnText}
              </h2>
            </a></>}

            {allSliders?.length>1 &&  (
            <div className="absolute flex justify-between text-4xl  sm:text-6xl translate-x-1/2 w-[200px] sm:w-[300px] bottom-4 sm:bottom-16 right-1/2 ">
              <FaArrowCircleLeft
                onClick={prevSlider}
                className="overflow-hidden bg-black rounded-full cursor-pointer"
              />
              <FaArrowCircleRight
                onClick={nextSlider}
                className="overflow-hidden bg-black rounded-full cursor-pointer"
              />
            </div>)}
            
          </div>
        </div>
      </div>
    </div>
  );
}
