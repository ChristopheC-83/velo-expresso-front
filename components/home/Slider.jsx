"use client";


import Image from "next/image";
import { useState } from "react";
import { sliders } from "../../lib/slider";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Slider() {
  const [sliderNumber, setSliderNumber] = useState(0);

  console.log(sliders[sliderNumber].image + `-square.png`);

  function nextSlider() {
    if (sliderNumber < sliders.length - 1) {
      setSliderNumber(sliderNumber + 1);
    } else {
      setSliderNumber(0);
    }
  }

  function prevSlider() {
    if (sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
    } else {
      setSliderNumber(sliders.length - 1);
    }
  }

  return (
    <div className="w-full  h-[100vw] lg:h-[90vh] bg-ve-dark ">
      <div
        className={`relative w-full h-[100vw] lg:h-[90vh] bg-no-repeat bg-top aspect-square lg:aspect-[16/9] overflow-hidden bg-cover `}
        key={sliders[sliderNumber].id}
        style={{ backgroundImage: `url(${sliders[sliderNumber].image})` }}
      >
        <div className="flex flex-col justify-center w-full h-full">
          <div className="relative w-full h-full text-white">
            <div
              className={`absolute inset-0 ${
                sliders[sliderNumber].overlay && "bg-neutral-900/70"
              }`}
            ></div>
            <div className="absolute p-4 top-24  sm:top-[25%]  w-full text-center">
              <h2>{sliders[sliderNumber].title}</h2>
            </div>

            
            <a
              href={sliders[sliderNumber].btnLink}
              className="absolute p-2 translate-x-1/2 border-4 border-white bottom-20 sm:bottom-36 w-[200px] sm:w-[300px] flexMid right-1/2 bg-neutral-900"
            >
              <h2 className="text-2xl sm:text-3xl">{sliders[sliderNumber].btnText}</h2>
            </a>

            
            <div className="absolute flex justify-between text-4xl  sm:text-6xl translate-x-1/2 w-[200px] sm:w-[300px] bottom-4 sm:bottom-16 right-1/2 ">
              <FaArrowCircleLeft
                onClick={prevSlider}
                className="overflow-hidden bg-black rounded-full cursor-pointer"
              />
              <FaArrowCircleRight
                onClick={nextSlider}
                className="overflow-hidden bg-black rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
