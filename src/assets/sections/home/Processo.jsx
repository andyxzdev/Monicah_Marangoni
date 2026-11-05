// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico Estratégico",
    descricao:
      "Análise do negócio, da cultura, das rotinas e das necessidades de quem utiliza o espaço.",
  },
  {
    numero: "02",
    titulo: "Conceituação",
    descricao:
      "Definição das diretrizes, soluções e identidade que orientarão todo o projeto.",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento",
    descricao:
      "Criação e detalhamento do projeto arquitetônico, interiores, materiais e soluções técnicas.",
  },
  {
    numero: "04",
    titulo: "Implementação",
    descricao:
      "Acompanhamento da execução para garantir qualidade e fidelidade às decisões do projeto.",
  },
  {
    numero: "05",
    titulo: "Pós-ocupação",
    descricao:
      "Avaliação do espaço em uso para identificar resultados, percepções e oportunidades de melhoria.",
  },
];

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
    y: 35,
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

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.35,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const Processo = () => {
  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-[#461C0E] px-5 py-20 text-white sm:px-8 md:py-28 lg:min-h-[700px] lg:px-12"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col justify-center">
        {/* Cabeçalho */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
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
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A55A] md:text-xs"
          >
            03 · Processo
          </motion.span>

          <motion.h2
            variants={headerItemVariants}
            className="mt-7 text-4xl font-light italic leading-[1.08] tracking-[-0.025em] text-[#E9CDA9] sm:text-5xl lg:text-[62px]"
          >
            Um método estruturado para transformar necessidades em ambientes de
            alto desempenho
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-white/70 md:text-[17px]"
          >
            Cada projeto nasce de um olhar técnico e estratégico, considerando
            os objetivos da empresa no curto, médio e longo prazo.
          </motion.p>
        </motion.div>

        {/* Etapas */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:mt-20 md:grid-cols-2 lg:grid-cols-5"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {etapas.map((etapa, index) => (
            <motion.article
              key={etapa.numero}
              variants={cardVariants}
              className={[
                "group relative py-7",
                "border-b border-[#C9A55A]/35",
                "md:px-7",
                "lg:min-h-[130px] lg:border-b-0 lg:px-8 lg:py-0",
                index !== etapas.length - 1
                  ? "lg:border-r lg:border-[#C9A55A]/40"
                  : "",
              ].join(" ")}
            >
              <span className="block text-[11px] font-medium text-[#C9A55A]">
                {etapa.numero}
              </span>

              <h3 className="mt-4 text-2xl font-light italic leading-tight text-[#E9CDA9] transition-colors duration-300 group-hover:text-[#C9A55A] lg:text-[25px]">
                {etapa.titulo}
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-white/75">
                {etapa.descricao}
              </p>

              {/* Linha animada no mobile e tablet */}
              <motion.span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px bg-[#C9A55A] lg:hidden"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Processo;
