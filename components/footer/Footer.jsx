//  Footer en un composant unique

import { HiMail } from "react-icons/hi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {

  
  const infosLines = [
    {
      id: 1,
      link: "mailto:velo-expresso@orange.fr",
      icon: <HiMail />,
      text: "velo-expresso@orange.fr",
    },
    {
      id: 2,
      link: "tel:+04.66.95.17.09",
      icon: <BsFillTelephoneOutboundFill />,
      text: "04.66.95.17.09",
    },
    {
      id: 3,
      icon: <FaCalendarAlt />,
      text: "Ouvert du Mardi au Samedi",
    },
    {
      id: 4,
      icon: <FaClock />,
      text: "de 9h à 19h Non-Stop",
    },
  ];

  return (
    <div className="relative w-full text-white border-t-4 border-ve-blue text-md sm:text-lg md:text-xl">
      <div className="bg-footer bg-cover bg-no-repeat bg-center h-[400px] sm:h-[500px] md:h-[600px]">
        <div className="flex flex-col justify-between w-full h-full p-4 sm:px-10 sm:py-6">
          <div className="p-4 mb-6 bg-neutral-800/50 w-fit rounded-xl">
            <h3 className="mb-3">Nous contacter :</h3>
            {infosLines.map((line) => (
              <h4 className="mb-2" key={line.id}>
                {line.link ? (
                  <a href={line.link} className="flex items-center gap-x-2">
                    {line.icon}
                    {line.text}
                  </a>
                ) : (
                  <>
                    <div className="flex items-center gap-x-2">
                      {line.icon}
                      {line.text}
                    </div>
                  </>
                )}
              </h4>
            ))}
          </div>
          <div className="flex flex-col justify-between md:items-center md:flex-row ">
            <div className="p-4 rounded-xl bg-neutral-800/60">
              <h4>
                <Link href="/cgu">Mentions Légales / CGU</Link>
              </h4>
            </div>
            <h5>&copy; COPYRIGHT VELO-EXPRESSO - 2024</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
