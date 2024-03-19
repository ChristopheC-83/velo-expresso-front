import Image from "next/image";
import Container from "../container/Container";
import { frames } from "@/lib/frames";

export default function Frames() {
  return (
    <Container>
      <div className="min-h-screen sm:mt-8 md:mt-12">
        <div className="grid grid-cols-2 sm:gap-4 md:gap-8">
          {frames.map((frame) => (
            <div key={frame.id} className="relative">
              <Image
                src={frame.image}
                alt={frame.title}
                width={500}
                height={800}
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 ${
                  frame.overlay ? "bg-opacity-50" : "bg-opacity-0"
                }`}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  {frame.title}
                </h2>
                <a
                  href={frame.btnLink}
                  className="px-4 py-2 mt-4 font-semibold text-black bg-white rounded-md"
                >
                  {frame.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
