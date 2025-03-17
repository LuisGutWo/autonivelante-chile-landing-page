import "../public/assets/css/bootstrap.css";
import "../public/assets/css/color.css";
import "../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Providers from "@/redux/Providers";
import { Toaster } from "react-hot-toast";
import { inter, jost } from "@/src/lib/font";

export const metadata = {
  title: "Autonivelante.cl",
  description: "Generado con React-Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${jost.variable}`}>
      <Providers>
        <body>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
