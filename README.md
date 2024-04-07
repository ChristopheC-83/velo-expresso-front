
    <h1><u>🚀 Le Projet Passerelle 4 🚀</u></h1>
    <h3>Formation Rocket de l'école Believemey</h3>
    <br /><br />
    <h2><u>Présentation :</u></h2>
    <p>
      Dans le cadre de la formation Rocket dispensé par le centre Believemy
      (Louis-Nicolas Leuillet), notre dernier projet avait pour énoncé la
      création de notre choix avec comme contrainte unique d'exploiter NextJS
      14.
    </p>
    <p>
      Le choix a été fait de ne pas exploiter complètement Nextjs mais la
      formation dans son ensemeble avec un front en Next et un back
      d'administration en php.
    </p>
    <p>Le support de projet est la confection d'un site pour un magasin de vélos proche de chez moi.</p>
    <br />
    <p>Nous aurons le site vitrine en Nextjs mais dynamique car adminitrable par un site secondaire (php).</p>


    <h2><u>Objectifs :</u></h2>
    <p>
      - Le site doit présenter à la clientèle les services et les produits du
      magasin.
    </p>
    <p>
      - Devant me rendre dispensable, le site sera alimenté par une base données
      laissé entre les mains de la boutique.
    </p>
    <p>
      - Les clients pourront remplir un Livre d'Or directement sur le site, et
      sans friction / inscription nécessaire (mais avec validation par la
      boutique avant publication).
    </p>
    <br />
    <h2><u>Le projet :</u></h2>
    <p>
      Pour utiliser tous les outils à ma disposition et simuler un "grand"
      projet, frontend et backend seront 2 entités séparées.
    </p>
    <p>
      - Le Front, accessible aux clients/visiteurs, exposera qq produits et les
      services du magasin.
    </p>
    <p>
      - Le Back, accessible uniquement par le propriétaire du magasin, permettra
      de remplir la base de données en ce qui concerne les services, les vélos
      (neufs et occasions), les marques et informations de la landing page.
    </p>

    <p>Le php au=yant fait l'objet d'un précédent projet passerelle, attardons nous sur la vitrine en Next</p>

    <h2><u>Le Front :</u></h2>
    <p>
      - la page d'accueil présentera le magasin .
      - des cadres présenteront les principaux services.
      - les marques partenaires.
      - les avis clients validés.
      - un google map.
      - les cooordonnées du magasin.
      - les CGU.
    </p>
    <p>S'en suivent 4 pages :
        <ul>
            <li>vélos neufs</li>
            <li>vélos d'occasion</li>
            <li>atelier et tarifs</li>
            <li>locations et tarifs</li>
        </ul>
    </p>
    <p>Une page de connexion qui permet :
        <ul>
            <li>une connexion à la volée avec un compte Google</li>
            <li>la déconnexion</li>
            <li>la suppression de son compte et d'un potenetiel avis (1 utilisateur = 1 avis maximum.)</li>
        </ul>
    </p>
<br>
<h2><u>Les outils utilisés :</u></h2>
<p>
    - Tailwind/SASS pour le style.<br>
    - L'ORM Prisma pour le lien entre le site et les bases de données( 1 pour l'administration des produits/tarifs, une pour les avis qui viennent du site, j'ai isolé les 2 provenances).<br>
    - React-Icons pour une grande bibliothèques d'icones.<br>
    - Next-Auth pour la gestion de la connexion.<br>
    - Sonner pour les notifications.<br>
    - React Query pour gérer les requêtes API, le Loading, Fetching, Error.<br>
    - Axios pour les appels API.<br>
    - he, pour html entities, qui traduit les caractères spéciaux en provenance de mysql.<br>
    - framer motion pour la gestion des animations.<br>
    - hostinger pour l'hébergement des bases de données (et du site d'admiistration).<br>
    - Vercel pour l'hébergement du site vitrine.<br>
</p>

<h2><u>Les liens Github :</u></h2>
<a href="https://github.com/ChristopheC-83/velo-expresso-front">Pour le repository du Front</a><br><br>
<a href="https://github.com/ChristopheC-83/velo-expresso-back">Pour le repository du Back</a><br>

<h2><u>Les liens des sites</u></h2>

<a href="https://velo-expresso-front.vercel.app/">Le site vitrine pour les utilisateur.</a><br><br>
<a href="https://dbve.barpat.fun/">Le site d'administration pour le propriétaire du magasin.</a><br>



<h4>C'est ainsi que se termine l'aventure Rocket !</h4>
<h4>Merci Louis-Nicolas et son équipe.</h4>
<h4>Merci à tous les membres de Discord avec mention spéciale pour Jérôme (la bible) et les inséparables Seb et Waylander.</h4>
<br><br>

<h2>C'est parti pour de nouvelles aventures !!!</h2>



