// navigation dans le menu sur pc
// gestion du hamburger pour le menu smartphone

"use client";

import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import NavPhone from "./NavPhone";
import Link from "next/link";

export default function TitleHeader() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between w-full p-2 lg:justify-center">
      <Link href="/">
        <h1 className="text-ve-blue text-shadow">Vélo-Expresso</h1>
      </Link>
      {/* pour l'icone hamburger du menu sous les  1024px*/}
      <h2 className="lg:hidden" onClick={() => setMenu(!menu)}>
        {menu ? <div className="text-4xl">
          <ImMenu4 />
        </div> : <div className="text-4xl">
          <ImMenu3 />
        </div>}
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
