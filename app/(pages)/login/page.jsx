/* eslint-disable react/no-unescaped-entities */
// page de Login

"use client";
import Loader from "@/app/loading";
import Container from "@/components/container/Container";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LuMail } from "react-icons/lu";

export default function Login() {
  const { data: session, status } = useSession();

  function onLogin(provider) {
    signIn(provider);
  }

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Container>
      <h2 className="my-8 text-center">
        Connectez-vous avec votre compte Google :
      </h2>

      {!session ? (
        <div className="flex flex-col gap-4 mx-auto w-fit">
          <div onClick={() => onLogin("google")}>
            <div className="w-full gap-3 px-4 py-2 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer rounded-xl flexMid hover:bg-black hover:text-ve-blue">
              <LuMail /> Connexion avec Google
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mx-auto w-fit">
          <div onClick={() => signOut()}>
            <div className="w-full gap-3 px-4 py-2 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer rounded-xl flexMid hover:bg-black hover:text-ve-blue">
              <LuMail />
              Vous êtes connecté. Cliquez pour vous déconnecter.
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-10/12 mx-auto mt-12 mb-6 md:w-9/12 text-md">
        <p>
          * Le but de la connexion est de vous permettre de poster un avis en
          toute sécurité.
        </p>
        <p>
          * Votre adresse mail ne sera pas utilisée dans un but de commercial ni
          transmise à une entité tiers.
        </p>
        <p>
          * Il pourra potentiellement potentiellement nous permettre de vous
          répondre en cas de question(s) et/ou de réclamation(s).
        </p>
        <p>
          * En vous connectant, vous acceptez qu'un <b>COOKIE</b> de connexion
          soit émis sur votre machine. Son unique but est de garantir votre
          connexion. Il n'a aucune autre utilité et ne sera pas utilisé à des
          fins commerciales ou de suivi autre que celui de votre connexion.
        </p>
        <p>
          * Les informations récupérées lors de la connexion seront détruites de
          notre base de données sur simple demande émanant de la même adresse
          mail que celle qui vous aura servi à la connexion à ce site.{" "}
        </p>
      </div>
    </Container>
  );
}
