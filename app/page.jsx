import Container from "@/components/container/Container";
import Frames from "@/components/home/Frames";
import Slider from "@/components/home/Slider";

export default function Home() {
  return (
    <div className="w-full">
      <Slider />
      <Frames/>
    </div>
  );
}
