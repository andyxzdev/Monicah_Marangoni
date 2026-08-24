import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroVideo from "../video/hero-arquitetura.webm";
import logoM from "../images/logo/M.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(maskRef.current, {
        WebkitMaskSize: "0vmax",
        maskSize: "0vmax",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          // Ative somente durante os testes:
          // markers: true,
        },
      });

      timeline
        // Pequeno zoom cinematográfico no vídeo
        .to(
          videoRef.current,
          {
            scale: 2.08,
            ease: "none",
            duration: 1,
          },
          0,
        )

        // O M cresce até revelar todo o fundo branco
        .to(
          maskRef.current,
          {
            WebkitMaskSize: () =>
              window.innerWidth < 768 ? "650vmax" : "350vmax",

            maskSize: () => (window.innerWidth < 768 ? "650vmax" : "350vmax"),

            ease: "none",
            duration: 1,
          },
          0,
        )

        // O conteúdo desaparece durante a animação
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: -40,
            ease: "none",
            duration: 0.25,
          },
          0,
        )

        // O indicador também desaparece
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 20,
            ease: "none",
            duration: 0.2,
          },
          0,
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#32150f]"
    >
      {/* Vídeo da hero */}
      <video
        ref={videoRef}
        src={heroVideo}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={(event) => {
          event.currentTarget.play().catch(() => {});
        }}
        onError={(event) => {
          console.error("Erro ao carregar o vídeo:", event.currentTarget.error);
        }}
      >
        Seu navegador não suporta vídeos.
      </video>

      {/* Camada escura para melhorar o contraste */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      {/* Conteúdo central */}
      <div
        ref={contentRef}
        className="absolute left-1/2 top-1/2 z-20 w-[calc(100%-40px)] max-w-6xl -translate-x-1/2 -translate-y-1/2 text-center text-white will-change-transform"
      >
        <span className="mb-5 block text-xs font-medium uppercase tracking-[0.35em] md:text-sm">
          ARQUITETURA CORPORATIVA - DESDE 2003
        </span>

        <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-[#C9A55A]">Estratégia e bem-estar</span> em
          espaços que geram resultados.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
          Há mais de 25 anos transformando ideias em obras de arte, cobrindo
          projetos corporativos, comerciais e residenciais com diagnóstico
          estratégico.
        </p>

        {/* Botões */}
        <div className="mx-auto mt-10 flex w-full max-w-[580px] flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#contato"
            className="flex min-h-14 flex-1 items-center justify-center border border-white bg-white px-8 text-sm font-normal uppercase tracking-wide text-[#542011] transition-colors duration-300 hover:border-[#C9A55A] hover:bg-[#C9A55A] hover:text-white"
          >
            Iniciar projeto
          </a>

          <a
            href="#projetos"
            className="flex min-h-14 flex-1 items-center justify-center border border-white/80 bg-transparent px-8 text-sm font-normal uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[#542011]"
          >
            Ver projetos
          </a>
        </div>

        <div
          ref={scrollIndicatorRef}
          className="mt-6 flex flex-col items-center gap-3 text-white"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Explore
          </span>

          <span className="h-10 w-px bg-white/70" />
        </div>
      </div>

      {/* M usado como máscara */}
      <div
        ref={maskRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 bg-white will-change-[mask-size]"
        style={{
          WebkitMaskImage: `url("${logoM}")`,
          maskImage: `url("${logoM}")`,

          WebkitMaskPosition: "center",
          maskPosition: "center",

          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",

          WebkitMaskSize: "0vmax",
          maskSize: "0vmax",
        }}
      />
    </section>
  );
}
