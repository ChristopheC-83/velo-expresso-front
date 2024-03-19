"use client";

import Image from "next/image";
import { useState } from "react";
import { sliders } from "../../lib/slider";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Slider() {
  const [sliderNumber, setSliderNumber] = useState(0);

  console.log(sliders[sliderNumber].image);

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
    <div className="w-full min-h-[90vh] bg-ve-dark ">
      <div
        className={`relative w-full bg-no-repeat bg-${
          sliders[sliderNumber].style ? sliders[sliderNumber].style : "cover"
        } bg-${
          sliders[sliderNumber].alignX
        }
        } h-[90vh]`}
        key={sliders[sliderNumber].id}
        style={{ backgroundImage: `url(${sliders[sliderNumber].image})` }}
      >
        <div className="flex flex-col justify-center w-full h-full">
          <div className="relative w-full h-full text-5xl text-white">
            <div
              className={`absolute inset-0 ${
                sliders[sliderNumber].overlay && "bg-neutral-900/70"
              }`}
            ></div>
            <div className="absolute p-4 translate-x-1/2 top-[25%] right-1/2">
              {sliders[sliderNumber].title}
            </div>
            <a
              href={sliders[sliderNumber].btnLink}
              className="absolute p-4 translate-x-1/2 border-4 border-white top-[66%] w-[300px] flexMid right-1/2 bg-neutral-900"
            >
              {sliders[sliderNumber].btnText}
            </a>
            <div className="absolute flex justify-between translate-x-1/2 w-[300px] bottom-16 right-1/2 ">
              <FaArrowCircleLeft
                onClick={prevSlider}
                className="cursor-pointer"
              />
              <FaArrowCircleRight
                onClick={nextSlider}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
