// carte google map situant le magasin
// responsive compliqué, un cadre différent par taille d'écran

export default function Map() {
    const urlIframe ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.6534438091112!2d4.158121267084905!3d43.77307599523545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b42717a0b50a9b%3A0xcccb132f487e1fde!2sV%C3%A9lo%20expresso!5e0!3m2!1sfr!2sfr!4v1710999243587!5m2!1sfr!2sfr";
  return (
    <div className="bg-neutral-800 min-h-[100px]  justify-center py-6">
      <h2 className="my-8 text-center text-white">
        Et venir nous voir, par là :
      </h2>
      <div className="flex flex-col items-center justify-center w-full mb-6">
        <div className="xs:hidden">
          <iframe
            src={urlIframe}
            width="300"
            height="300"
            style={{ border: 0 }}
            title="Responsive Google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="hidden xs:block sm:hidden">
          <iframe
            src={urlIframe}
            width="450"
            height="450"
            style={{ border: 0 }}
            title="Responsive Google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="hidden sm:block lg:hidden">
          <iframe
            src={urlIframe}
            width="600"
            height="450"
            style={{ border: 0 }}
            title="Responsive Google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="hidden lg:block">
          <iframe
            src={urlIframe}
            width="1000"
            height="450"
            style={{ border: 0 }}
            title="Responsive Google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </div>

    </div>
  );
}
