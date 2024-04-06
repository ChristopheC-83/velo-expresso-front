import Container from "../container/Container";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
import { BsTrash } from "react-icons/bs";

/* eslint-disable react/no-unescaped-entities */
export default function Authenticated({ session }) {
  const router = useRouter();

  const buttons = [
    {
      id: 1,
      colorBtn: "orange-400",
      textBtn: "Cliquez ici pour vous déconnecter.",
      iconBtn: <IoMdLogOut />,
      onClick: () => onLogout(),
    },
    {
      id: 2,
      colorBtn: "red-500",
      textBtn: "Supprimez votre compte, vos données et votre avis.",
      iconBtn: <BsTrash />,
      onClick: () =>
        confirm("Voulez vous vraiment tout supprimer ?") && onDelete(),
    },
  ];

  function onLogout() {
    signOut();
    router.push("/");
  }

  // suppression du compte ET de l'avis utilisateur s'il y en a un
  async function onDelete() {
    let accountToDelete = { email: session.user.email };
    try {
      const response = await axios.delete("/api/account", {
        headers: {
          "Content-Type": "application/json",
        },
        data: accountToDelete,
      });

      // console.log("response", response);
      // console.log("response status", response.status);
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
      <h2 className="my-16 text-center">
        Bonjour <span className="uppercase">{session.user.name}</span> !
      </h2>

      <div className="flex flex-col gap-16 mx-auto w-fit max-w-[650px] px-4">
        {buttons.map((button) => (
          <div className="flex flex-col w-full" key={button.id}>
            <div onClick={button.onClick}>
              <div
                className={`w-full gap-3 px-6 py-4 mx-auto text-xl font-bold duration-300 border-4 border-black cursor-pointer flexMid hover:bg-neutral-700 hover:text-${button.colorBtn}`}
              >
                <span
                  className={`text-xl text-${button.colorBtn} sm:text-2xl md:text-3xl me-auto shrink-0`}
                >
                  {button.iconBtn}
                </span>
                <p className="w-full text-lg text-center sm:text-xl ">
                  {" "}
                  {button.textBtn}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col mx-auto mt-12 mb-6 text-md sm:text-lg md:text-xl">
          <h4>Important :</h4>
          <p>* La suppression de votre compte est irréversible.</p>
          <p>
            * Elle entrainera l'effacement de toutes vos données de nos bases et
            de l'avis que vous auriez pu poster sur le site.
          </p>
        </div>
      </div>
    </Container>
  );
}
