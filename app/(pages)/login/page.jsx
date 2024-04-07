/* eslint-disable react/no-unescaped-entities */
// page de Login et Logout pour laisser un avis

"use client";
import Loader from "@/app/loading";
import Authenticated from "@/components/login/Authenticated";
import Unauthenticated from "@/components/login/Unauthenticated";
import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  // console.log("session", session, status);
  // Y a t il une session en cours ?

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    return <Unauthenticated />;
  }
  if (status === "authenticated") {
    return <Authenticated session={session} />;
  }
}
