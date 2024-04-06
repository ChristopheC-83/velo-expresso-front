// Mise en forme des liens pour navbar smartphone

import { FaPowerOff } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function LinkConnection() {
  const { data: session, status } = useSession();

   if (status === "loading") {
    return <p>loading...</p>;
  }

  return (
    <Link href="/login">
      <div className="flex flex-col items-end justify-end scale-110">
        <h2>
          <FaPowerOff />
        </h2>
        {session?.user.name ? <h3>Déconnexion</h3> : <h3>Connexion</h3>}
      </div>
    </Link>
  );
}
