"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-dark">TravelX</h1>

        <div className="hidden md:flex space-x-8 text-base md:text-lg font-medium text-gray-700">
          <Link href="#destinos" className="hover:text-blue-light transition">Destinos</Link>
          <Link href="#pacotes" className="hover:text-blue-light transition">Pacotes</Link>
          <Link href="#contato" className="hover:text-blue-light transition">Contato</Link>
        </div>

        <Button className="bg-sand-dark hover:bg-sand-light text-gray-900 hidden md:flex items-center justify-center">
          Reservar Agora
        </Button>
      </div>
    </nav>
  );
}
