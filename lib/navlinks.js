// Tableau des liens dan sla barre de navigation

import { ImHome } from "react-icons/im";
import { MdDirectionsBike } from "react-icons/md";
import { GiDutchBike } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa6";

export const navlinks = [
  { id: 1, name: "Home", path: "/", label: "Accueil", logo: <ImHome /> },
  {
    id: 2,
    name: "new-bikes",
    path: "/new-bikes",
    label: "Vélos ",
    logo: <MdDirectionsBike />,
  },
  {
    id: 3,
    name: "used-bikes",
    path: "/used-bikes",
    label: "Occasions",
    logo: <GiDutchBike />,
  },
  { id: 6, name: "meca", path: "/meca", label: "Atelier", logo: <FaGears /> },
  {
    id: 8,
    name: "rental",
    path: "/rental",
    label: "Location",
    logo: <FaHourglassStart />,
  },
];
