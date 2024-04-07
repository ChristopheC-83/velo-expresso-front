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
      {/* La fleche qui permet de remonter en haut du site */}
      <ArrowToTop />
      {/* l'image ou les images en haut du site, administrable du back */}
      <Slider />
      {/*  les cadres de présentations, administrables */}
      <Frames />
      {/*  les partenaires, administrable */}
      <Brands />
      {/*  les avis clients, gérable */}
      <Opinions />
      {/* Les réseaux sociaux, en dur */}
      <Social />
      {/* google maps... à moins de déménager... */}
      <Map/>
    </div>
  );
}
