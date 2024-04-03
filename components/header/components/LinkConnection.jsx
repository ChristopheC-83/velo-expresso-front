import { FaPowerOff } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LinkConnection() {
  const { data: session, status } = useSession();
  
  
  function logout() {
    signOut();
  }

    if (status === "loading") {
      return <p>loading...</p>;
    }
  if (!session) {
    return (
      <Link href="/login">
        <div className="flex flex-col items-end justify-end scale-110">
          <h2>
            <FaPowerOff />
          </h2>
          <h3>Login</h3>
        </div>
      </Link>
    );
  }

  if (session) {
    return (
      <div onClick={() => logout()} className="cursor-pointer">
        <div className="flex flex-col items-end justify-end scale-110">
          <h2>
            <FaPowerOff />
          </h2>
          <h3>Déconnexion</h3>
        </div>
      </div>
    );
  }
}
