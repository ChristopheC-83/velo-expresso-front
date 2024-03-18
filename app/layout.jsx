
import "./style/global.css";
import "./style/custom.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: "Vélo Expresso",
  description: "Votre magasin de vélo dans la Vaunage, à Congénies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header/>
        <section className="mt-32 grow">{children}</section>
        <Footer/>
        </body>
    </html>
  );
}
