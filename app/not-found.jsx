/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
export default function ErrorPage() {
  return (
      <div className="flex-col w-full gap-6 pt-8 pb-16 text-xl font-bold text-white sm:text-2xl md:text-3xl bg-neutral-800 flexMid">
        <h2>On est peut -être bien là...</h2>
        <h2>Mais un peu perdu non ?</h2>
        <Image
          src="/images/errorPage/errorPage.webp"
          alt="velo dans les champs"
          width={400}
          height={200}
          className=""
        />
        <Link href="/">
          <h2 className="underline underline-offset-8 ">Retournons à l'accueil ! </h2>
        </Link>
      </div>
  );
}
