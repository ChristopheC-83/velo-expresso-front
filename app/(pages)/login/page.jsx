/* eslint-disable react/no-unescaped-entities */
// page de Login et Logout

"use client";
import Loader from "@/app/loading";
import Container from "@/components/container/Container";
import Authenticated from "@/components/login/Authenticated";
import Unauthenticated from "@/components/login/Unauthenticated";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LuMail } from "react-icons/lu";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("session", session, status);

  
 

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
     return <Unauthenticated  />;
     
  }

  if (status === "authenticated") {
   return  <Authenticated session={session} />;
  }
}
