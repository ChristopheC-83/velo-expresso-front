import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

//  envoyer un avis en DB qui sera à valider par l'admin
export const POST = async (req, res) => {
  const body = await req.json();
  let { name, message, date, response, validated, userEmail } = body;
  // console.log("body", body);

  try {
      // Vérifier si un avis existe déjà avec cet e-mail
      const existingOpinion = await prisma.opinion.findFirst({
        where: {
          userEmail: userEmail,
        },
      });
  
      // Si un avis existe déjà, renvoyer une réponse indiquant que l'utilisateur a déjà posté un avis
      if (existingOpinion) {
        return NextResponse.json(
          { message: "Vous avez déjà posté un avis." },
          { status: 400 }
        );
      }
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

    return NextResponse.json(newOpinion, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Impossible de poster votre avis." },
      { status: 500 }
    );
  }
};


