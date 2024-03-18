
import "./style/global.css";
import "./style/custom.css";


export const metadata = {
  title: "Vélo Expresso",
  description: "Votre magasin de vélo dans la Vaunage, à Congénies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="">{children}</body>
    </html>
  );
}
