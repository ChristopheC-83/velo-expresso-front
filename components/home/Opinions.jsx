"use client";

import { opinions } from "@/lib/opinions";
import { useState } from "react";

export default function Opinions() {
  const [indexOpinion, setIndexOpinion] = useState(1);

  return (
    <div className="bg-neutral-800 min-h-[100px] mb-16 justify-center pb-4 md:py-6">
      <h2 className="py-4 text-center text-white">Ils nous font confiance :</h2>
      <div className="flex items-center justify-center w-full">
        {opinions.map((opinion, index) => (
          <div key={index}>
            <div>
              <div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
