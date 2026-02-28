"use client";

import { useEffect } from "react";
import CTASequence from "./Components/cta/CTASequence";
import ReviewsSection from "./Components/ReviewsSection";

// ✅ FontAwesome (apenas para o footer + botão topo)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  useEffect(() => {
    // ===== MENU MOBILE =====
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");

    const openMenu = () => menu?.classList.remove("hidden");
    const closeMenu = () => menu?.classList.add("hidden");
    const toggleMenu = () => menu?.classList.toggle("hidden");

    const handleMenuBtnClick = (e: Event) => {
      e.stopPropagation(); // não deixa o clique “subir” e fechar na hora
      toggleMenu();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!menu || !menuBtn) return;

      const target = e.target as Node | null;
      const clickedInsideMenu = target ? menu.contains(target) : false;
      const clickedMenuBtn = target ? menuBtn.contains(target) : false;

      // se clicou fora do menu e fora do botão -> fecha
      if (!clickedInsideMenu && !clickedMenuBtn) closeMenu();
    };

    const handleLinkClick = (e: Event) => {
      // ao clicar em qualquer link do menu, fecha também
      const target = e.target as HTMLElement | null;
      if (target?.tagName?.toLowerCase() === "a") closeMenu();
    };

    menuBtn?.addEventListener("click", handleMenuBtnClick);
    document.addEventListener("click", handleClickOutside);
    menu?.addEventListener("click", handleLinkClick);

    // opcional: fecha ao apertar ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEsc);

    // garante fechado ao carregar
    closeMenu();

    return () => {
      menuBtn?.removeEventListener("click", handleMenuBtnClick);
      document.removeEventListener("click", handleClickOutside);
      menu?.removeEventListener("click", handleLinkClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section
        id="home"
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* HEADER */}
        <header className="absolute top-0 left-0 w-full z-20">
          <div className="w-full bg-black/30 backdrop-blur-[2px]">
            <div className="max-w-6xl mx-auto px-4 h-22 flex items-center justify-between">
              <a href="#home" className="flex items-center">
                <img
                  src="/assets/logo.png"
                  alt="CAM Vidraçaria"
                  className="h-60 w-auto object-contain"
                />
              </a>

              <button
                id="menuBtn"
                type="button"
                className="w-12 h-12 flex flex-col justify-center items-center gap-1 rounded border border-white/30 hover:bg-white/10 transition"
                aria-label="Abrir menu"
                aria-expanded="false"
                aria-controls="mobileMenu"
              >
                <span className="w-7 h-0.5 bg-white"></span>
                <span className="w-7 h-0.5 bg-white"></span>
                <span className="w-7 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>

          {/* MENU dropdown */}
          <nav
            id="mobileMenu"
            className="hidden w-full bg-black/80 border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto flex flex-col text-center">
              <a href="#home" className="p-4 hover:bg-white/10 transition">
                Home
              </a>
              <a href="#sobre" className="p-4 hover:bg-white/10 transition">
                Sobre
              </a>
              <a href="#servicos" className="p-4 hover:bg-white/10 transition">
                Serviços
              </a>
                <a href="#contato" className="p-4 hover:bg-white/10 transition">
                Contato
              </a>
            </div>
          </nav>
        </header>

        {/* CONTEÚDO DO HERO */}
        <div className="relative z-10 max-w-6xl mx-auto pt-20 md:pt-32">
          <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-3xl text-white drop-shadow p-36">
            ATENDENDO SUA NECESSIDADE
            <br />
            DEXANDO SEU AMBIENTE MAIS ELEGANTE
          </h1>
        </div>
      </section>

      <section id="sobre" className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-sm text-black/70 mb-2">
                CA Vidraçaria e Esquadrias de Alumínio
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Soluções em Esquadrias de Alto
                <br className="hidden sm:block" />
                Desempenho para Projetos Modernos
              </h2>

              <p className="mt-4 text-black/70 leading-relaxed max-w-xl">
                A CA Vidraçaria e Esquadrias de Alumínio é especializada no
                desenvolvimento e execução de projetos sob medida em esquadrias
                de alumínio para residências, comércios e empreendimentos de alto
                padrão.
              </p>

              <a
                href="https://wa.me/5548999516903?text=Ola%20vim%20pelo%20site%20da%20CA%20Vidros%20e%20quero%20um%20orcamento.%20Pode%20me%20orientar%3F"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Faça seu orçamento
              </a>
            </div>

            <div className="md:flex md:justify-end">
              <img
                src="/assets/img5.jpeg"
                alt="Projeto em vidro da CA Vidraçaria"
                className="w-full md:w-[400px] rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8">
            Nossos serviços em Vidraçaria e Esquadrias de Alumínio
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-black/10"
            >
              <img
                src="/assets/img16.jpeg"
                alt="Portões em alumínio"
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">
                Portões de Alumínio
              </span>
            </a>

            <a
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-black/10"
            >
              <img
                src="/assets/img17.jpeg"
                alt="Divisória em vidro para ambientes corporativo"
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">
                Divisória de Ambiente
              </span>
            </a>

            <a
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-black/10"
            >
              <img
                src="/assets/img18.jpeg"
                alt="Esquadrais termo acusticas"
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">
                Esquadrias Térmico Acústico
              </span>
            </a>

            <a
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-black/10"
            >
              <img
                src="/assets/img19.jpeg"
                alt="Fachadas"
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">
                Sistema de Fachada
              </span>
            </a>

            <a
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-black/10 lg:col-start-2"
            >
              <img
                src="/assets/img20.jpeg"
                alt="percianas"
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">
                Sistema de Persiana Integrada
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
            Por que escolher a CA Vidraçaria?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1677B3] text-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <path d="M16 3h5v5" />
                  <path d="M10 14 21 3" />
                </svg>
              </div>

              <h3 className="font-bold text-sm md:text-base mb-2">
                Máxima Qualidade e Segurança
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Trabalhamos com vidros certificados e processos confiáveis, com
                instalação especializada.
              </p>
            </div>

            <div className="bg-[#1677B3] text-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 7V3h8v4" />
                  <path d="M3 7h18" />
                  <path d="M5 7v14h14V7" />
                  <path d="M9 12h6" />
                </svg>
              </div>

              <h3 className="font-bold text-sm md:text-base mb-2">
                Entrega no Prazo
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Cumprimos rigorosamente os prazos combinados para garantir sua
                tranquilidade.
              </p>
            </div>

            <div className="bg-[#1677B3] text-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v18" />
                  <path d="M7 8h10" />
                  <path d="M7 16h10" />
                </svg>
              </div>

              <h3 className="font-bold text-sm md:text-base mb-2">
                Alto Desempenho Térmico e Acústico
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Sistemas modernos que elevam conforto e eficiência, reduzindo
                ruídos e calor.
              </p>
            </div>

            <div className="bg-[#1677B3] text-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" />
                </svg>
              </div>

              <h3 className="font-bold text-sm md:text-base mb-2">
                Acabamento e Durabilidade
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Acabamento sofisticado, valorização estética e alta durabilidade
                em esquadrias de alumínio.
              </p>
            </div>
          </div>

          <p className="text-center text-black/70 text-sm md:text-base mt-10">
            <strong>CA VIDRAÇARIA</strong>: a escolha certa para quem busca
            sofisticação e durabilidade em esquadrias de alumínio.
          </p>
        </div>
      </section>

      <ReviewsSection />

      <section id="contato" className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
              <img
                src="/assets/img12.jpeg"
                alt="Certificado CA Vidraçaria"
                className="w-full h-[280px] md:h-[340px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                Solicite Seu Orçamento Agora Mesmo
              </h2>

              <p className="text-black/70 leading-relaxed">
                Receba um atendimento rápido e profissional. Nossa equipe está
                pronta para tirar suas dúvidas e ajudar você a escolher a melhor
                solução em vidros.
              </p>

              <p className="mt-4 text-black/70 leading-relaxed">
                <strong className="text-black">CA Vidraçaria:</strong> Qualidade,
                instalação profissional e orçamento rápido. Solicite agora!
              </p>

              <a
                href="https://wa.me/5548999516903?text=Ola%20vim%20pelo%20site%20da%20CA%20Vidros%20e%20quero%20um%20orcamento.%20Pode%20me%20orientar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="bg-[#121212] text-white relative">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute -top-6 right-6 bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
        </button>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 items-start">
            <div className="space-y-5">
              <img
                src="/assets/logo.png"
                alt="CA Vidraçaria"
                className="h-32 w-auto object-contain"
              />

              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                Soluções em vidro com sofisticação, segurança e durabilidade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">Serviços</h3>

              <ul className="space-y-3 text-sm text-white/60">
                <li className="hover:text-white transition cursor-pointer">
                  Portões em alumínio
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Divisória de ambientes
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Esquadrias Térmico acusticos
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Sistema de Fachada
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Sistema de Persiana Integrada
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">Contato</h3>

              <div className="space-y-4 text-sm text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 w-5 flex justify-center">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>(48) 9 9951-6903</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-blue-500 w-5 flex justify-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>contato@cavidracaria.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">Localização</h3>

              <div className="flex items-start gap-3 text-sm text-white/60 mb-8">
                <span className="text-blue-500 w-5 flex justify-center mt-0.5">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>

                <span>
                  R. José Silvério Da Silva - Aririu, Palhoça - SC, 88135-623
                </span>
              </div>

              <h3 className="font-semibold mb-4 text-white">Redes Sociais</h3>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ca_vidracaria_/"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-pink-600 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>

              

                <a
                  href="https://wa.me/5548999516903?text=Ola%20vim%20pelo%20site%20da%20CA%20Vidros%20e%20quero%20um%20orcamento.%20Pode%20me%20orientar%3F"
                  target="_blank"
                  aria-label="WhatsApp"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-600 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <span>© 2025 CA Vidraçaria</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>

      <CTASequence />
    </main>
  );
}