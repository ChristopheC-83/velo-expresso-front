/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { navlinks } from "@/lib/navlinks";

export default function NavScreen() {
  return (
    <navbar className="hidden pb-2 lg:flex justify-evenly ">
      {navlinks.map((link) => (
        <div key={link.id} className="w-full flexMid">
          <Link href={link.path}>
            <div className="flex-col flexMid">
              <h4>{link.logo}</h4>
              <h4>{link.label}</h4>
            </div>
          </Link>
        </div>
      ))}
    </navbar>
  );
}
