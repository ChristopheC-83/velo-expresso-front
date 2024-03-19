export const sliders = [
  {
    id: 0,
    image: "/images/velo-expresso-square.png",
    //  pour style/alignX et Y => menus déroulants dans le composant

    // en db "dimensions adaptables/fixes ?"
    // "contain si image carré, cover si format paysage"
    style: "contain",
    // alignement horizontal et vertical
    // "", "-left", "-right"
    alignX: "center",
    // texte
    title: "Vélo Expresso",
    // texte dans bouton
    btnText: "Découvrir 0",
    // liendu bouton
    btnLink: "/",
    //  si écriture illisible à cause de l'image, overlay
    overlay: false,
  },
  {
    id: 1,
    image: "/images/footer.png",
    style: "cover",
    alignX: "right",
    title: "Plus de fun !?!",
    btnText: "Découvrir 1",
    btnLink: "/new-bikes",
    overlay: true,
  },
  {
    id: 2,
    image: "/images/footer.png",
    style: "cover",
    alignX: "left",
    title: "Plus de fun !?!",
    btnText: "Découvrir 2",
    btnLink: "/new-bikes",
    overlay: false,
  },
];
