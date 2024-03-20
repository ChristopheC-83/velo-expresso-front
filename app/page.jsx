import Container from "@/components/container/Container";
import Brands from "@/components/home/Brands";
import Frames from "@/components/home/Frames";
import Opinions from "@/components/home/Opinions";
import Slider from "@/components/home/Slider";
import Social from "@/components/home/Social";

export default function Home() {
  return (
    <div className="w-full">
      <Slider />
      <Frames/>
      <Brands/>
      <Opinions/>
      <Social/>
    </div>
  );
}
