import { Instagram, Facebook, X } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © 2025 TravelX. Todos os direitos reservados. Desenvolvido por Pedro Henrique Torisu Lemos
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-sm mb-2 md:mb-0">Nos siga nas redes sociais:</span>
          <div className="flex gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <FaX className="w-6 h-6 hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
