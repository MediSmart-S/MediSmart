import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import Layout from "../_components/ui/Layout";
import { ScrollProvider } from "../_components/context/ScrollContext";

const Baloo = Baloo_Bhaijaan_2({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "مدی اسمارت",
  description: "Medical website made with nextjs for kh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Baloo.className}`}>
        <ScrollProvider>
          <Layout>{children}</Layout>
        </ScrollProvider>
      </body>
    </html>
  );
}
