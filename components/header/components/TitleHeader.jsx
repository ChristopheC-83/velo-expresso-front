"use client";

import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import NavPhone from "./NavPhone";

export default function TitleHeader() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between w-full p-2 lg:justify-center">
      <h1 className="text-ve-blue text-shadow">Vélo-Expresso</h1>
      <h2 className="lg:hidden" onClick={() => setMenu(!menu)}>
        {menu ? <ImMenu4 /> : <ImMenu3 />}
      </h2>
      {menu && (
        <div
          className="fixed inset-0 flex flex-col items-end pt-16 overflow-hidden lg:hidden bg-neutral-200/60"
          onClick={() => setMenu(false)}
        >
          <NavPhone />
        </div>
      )}
    </div>
  );
}
