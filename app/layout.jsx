import "./style/global.css";
import "./style/custom.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/query-provider";
<link rel="icon" href="/favicon.ico" sizes="any" />

export const metadata = {
  title: "Vélo Expresso | Accueil",
  description: "Vélo Express, votre magasin de vélos dans la Vaunage, à Congénies. Vtt, vélos électriques, vae, vélos enfants, vélos neufs et d'occasion.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="relative min-h-screen">
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
          <Toaster position="top-center" richColors expand={true} />
            <section className="grow">{children}</section>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
 