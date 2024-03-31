import { HiMail } from "react-icons/hi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative w-full text-white border-t-4 border-ve-blue">
      <div className="bg-footer bg-cover bg-no-repeat bg-center h-[400px] ">
        <div className="flex flex-col justify-between w-full h-full p-4 sm:px-10 sm:py-6">
          <div className="p-4 mb-6 bg-neutral-800/50 w-fit rounded-xl">
            <h3 className="mb-3">Nous contacter :</h3>
            <h4 className="mb-2">
              <a
                href="mailto:velo-expresso@orange.fr"
                className="flex items-center gap-x-2"
              >
                <HiMail />
                velo-expresso@orange.fr
              </a>
            </h4>
            <h4 className="mb-2">
              <a
                href="tel:+04.66.95.17.09"
                className="flex items-center gap-x-2"
              >
                <BsFillTelephoneOutboundFill />
                04.66.95.17.09
              </a>
            </h4>
          </div>
          <div className="flex flex-col justify-between md:items-center md:flex-row ">
            <div className="p-4 rounded-xl bg-neutral-800/60">
              <h4><Link href="/cgu">Mentions Légales</Link></h4>
            </div>
            <h5>&copy; COPYRIGHT VELO-EXPRESSO - 2024</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
