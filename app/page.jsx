"use client";
import Brands from "@/components/home/Brands";
import Frames from "@/components/home/Frames";
import Map from "@/components/home/Map";
import Opinions from "@/components/home/Opinions";
import Slider from "@/components/home/Slider";
import Social from "@/components/home/Social";
import ArrowToTop from "@/components/home/components/ArrowToTop";

export default function Home() {
  

  return (
    <div className="relative w-full">
      <ArrowToTop />
      <Slider />
      <Frames />
      <Brands />
      <Opinions />
      <Social />
      <Map/>
    </div>
  );
}
