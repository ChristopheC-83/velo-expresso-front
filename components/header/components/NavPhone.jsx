// navigation dans le menu sur smartphone

import { navlinks } from "@/lib/navlinks";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPowerOff } from "react-icons/fa6";

export default function NavPhone() {
  const router = useRouter();
  
  function logout() {
    signOut();
    sessionStorage.removeItem("userConnected");
    router.replace("/");
  }

  return (
    <div
      className={`flex flex-col h-full items-end ml-auto w-full menu-appear text-black `}
    >
      {navlinks.map((link) => (
        <div key={link.id} className="p-6 pr-8 w-fit">
          <Link href={link.path}>
            <div className="flex flex-col items-end justify-end scale-110">
              <h2>{link.logo}</h2>
              <h3>{link.label}</h3>
            </div>
          </Link>
        </div>
      ))}
      <div className="p-6 pr-8 w-fit">
        {!session ? (
          <Link href="/login">
            <div className="flex flex-col items-end justify-end scale-110">
              <h2>
                <FaPowerOff />
              </h2>
              <h3>Login</h3>
            </div>
          </Link>
        ) : (
          <div onClick={()=>logout()} className="cursor-pointer">
            <div className="flex flex-col items-end justify-end scale-110">
              <h2>
                <FaPowerOff />
              </h2>
              <h3>Déconnexion</h3>
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
}
