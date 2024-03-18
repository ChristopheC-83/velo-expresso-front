import { HiMail } from "react-icons/hi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full text-white border-t-4 border-blue-ve">
      <div className="bg-footer bg-cover bg-no-repeat bg-center h-[400px] ">
        <div className="flex flex-col justify-between w-full h-full px-10 py-6">
          <div className="mb-6">
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
          <div className="flex-grow"></div>
          <div className="flex flex-col justify-between md:flex-row">
            <h4><Link href="/legal-notice">Mentions Légales</Link></h4>
            <h4>&copy; COPYRIGHT VELO-EXPRESSO - 2024</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
