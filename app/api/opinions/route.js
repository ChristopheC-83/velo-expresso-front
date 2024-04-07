// Un avis est envoyé en DB par un utilisateur authentifié avec son mail.

import prisma from "@/lib/connect";
import { NextResponse } from "next/server";



export const POST = async (req, res) => {
    
  const body = await req.json();
  let { name, message, date, response, validated,userEmail } = body;
  // console.log("body", body);

  try {
    const newOpinion = await prisma.opinion.create({
      data: {
        name,
        message,
        date,
        response,
        validated,
        userEmail,
      },
    });
    console.log("newOpinion", newOpinion);
    return NextResponse.json(newOpinion, { status: 200 });
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
    return NextResponse.json(
      { message: "Impossible de poster votre avis." },
      { status: 500 }
    );
  }
};

