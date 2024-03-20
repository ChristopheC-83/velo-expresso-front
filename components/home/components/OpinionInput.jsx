"use client";

import { useRef, useState } from "react";

export default function OpinionInput() {
  const [opinionForm, setOpinionForm] = useState(false);
  const formComment = useRef();



  function prepareSendOpinion(formData) {
    const name = formData.get("name");
    const message = formData.get("message");

    const newOpinion = {
      name: name,
      message: message,
      date: new Date().toISOString().split("T")[0],
      response: "",
      validate: false,
    };
    console.log(newOpinion);

    formComment.current.reset();
    setOpinionForm(false);
    confirm("Votre avis a bien été envoyé, il sera publié après validation !");
  }
  return (
    <div>
      <h3
        className="my-4 text-center text-white transition-all duration-300 cursor-pointer hover:text-neutral-500"
        onClick={() => {
          setOpinionForm(!opinionForm);
        }}
      >
        A vous de partager votre expérience !
      </h3>
      {opinionForm && (
        <form action={prepareSendOpinion} ref={formComment}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full p-2 my-2 rounded"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="w-full p-2 rounded"
            placeholder="Votre avis en 350 caractères max !"
          ></textarea>

          <button
            type="submit"
            className="w-full p-2 my-4 text-white transition-all duration-300 border-2 border-white rounded-full hover:text-black hover:bg-neutral-100 hover:border-black"
          >
            <h4>Envoyer mon avis</h4>
          </button>
        </form>
      )}
    </div>
  );
}
