import { LuMail } from "react-icons/lu";
import Container from "../container/Container";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

/* eslint-disable react/no-unescaped-entities */
export default function Authenticated({ session }) {

  const router = useRouter();
  
  function onLogout() {
    signOut();
    router.push("/");
  }

  async function onDelete() {
    let accountToDelete = { email: session.user.email };
    try {
      const response = await axios.post("/api/account", accountToDelete, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", response);
      console.log("response status", response.status);
      
      if (response.status === 200) {
        signOut();
        toast.success("Vos compte / avis ont bien été supprimés.");
      } else {
        throw new Error(
          `Erreur lors de la suppression du compte : ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du compte :", error.message);
      toast.error(
        "Erreur lors de la suppression de votre compte. Veuillez réessayer plus tard."
      );
    }
  }

  return (
    <Container>
      <h2 className="my-8 text-center">Bonjour {session.user.name} !</h2>

      <div className="flex flex-col gap-4 mx-auto w-fit">
        <div className="flex flex-col w-full gap-4">
          <div onClick={() => onLogout()}>
            <div className="w-full gap-3 px-4 py-2 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer rounded-xl flexMid hover:bg-black hover:text-ve-blue">
              <LuMail />
              Vous êtes connecté. Cliquez ici pour vous déconnecter.
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div
            onClick={() => {
              confirm("Voulez vous vraiment tout supprimer ?") && onDelete();
            }}
          >
            <div className="w-full gap-3 px-4 py-2 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer rounded-xl flexMid hover:bg-black hover:text-ve-blue">
              <LuMail />
              Supprimez votre compte, vos données et votre avis.
            </div>
          </div>
        </div>
      </div>

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
          * Il pourra potentiellement nous permettre de vous répondre en cas de
          question(s) et/ou de réclamation(s).
        </p>
        <p>
          * En vous connectant, vous acceptez qu'un <b>COOKIE</b> de connexion
          soit émis sur votre machine. Son unique but est de garantir votre
          connexion. Il n'a aucune autre utilité et ne sera pas utilisé à des
          fins commerciales ou de suivi autre que celui de votre connexion.
        </p>
        <p>
          * Les informations récupérées lors de la connexion et votre avis, s'il
          a été publié, seront détruits de notre base de données sur simple
          demande émanant de la même adresse mail que celle qui vous aura servi
          à la connexion à ce site.{" "}
        </p>
      </div>
    </Container>
  );
}
