import Image from "next/image";
import Container from "../container/Container";
import { frames } from "@/lib/frames";

export default function Frames() {
  
  return (
    <Container>
      <div className="min-h-screen sm:mt-8 md:mt-12">
        <div className="flex flex-col ">
          {frames.map((frame) => (
            <div key={frame.id} className="relative">
              <Image
                src={frame.image}
                alt={frame.title}
                width={500}
                height={450}
                className="object-cover w-full h-[450px]"
              />
              {/* overlay si image trop clair */}
              <div
                className={`absolute inset-0 bg-neutral-900 bg-opacity-${frame.overlay}`}
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
