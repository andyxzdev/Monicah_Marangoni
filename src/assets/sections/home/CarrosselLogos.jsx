import { useLayoutEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import logo1 from "../../images/logo/deltabc.svg";
import logo2 from "../../images/logo/gympass.svg";
import logo3 from "../../images/logo/indelta.svg";
import logo4 from "../../images/logo/monster.svg";
import logo5 from "../../images/logo/tea.svg";

const logos = [
  {
    src: logo1,
    alt: "Nome da empresa 1",
  },
  {
    src: logo2,
    alt: "Nome da empresa 2",
  },
  {
    src: logo3,
    alt: "Nome da empresa 3",
  },
  {
    src: logo4,
    alt: "Nome da empresa 4",
  },
  {
    src: logo5,
    alt: "Nome da empresa 5",
  },
];

const SPEED = 50;

const CarrosselLogos = () => {
  const controls = useAnimation();
  const firstGroupRef = useRef(null);

  useLayoutEffect(() => {
    const group = firstGroupRef.current;

    if (!group) return;

    const startAnimation = () => {
      const groupWidth = group.offsetWidth;
      const duration = groupWidth / SPEED;

      controls.set({ x: 0 });

      controls.start({
        x: -groupWidth,

        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    startAnimation();

    // Recalcula a animação quando o tamanho da tela mudar
    const resizeObserver = new ResizeObserver(startAnimation);

    resizeObserver.observe(group);

    return () => {
      resizeObserver.disconnect();
      controls.stop();
    };
  }, [controls]);

  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      {/* Título da seção */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A55A]">
          Quem já confiou
        </p>

        <h2 className="mt-5 text-4xl font-light leading-tight text-[#32150f] md:text-5xl lg:text-6xl">
          Empresas que confiaram seus espaços ao nosso escritório
        </h2>
      </div>

      {/* Carrossel */}
      <div className="relative mt-16 w-full overflow-hidden">
        {/* Degradê esquerdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent md:w-32" />

        {/* Degradê direito */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent md:w-32" />

        <motion.div
          animate={controls}
          className="flex w-max will-change-transform"
        >
          {/* Primeiro grupo */}
          <div
            ref={firstGroupRef}
            className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20 lg:gap-28 lg:pr-28"
          >
            {logos.map((logo) => (
              <LogoItem key={logo.alt} logo={logo} />
            ))}
          </div>

          {/* Cópia do grupo para criar o loop */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20 lg:gap-28 lg:pr-28"
          >
            {logos.map((logo) => (
              <LogoItem key={`duplicate-${logo.alt}`} logo={logo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoItem = ({ logo }) => {
  return (
    <div className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44 lg:w-52">
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        draggable="false"
        className="max-h-16 max-w-full select-none object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-20"
      />
    </div>
  );
};

export default CarrosselLogos;
