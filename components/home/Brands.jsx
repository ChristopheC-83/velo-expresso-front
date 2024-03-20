import { brands } from "@/lib/brands";
import Image from "next/image";
import Link from "next/link";
import Container from "../container/Container";

export default function Brands() {
  return (
      <div className="bg-neutral-800 min-h-[100px]  justify-center pb-4 md:py-6">
        <Container>
        <h2 className="py-4 text-center text-white">Nous leur faisons confiance :</h2>
        <div className="flex flex-wrap justify-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="m-1.5 w-[145px] h-[145px] sm:w-[180px] sm:h-[180px] md:w-[230px] md:h-[230px] shrink-0 partenaire-ext lg:m-12 "
            >
              <div className="absolute bgc-rotate flexMid"></div>
              <Link
                href={brand.link}
                target="_blank"
                rel="noreferrer"
                className="w-full h-full flexMid"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={400}
                  height={400}
                  className="logo-brand"
                />
              </Link>
            </div>
          ))}
        </div>
    </Container>
      </div>
      );
}
