// navigation dans le menu sur pc
// gestion du hamburger pour le menu smartphone

"use client";

import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import NavPhone from "./NavPhone";
import { FaPowerOff } from "react-icons/fa6";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/loading";


export default function TitleHeader() {
  const [menu, setMenu] = useState(false);
  const { data: session, status } = useSession();
  console.log("session header", session, status);
  const router = useRouter();
  
  

  function logout() {
    signOut();
    router.replace("/");
  }


  return (
    <div className="flex items-center justify-between w-full p-2 lg:px-16">
      <div className="hidden lg:block"></div>
      <Link href="/">
        <h1 className="text-ve-blue text-shadow">Vélo-Expresso</h1>
      </Link>

      {!session ? (
        <Link href="/login" className="hidden lg:block">
          <div className="flex align-items-center w-fit h-fit">
            <div className="pt-1.5 pr-2">
              <FaPowerOff />
            </div>
            <p>connexion</p>
          </div>
        </Link>
      ) : (
        <div onClick={logout} className="hidden cursor-pointer lg:block">
          <div className="flex align-items-center w-fit h-fit">
            <div className="pt-1.5 pr-2">
              <FaPowerOff />
            </div>
            <p>déconnexion</p>
          </div>
        </div>
      )}
      {/* pour l'icone hamburger du menu sous les  1024px*/}
      <h2 className="lg:hidden" onClick={() => setMenu(!menu)}>
        {menu ? (
          <div className="text-4xl">
            <ImMenu4 />
          </div>
        ) : (
          <div className="text-4xl">
            <ImMenu3 />
          </div>
        )}
      </h2>
      {menu && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-end pt-16 overflow-hidden lg:hidden bg-gradient-to-l from-neutral-200 to-neutral-200/60"
          onClick={() => setMenu(false)}
        >
          <NavPhone />
        </div>
      )}
    </div>
  );
}
