import { LuMail } from "react-icons/lu";
import Container from "../container/Container";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";import { BsTrash } from "react-icons/bs";



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
      const response = await axios.delete("/api/account", {
        headers: {
            "Content-Type": "application/json",
        },
        data: accountToDelete, // Utilisez 'data' pour passer les données dans une demande DELETE avec axios
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
      <h2 className="my-16 text-center">Bonjour {session.user.name} !</h2>

      <div className="flex flex-col gap-16 mx-auto w-fit">
        <div className="flex flex-col w-full gap-4">
          <div onClick={() => onLogout()}>
            <div className="w-full gap-3 px-6 py-4 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer flexMid hover:bg-black hover:text-orange-400">
            <IoMdLogOut className="me-auto" />
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
            <div className="w-full gap-3 px-6 py-4 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer flexMid hover:bg-black hover:text-red-500">
            <BsTrash className="me-auto" />
              Supprimez votre compte, vos données et votre avis.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-10/12 mx-auto mt-24 mb-6 md:w-9/12 text-md">
      <h4>Important :</h4>
        <p>
          * La suppression de votre compte est irréversible.
        </p>
        <p>* Elle entrainera l'effacement de toutes vos données de nos bases et de l'avis que vous auriez pu poster sur le site.</p>
      </div>
    </Container>
  );
}
