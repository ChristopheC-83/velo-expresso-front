import Container from "@/components/container/Container";
import Brands from "@/components/home/Brands";
import Frames from "@/components/home/Frames";
import Slider from "@/components/home/Slider";

export default function Home() {
  return (
    <div className="w-full">
      <Slider />
      <Frames/>
      <Brands/>
    </div>
  );
}
