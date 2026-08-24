import { motion } from "framer-motion";

const especialidades = [
  {
    numero: "01",
    titulo: "Arquitetura Estratégica",
    descricao:
      "Projetos que conectam os espaços aos objetivos do negócio, fortalecendo a identidade da marca, a cultura organizacional e a experiência de clientes e equipes.",
  },
  {
    numero: "02",
    titulo: "Neuroarquitetura",
    descricao:
      "Aplicação de conhecimentos sobre comportamento, percepção e emoções para criar ambientes que favorecem bem-estar, concentração, produtividade e conexão.",
  },
  {
    numero: "03",
    titulo: "Arquitetura Wellness e Saudável",
    descricao:
      "Ambientes pensados para promover saúde e qualidade de vida por meio da iluminação, ergonomia, escolha de materiais, conforto ambiental e conexão com a natureza.",
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

const cardsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Especialidades = () => {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden bg-[#461C0E] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Cabeçalho */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
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
            04 · Especialidades
          </motion.span>

          <motion.h2
            variants={headerItemVariants}
            className="mt-7 text-4xl font-light italic leading-tight tracking-[-0.025em] text-[#E9CDA9] sm:text-5xl lg:text-[62px]"
          >
            Três frentes. Um único rigor
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="mx-auto mt-7 max-w-3xl text-base font-light leading-relaxed text-white/65 md:text-[17px]"
          >
            Concepção arquitetônica, projeto de interiores, sustentabilidade,
            acessibilidade, racionalização e Visual Merchandising.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-3"
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {especialidades.map((especialidade) => (
            <motion.article
              key={especialidade.numero}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden bg-[#783923] px-6 py-7 sm:px-8 sm:py-8"
            >
              {/* Fundo animado no hover */}
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#8A432A] transition-transform duration-500 ease-out group-hover:scale-y-100" />

              <div className="relative z-10">
                <span className="block text-xs font-medium text-[#C9A55A]">
                  {especialidade.numero}
                </span>

                <h3 className="mt-5 text-4xl font-light italic leading-none text-[#E9CDA9] sm:text-5xl">
                  {especialidade.titulo}
                </h3>

                <span className="mt-5 block h-px w-32 origin-left bg-[#C9A55A]/70 transition-transform duration-500 group-hover:scale-x-[1.35]" />

                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/75 md:text-base">
                  {especialidade.descricao}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Especialidades;
