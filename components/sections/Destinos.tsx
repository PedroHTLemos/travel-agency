"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface Destino {
  nome: string;
  descricao: string;
  imagem: string;
}

export default function Destinos() {
  const destinos: Destino[] = [
    { nome: "Maldivas", descricao: "Praias paradisíacas.", imagem: "/destino-maldivas.jpg" },
    { nome: "Bali", descricao: "Cultura rica e resorts.", imagem: "/destino-bali.jpg" },
    { nome: "Havaí", descricao: "Surf e aventuras únicas.", imagem: "/destino-havai.jpg" },
    { nome: "Grécia", descricao: "Ilhas encantadoras e história.", imagem: "/destino-grecia.jpg" },
    { nome: "Tailândia", descricao: "Templos e praias incríveis.", imagem: "/destino-tailandia.jpg" },
    { nome: "Caribe", descricao: "Mar azul e relaxamento total.", imagem: "/destino-caribe.jpg" },
  ];

  return (
    <section
      id="destinos"
        className="relative py-20 scroll-mt-20"
        style={{
            background: "linear-gradient(to bottom, #FFFFFF 0%, #FDE68A 100%)"
        }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-blue-dark mb-12 text-center">
          Destinos Incríveis
        </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {destinos.map((destino) => (
            <SwiperSlide key={destino.nome}>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform">
                <img
                  src={destino.imagem}
                  alt={destino.nome}
                  className="w-full h-72 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 tracking-tight">
                    {destino.nome}
                  </h4>
                  <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                    {destino.descricao}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
