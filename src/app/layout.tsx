import "./styles/globals.css";
import { Montserrat, Poppins, Work_Sans } from 'next/font/google';

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// Load fonts with specific weights and subsets
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700','900'], variable: '--font-montserrat' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins' });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-worksans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${workSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="pt-20">{children}</main>
        <div className="mt-auto">
        <Footer/>
        </div>
      </body>
    </html>
  );
}
