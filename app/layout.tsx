import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Importamos la barra de navegación */
import BarraNavegacion from '../componentes/BarraNavegacion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* son instrucciones directas para los "bots" de Google y Bing. 
Les dicen categóricamente que tienen prohibido leer la página, prohibido seguir sus enlaces y prohibido mostrarla en los 
resultados de búsqueda. */
export const metadata: Metadata = {
  title: "Sebastián - Portafolio TI",
  description: "Portafolio profesional de ingeniería en tecnologías de la información.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className={`${geistSans.className} bg-zinc-950 text-white min-h-full flex flex-col`}>

        {/* Fondo animado global */}
        <div className="bg-tech-grid"></div>

        {/* Dentro de Body llamamos la función */}
        <BarraNavegacion />

        {children}
        
      </body>
    </html>
  );
}
