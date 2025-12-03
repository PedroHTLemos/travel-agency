"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-32">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-beach.jpg"
          alt="Praia paradisíaca"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/25" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-sand-light/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-hero-title drop-shadow-lg">
          Descubra seu próximo destino
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto text-blue-dark tracking-wide leading-relaxed">
          Explore pacotes de praia e resorts exclusivos com conforto e relaxamento.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-sand-dark hover:bg-sand-light text-gray-900">
            Começar Agora
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
