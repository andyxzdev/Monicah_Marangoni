import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ImprensaHero = () => {
  return (
    <section className="border-b border-[#733522]/10 bg-[#FAF4EE] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <MotionDiv
        className="mx-auto max-w-[1400px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionSpan
          variants={itemVariants}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#9A604E] md:text-xs"
        >
          Imprensa
        </MotionSpan>

        <MotionH1
          variants={itemVariants}
          className="mt-7 max-w-5xl text-5xl font-light italic leading-[1.02] tracking-[-0.035em] text-[#32140D] sm:text-6xl lg:text-[76px]"
        >
          Onde a nossa arquitetura{" "}
          <span className="text-[#C9A55A]">aparece.</span>
        </MotionH1>

        <MotionP
          variants={itemVariants}
          className="mt-8 max-w-2xl text-base font-light leading-8 text-[#625A56] md:text-[17px]"
        >
          Reunimos aqui publicações, entrevistas e materiais para jornalistas e
          curadores. Para solicitações de pauta, imagens em alta resolução ou
          agendas de entrevista, escreva para{" "}
          <a
            href="mailto:contato@monicahmarangoni.com.br"
            className="text-[#9A604E] transition-colors duration-300 hover:text-[#C9A55A]"
          >
            contato@monicahmarangoni.com.br
          </a>
          .
        </MotionP>
      </MotionDiv>
    </section>
  );
};

export default ImprensaHero;
