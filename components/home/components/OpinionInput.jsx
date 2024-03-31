/* eslint-disable react/no-unescaped-entities */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function OpinionInput() {
  const [opinionForm, setOpinionForm] = useState(false);
  const [checkedCGU, setCheckedCGU] = useState(false);
  const router = useRouter();
  const formComment = useRef();

  function handleCheckboxChange(event){
    setCheckedCGU(event.target.checked);
  }
  

  async function sendOpinion(opinion) {
    // console.log("opinion : ", opinion);
    try {
      const response = await axios.post("/api/opinions", opinion, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.status === 200) {
        throw new Error("Erreur lors de l'envoi de l'avis !!!");
      }
      router.push("/");
      toast.success("Votre avis a bien été envoyé !");
    } catch {
      toast.error("Erreur lors de l'envoi de l'avis !");
    }
  }

  function prepareSendOpinion(formData) {
    let name = formData.get("name");
    let message = formData.get("message");
    const messageLength = message.length;
    // console.log("messageLength", messageLength);

    if(!checkedCGU){
      toast.danger("Vous devez accepter les Conditions Générales d'Utilisation pour envoyer votre avis.");
      return;
    }

    if (name.trim() === "") {
      name = "Anonyme";
    }

    if (message.trim() === "") {
      toast.error("Votre message est vide !?!");
      return;
    }

    if (messageLength < 5 ) {
      toast.error(
        `Votre message est trop court ! Au moins 5 caractères 😅`
      );
      return;
    }
    if (messageLength > 350) {
      toast.error(
        `Votre message est trop long ! 350 caractères max ! Pas ${messageLength} !`
      );
      return;
    }

    const newOpinion = {
      name: name,
      message: message,
      response: "",
      validated: false,
      createdAt: new Date().toISOString().split("T")[0],
    };
    confirm("Confirmez vous l'envoi ? Il sera publié après validation !");
    sendOpinion(newOpinion);
    formComment.current.reset();
    setOpinionForm(false);
    // toast.success("Votre avis a bien été envoyé !");
  }
  return (
    <div>
      <h3
        className="w-full p-2 my-4 text-center text-white transition-all duration-300 border-2 border-white rounded-full hover:text-black hover:bg-neutral-100 hover:border-black"
        onClick={() => {
          setOpinionForm(!opinionForm);
        }}
      >
        A vous de partager votre expérience !
      </h3>
      {opinionForm && (
        <form action={prepareSendOpinion} ref={formComment} className="mx-2">
          <input
            type="text"
            name="name"
            placeholder="Votre nom, pseudo... ou rien !"
            className="w-full p-2 my-2 rounded"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="w-full p-2 rounded"
            placeholder="Votre avis en 350 caractères max ! Ce message sera publié après validation et ne sert qu'à donner votre avis sur votre expérience avec le magasin. Pour toutes questions, merci de nous contacter directement par mail ou téléphone.
            "
          ></textarea>

          <div className="w-full my-3">
            <input type="checkbox" className="border-gray-300 rounded size-4" 
        checked={checkedCGU}
        onChange={handleCheckboxChange}/>
            <label className="ml-2 text-neutral-100">J'ai lu et j'accepte les <a href="/cgu" className="text-blue-600">Conditions Générales d'Utilisation</a>. </label>
          </div>

          <button
            type="submit"
            className="w-full p-2 my-4 text-white transition-all duration-300 border-2 border-white rounded-full disabled:pointer-events-none hover:text-black hover:bg-neutral-100 hover:border-black disabled:opacity-50 disabled:cursor-not-allowed " disabled={!checkedCGU}
          >
            <h4>Envoyer mon avis</h4>
          </button>
        </form>
      )}
    </div>
  );
}
