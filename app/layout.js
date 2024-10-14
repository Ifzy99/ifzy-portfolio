import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "./ThemeProviderWrapper";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProviderWrapper>{children}
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
        </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
