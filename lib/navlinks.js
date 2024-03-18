import { BiHomeAlt2 } from "react-icons/bi";
import { MdDirectionsBike } from "react-icons/md";
import { GiDutchBike } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa6";


export const navlinks = [
{id:1, name:'Home', path:'/', label : "Accueil", logo:<BiHomeAlt2 />},
{id:2, name:'new-bikes', path:'/new-bikes', label : "Vélos ", logo:<MdDirectionsBike />

},
// {id:3, name:'used-bikes', path:'/used-bikes', label : "Vélos d'Occasion", logo:<GiDutchBike />
// },
{id:4, name:'meca', path:'/meca', label : "Atelier", logo:<FaGears />
},
{id:5, name:'rental', path:'/rental', label : "Location", logo:<FaHourglassStart />
},







]