/* eslint-disable react/no-unescaped-entities */
// navigation dans le menu sur pc

import Link from "next/link";
import { navlinks } from "@/lib/navlinks";

export default function NavScreen() {
  return (
    <navbar className="hidden h-16 pb-2 lg:flex justify-evenly">
      {navlinks.map((link) => (
        <div key={link.id} className="w-full flexMid">
          <Link href={link.path}>
            <div className="flexMid">
              <h4 className="pb-1 mr-2">{link.logo}</h4>
              <h4>{link.label}</h4>
            </div>
          </Link>
        </div>
      ))}
    </navbar>
  );
}
