"use client";

import Image from "next/image";
import { useState } from "react";
import { sliders } from "../../lib/slider";

export default function Slider() {
  const [sliderNumber, setSliderNumber] = useState(0);

  console.log(sliders[sliderNumber].image);

  return (
    <div className="w-full min-h-[90vh] bg-neutral-800">
      <div
        className="relative w-full bg-no-repeat border border-red-500 bg-contain bg-top lg:bg-center h-[90vh]"
        key={sliders[sliderNumber].id}
        style={{ backgroundImage: `url(${sliders[sliderNumber].image})` }}
      >{sliders[sliderNumber].title}</div>
    </div>
  );
}
