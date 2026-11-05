// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const areas = [
  {
    numero: "01",
    titulo: "Corporativo",
    descricao:
      "Projetos construtivos e de interiores, montagem e reforma de escritórios, agências bancárias e retrofit de fachadas. Layout, mobiliário, ambientação e programação visual.",
  },
  {
    numero: "02",
    titulo: "Comercial",
    descricao:
      "Projetos e montagem de lojas, bares e restaurantes. Conceito, padronização de franquias, aprovação de projetos e acompanhamento de obra.",
  },
  {
    numero: "03",
    titulo: "Residencial",
    descricao:
      "Da concepção arquitetônica aos interiores, com funcionalidade, sustentabilidade, acessibilidade e atenção ao orçamento de cada cliente.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
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

const Atuacao = () => {
  return (
    <section className="overflow-hidden bg-[#FAF4EE] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#9A604E]">
            05 · Atuação
          </span>

          <h2 className="mt-6 text-4xl font-light italic text-[#733522] md:text-5xl">
            O que entregamos.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {areas.map((area) => (
            <motion.article
              key={area.numero}
              variants={itemVariants}
              className="grid gap-5 border-b border-[#733522]/15 py-8 first:pt-0 sm:grid-cols-[70px_1fr]"
            >
              <span className="font-serif text-3xl font-light italic text-[#C9A55A]">
                {area.numero}
              </span>

              <div>
                <h3 className="text-3xl font-light italic text-[#733522]">
                  {area.titulo}
                </h3>

                <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-[#625A56] md:text-base">
                  {area.descricao}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Atuacao;
