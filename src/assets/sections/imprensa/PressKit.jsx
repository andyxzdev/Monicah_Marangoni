import { motion } from "framer-motion";

const MotionDiv = motion.div;

const email = "contato@monicahmarangoni.com.br";

const assunto = encodeURIComponent(
  "Solicitação de Press Kit — Monicah Marangoni",
);

const mensagem = encodeURIComponent(
  "Olá! Gostaria de solicitar o press kit do escritório Monicah Marangoni.",
);

const emailUrl = `mailto:${email}?subject=${assunto}&body=${mensagem}`;

const PressKit = () => {
  return (
    <section className="overflow-hidden bg-[#32140D] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <MotionDiv
        className="mx-auto max-w-[1400px]"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#C9A55A] md:text-xs">
          Press kit
        </span>

        <h2 className="mt-7 max-w-4xl text-4xl font-light italic leading-tight text-[#E9CDA9] sm:text-5xl lg:text-[62px]">
          Materiais oficiais para reportagens e curadorias.
        </h2>

        <p className="mt-7 max-w-3xl text-base font-light leading-relaxed text-white/65 md:text-[17px]">
          Biografia institucional, fotos profissionais da arquiteta, imagens de
          projetos em alta resolução e logotipos do escritório disponíveis sob
          solicitação.
        </p>

        <a
          href={emailUrl}
          className="group mt-10 inline-flex items-center gap-5 border-b border-[#C9A55A] pb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#C9A55A] transition-colors duration-300 hover:border-white hover:text-white"
        >
          Solicitar press kit
          <span
            aria-hidden="true"
            className="text-lg transition-transform duration-300 group-hover:translate-x-2"
          >
            →
          </span>
        </a>
      </MotionDiv>
    </section>
  );
};

export default PressKit;
