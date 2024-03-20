import "./style/global.css";
import "./style/custom.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Vélo Expresso",
  description: "Votre magasin de vélo dans la Vaunage, à Congénies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Header />
        <Toaster position="top-center" richColors expand={true} />
          <section className="grow">{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
