import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const DELETE = async (req, res) => {
  const body = await req.json();
  let { email } = body;
  console.log("body opinion", body);
  console.log(email);

  try {
    await prisma.opinion.deleteMany({
      where: {
        userEmail: email,
      },
    });

    try {
      await prisma.user.deleteMany({
        where: {
          email: email,
        },
      });
    } catch (error) {
      return NextResponse.json(
        { message: "Impossible de supprimer votre compte." },
        { status: 500 }
      );
    }

    return NextResponse.json("Suppressions effectuées !", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Impossible de supprimer l' / les avis." },
      { status: 500 }
    );
  }
};
