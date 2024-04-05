/* eslint-disable react/no-unescaped-entities */
// pour accéder aux réseaux sociaux du magasin


import Image from "next/image";
import Link from "next/link";
import Container from "../container/Container";
import { motion } from "framer-motion";

export default function Social() {
  const networks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/V%C3%A9lo-Expresso-2148219022113845",
      logo: "/images/social/facebook.png",
      style : ""
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/velo_expresso/",
      logo: "/images/social/instagram.png",
    },
    {
      name: "Strava",
      url: "https://www.strava.com/clubs/833016",
      logo: "/images/social/strava.png",
    },
  ];

  return (
    <div className="w-full py-12">
      <Container>
        <h2 className="mb-4 text-center">Nous suivre ? C'est par ici !</h2>

        <div className="reseaux-logo">
          {networks.map((network, index) => (
            <motion.div 
            key={index}
            initial={{
              opacity: 0.25,
              y: 80,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0,
                ease: "easeInOut",
              },
            }}
            >
              <Link
                href={network.url}
                target="_blank"
              >
                <Image
                  src={network.logo}
                  alt={network.name}
                  width={200}
                  height={200}
                  className={`img-social`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
