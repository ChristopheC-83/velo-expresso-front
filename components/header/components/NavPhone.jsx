import { navlinks } from "@/lib/navlinks";
import Link from "next/link";

export default function NavPhone({ menu }) {
  return (
    <div
      className={`flex flex-col items-end ml-auto w-fit menu-appear`}
    >
      {navlinks.map((link) => (
        <div key={link.id} className="p-6 w-fit">
          <Link href={link.path}>
            <div className="flex flex-col items-end justify-end">
              <h3>{link.logo}</h3>
              <h4>{link.label}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
