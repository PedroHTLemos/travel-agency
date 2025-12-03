"use client";

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface Pacote {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

export default function Pacotes() {
  const pacotes: Pacote[] = [
    {
      nome: "Resort das Maldivas",
      descricao:
        "Desfrute de praias paradisíacas com bangalôs sobre a água, serviço exclusivo e gastronomia sofisticada. Uma experiência de luxo para relaxar e renovar suas energias.",
      preco: "R$ 12.500",
      imagem: "/pacote-maldivas.jpg",
    },
    {
      nome: "Aventura em Bali",
      descricao:
        "Explore templos antigos, campos de arroz e experiências autênticas. Ideal para quem busca aventura e conexão com a natureza.",
      preco: "R$ 8.300",
      imagem: "/pacote-bali.jpg",
    },
    {
      nome: "Surf no Havaí",
      descricao:
        "Pegue as melhores ondas em praias icônicas, aproveite paisagens vulcânicas e a cultura local. Um pacote perfeito para surfistas e amantes de aventura.",
      preco: "R$ 9.700",
      imagem: "/pacote-havai.jpg",
    },
    {
      nome: "Ilhas Gregas",
      descricao:
        "Descubra praias deslumbrantes, arquitetura branca característica e história milenar. Uma viagem que combina relaxamento, cultura e gastronomia mediterrânea.",
      preco: "R$ 10.200",
      imagem: "/pacote-grecia.jpg",
    },
  ];

  return (
    <section
      id="pacotes"
      className="relative py-20 scroll-mt-20"
      style={{
        background: "linear-gradient(to bottom, #FDE68A 0%, #017977 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-blue-dark mb-12 text-center">
          Pacotes Imperdíveis
        </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {pacotes.map((pacote) => (
            <SwiperSlide key={pacote.nome}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform flex flex-col h-full min-h-[28rem]">
                <img
                  src={pacote.imagem}
                  alt={pacote.nome}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-blue-dark mb-3">
                    {pacote.nome}
                  </h4>
                  <p className="text-gray-700 mb-4 text-lg md:text-xl leading-relaxed flex-1">
                    {pacote.descricao}
                  </p>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <span className="text-xl md:text-2xl font-semibold text-blue-dark">
                      {pacote.preco}
                    </span>
                    <Button className="bg-blue-dark hover:bg-blue-light text-white rounded-xl px-6 py-3 font-semibold w-full">
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
