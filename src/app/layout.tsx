import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Fundación Afecto y Efecto - Sonreír es gratis",
  description:
    "Organización sin ánimo de lucro dedicada al desarrollo integral de niños, niñas y adolescentes en comunidades vulnerables de Colombia.",
  keywords: [
    "fundación",
    "niños",
    "educación",
    "afecto",
    "efecto",
    "Colombia",
    "social",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${lato.className} bg-white text-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
