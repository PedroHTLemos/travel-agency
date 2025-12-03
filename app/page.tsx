"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Destinos from "@/components/sections/Destinos";
import Pacotes from "@/components/sections/Pacotes";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Destinos />
      <Pacotes />
      <Contato/>
      <Footer />
    </div>
  );
}
