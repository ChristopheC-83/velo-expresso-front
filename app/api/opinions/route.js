import prisma from "@/lib/connect";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'
export const POST = async (req, res) => {
    
  const body = await req.json();
  let { name, message, date, response, validated } = body;
//   console.log("body", body);

  try {
    const newOpinion = await prisma.opinion.create({
      data: {
        name,
        message,
        date,
        response,
        validated,
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

