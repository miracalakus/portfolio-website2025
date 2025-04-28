import "./styles/globals.css";
import { Montserrat, DM_Serif_Display, Poppins, Work_Sans } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Mirac's Portfolio",
  description: "Creative front-end developer and UX/UI designer with 3D and motion design skills. Explore my work and projects.",
};

const dmserifdisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dmserifdisplay',
});
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '700','900'], 
  variable: '--font-montserrat' 
});
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  variable: '--font-poppins' 
});
const workSans = Work_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'], 
  variable: '--font-worksans' 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${dmserifdisplay.variable} ${montserrat.variable} ${poppins.variable} ${workSans.variable}`}>
      <body className="flex flex-col min-h-screen ">
        <Navbar/>
        <main className="pt-20">{children}</main>
        <SpeedInsights />
        <div className="mt-auto">
        <Footer/>
        </div>
      </body>
    </html>
  );
}
