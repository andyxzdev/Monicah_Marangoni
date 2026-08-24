import { useLayoutEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const feedbacks = [
  {
    nome: "Mariana Costa",
    projeto: "Projeto residencial",
    texto:
      "O projeto transformou completamente a forma como vivemos a casa. Os ambientes ficaram mais funcionais, integrados e conectados à nossa rotina.",
  },
  {
    nome: "Ricardo Almeida",
    projeto: "Arquitetura corporativa",
    texto:
      "O novo escritório traduziu perfeitamente a identidade da empresa. A equipe ganhou mais conforto, organização e produtividade no dia a dia.",
  },
  {
    nome: "Fernanda Oliveira",
    projeto: "Projeto de interiores",
    texto:
      "Cada escolha foi explicada com clareza e propósito. O resultado ficou elegante, acolhedor e muito mais funcional do que imaginávamos.",
  },
  {
    nome: "Carlos Martins",
    projeto: "Arquitetura comercial",
    texto:
      "O espaço passou a comunicar melhor o posicionamento da nossa marca e tornou a experiência dos clientes muito mais agradável.",
  },
  {
    nome: "Juliana Mendes",
    projeto: "Projeto para clínica",
    texto:
      "A equipe entendeu todas as necessidades da clínica e criou ambientes acolhedores, sofisticados e preparados para a rotina dos profissionais.",
  },
  {
    nome: "André Ribeiro",
    projeto: "Arquitetura residencial",
    texto:
      "Recebemos acompanhamento em todas as etapas, desde o conceito até a execução. Nossa casa ficou bonita, confortável e prática.",
  },
  {
    nome: "Patrícia Nogueira",
    projeto: "Interiores corporativos",
    texto:
      "O diagnóstico inicial fez toda a diferença. O projeto resolveu problemas que já faziam parte da rotina e que nunca tínhamos percebido.",
  },
  {
    nome: "Eduardo Campos",
    projeto: "Espaço comercial",
    texto:
      "O projeto conseguiu unir estética, estratégia e funcionalidade. Hoje, nosso espaço representa verdadeiramente a essência da marca.",
  },
];

const SPEED = 35;

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
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

const FeedbackCard = ({ feedback }) => {
  return (
    <article className="relative flex min-h-[320px] w-[300px] shrink-0 flex-col justify-between overflow-hidden bg-[#EFE7DF] p-7 sm:w-[350px] md:min-h-[340px] md:w-[390px] md:p-9">
      {/* Aspas decorativas */}
      <span
        aria-hidden="true"
        className="absolute right-6 top-3 font-serif text-8xl font-light leading-none text-[#C9A55A]/25"
      >
        “
      </span>

      <div className="relative z-10">
        {/* Estrelas */}
        <div
          className="flex gap-1 text-sm tracking-wider text-[#C9A55A]"
          aria-label="Avaliação de cinco estrelas"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} aria-hidden="true">
              ★
            </span>
          ))}
        </div>

        <p className="mt-7 text-base font-light leading-relaxed text-[#56504D] md:text-[17px]">
          “{feedback.texto}”
        </p>
      </div>

      <div className="relative z-10 mt-9 border-t border-[#8A4B3A]/20 pt-5">
        <h3 className="text-2xl font-light italic text-[#733522]">
          {feedback.nome}
        </h3>

        <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#9A604E]">
          {feedback.projeto}
        </span>
      </div>
    </article>
  );
};

const Feedbacks = () => {
  const controls = useAnimation();
  const firstGroupRef = useRef(null);

  useLayoutEffect(() => {
    const group = firstGroupRef.current;

    if (!group) return;

    const startAnimation = () => {
      const groupWidth = group.offsetWidth;
      const duration = groupWidth / SPEED;

      controls.stop();
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

    const resizeObserver = new ResizeObserver(() => {
      startAnimation();
    });

    resizeObserver.observe(group);

    return () => {
      resizeObserver.disconnect();
      controls.stop();
    };
  }, [controls]);

  const renderFeedbacks = (prefix) =>
    feedbacks.map((feedback, index) => (
      <FeedbackCard
        key={`${prefix}-${feedback.nome}-${index}`}
        feedback={feedback}
      />
    ));

  return (
    <section
      id="depoimentos"
      className="overflow-hidden bg-[#FAF9F7] py-20 md:py-28"
    >
      {/* Cabeçalho */}
      <motion.div
        className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <motion.span
          variants={headerItemVariants}
          className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9A604E] md:text-xs"
        >
          07 · Avaliações
        </motion.span>

        <motion.h2
          variants={headerItemVariants}
          className="mt-6 max-w-4xl text-4xl font-light italic leading-tight tracking-[-0.025em] text-[#733522] sm:text-5xl lg:text-[64px]"
        >
          O que dizem nossos clientes
        </motion.h2>

        <motion.p
          variants={headerItemVariants}
          className="mt-5 max-w-2xl text-base font-light leading-relaxed text-[#625A56] md:text-[17px]"
        >
          Projetos construídos com escuta, estratégia e relações de confiança.
        </motion.p>
      </motion.div>

      {/* Carrossel */}
      <div className="relative mt-14 overflow-hidden md:mt-16">
        {/* Degradê esquerdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#FAF9F7] to-transparent sm:w-20 lg:w-32" />

        {/* Degradê direito */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#FAF9F7] to-transparent sm:w-20 lg:w-32" />

        <motion.div
          animate={controls}
          className="flex w-max will-change-transform"
        >
          {/* Sequência original */}
          <div
            ref={firstGroupRef}
            className="flex shrink-0 gap-5 pr-5 md:gap-7 md:pr-7"
          >
            {renderFeedbacks("original")}
          </div>

          {/* Cópia para manter o loop contínuo */}
          <div
            aria-hidden="true"
            className="flex shrink-0 gap-5 pr-5 md:gap-7 md:pr-7"
          >
            {renderFeedbacks("duplicate")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedbacks;
