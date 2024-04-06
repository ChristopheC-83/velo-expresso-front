/* eslint-disable react/no-unescaped-entities */
"use client";

import Container from "../container/Container";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Unauthenticated() {
  const [checkedCGU, setCheckedCGU] = useState(false);

  // permet l'activation du bouton de connexion avec Google en cochant la case des CGU
  function handleCheckboxChange(event) {
    console.log("event.target.checked", event.target.checked);
    setCheckedCGU(event.target.checked);
  }

  // Connexion avec Google qui est l'unique provider pour le moment
  function onLogin() {
    signIn("google");
  }

  return (
    <Container>
      <h2 className="my-12 text-center">
        Connectez-vous avec votre compte Google :
      </h2>

      <div className="flex flex-col gap-12 mx-auto w-fit max-w-[650px] px-4">
        <div onClick={checkedCGU ? onLogin : null}>
          <div
            className={`w-full flex justify-center gap-3 px-6 py-4 mx-auto text-xl sm:text-2xl md:text-3xl font-bold duration-200 border-4 flexMid hover:bg-neutral-700 hover:text-ve-blue ${
              checkedCGU
                ? "cursor-pointer border-black"
                : "text-neutral-500 cursor-not-allowed pointer-events-none border-neutral-500"
            }`}
          >
            <FcGoogle className="me-auto" />
            <p className="w-full text-xl text-center sm:text-2xl md:text-3xl ">
              Connexion avec Google
            </p>
          </div>
        </div>
        <div className="w-full mt-4 mb-12 text-center">
          <input
            type="checkbox"
            className="border-gray-300 rounded size-4"
            checked={checkedCGU}
            onChange={handleCheckboxChange}
          />
          <label className="ml-2 text-center">
            J'ai lu et j'accepte les{" "}
            <a href="/cgu" className="text-blue-600">
              Conditions Générales d'Utilisation{" "}
            </a>
            <br />
            et les informations ci-dessous.
          </label>
        </div>
        <hr />
        <div className="flex flex-col mx-auto mt-12 mb-6 text-md">
          <h4>Important :</h4>
          <p>
            * Le but de la connexion est de vous permettre de poster un avis en
            toute sécurité.
          </p>
          <p>
            * Votre adresse mail ne sera pas utilisée dans un but de commercial
            ni transmise à une entité tiers.
          </p>
          <p>
            * Il pourra potentiellement nous permettre de vous répondre en cas
            de question(s) et/ou de réclamation(s).
          </p>
          <p>
            * En vous connectant, vous acceptez qu'un <b>COOKIE</b> de connexion
            soit émis sur votre machine. Son unique but est de garantir votre
            connexion. Il n'a aucune autre utilité et ne sera pas utilisé à des
            fins commerciales ou de suivi autre que celui de votre connexion.
          </p>
          <p>
            * Les informations récupérées lors de la connexion et votre avis
            peuvent être supprimées à tout moment en cliquant sur le bouton
            "Supprimez votre compte, vos données et votre avis." une fois que
            vous êtes connecté.
          </p>
        </div>
      </div>
    </Container>
  );
}
