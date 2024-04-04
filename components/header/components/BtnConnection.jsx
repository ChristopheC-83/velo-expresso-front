import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaPowerOff } from "react-icons/fa6";

export default function BtnConnection() {
  const { data: session, status } = useSession();
  
  function logout() {
    signOut();
  }

  

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (!session) {
    return (
      <Link href="/login" className="hidden lg:block">
        <div className="flex align-items-center w-fit h-fit">
          <div className="pt-1.5 pr-2">
            <FaPowerOff />
          </div>
          <p>connexion</p>
        </div>
      </Link>
    );
  }

  if (session) {
    return (
      <Link  href="/login">
        <div className="flex align-items-center w-fit h-fit">
          <div className="pt-1.5 pr-2">
            <FaPowerOff />
          </div>
          <p>déconnexion</p>
        </div>
      </Link>
    );
  }
}
