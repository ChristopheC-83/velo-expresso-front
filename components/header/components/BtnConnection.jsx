// Mise en forme des liens pour navbar pc


import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaPowerOff } from "react-icons/fa6";

export default function BtnConnection() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>loading...</p>;
  }

  return (
    <Link href="/login">
      <div className="flex align-items-center w-fit h-fit">
        <div className="pt-2 pr-2">
          <FaPowerOff className="text-xl"/>
        </div>
        {session?.user.name ? <h3>Déconnexion</h3> : <h3>Connexion</h3>}
      </div>
    </Link>
  );
}
