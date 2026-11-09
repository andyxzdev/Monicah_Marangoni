// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const categorias = [
  {
    label: "Todos",
    value: "TODOS",
  },
  {
    label: "Corporativo",
    value: "CORPORATIVO",
  },
  {
    label: "Retrofit",
    value: "RETROFIT",
  },
  {
    label: "Comercial",
    value: "COMERCIAL",
  },
  {
    label: "Residencial",
    value: "RESIDENCIAL",
  },
  {
    label: "Social",
    value: "SOCIAL",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
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

const ProjetosHero = ({ categoriaAtiva, onCategoriaChange }) => {
  return (
    <section className="bg-[#FAF4EE] px-5 pb-12 pt-16 sm:px-8 md:pb-16 md:pt-24 lg:px-12">
      <motion.div
        className="mx-auto max-w-[1400px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#9A604E] md:text-xs"
        >
          Portfólio · 2021 — 2026
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-6 max-w-4xl text-5xl font-light italic leading-[1.02] tracking-[-0.035em] text-[#733522] sm:text-6xl lg:text-[76px]"
        >
          Projetos que{" "}
          <span className="text-[#C9A55A]">impulsionam resultados.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-7 max-w-2xl text-base font-light leading-relaxed text-[#625A56] md:text-[17px]"
        >
          Cada projeto começa com um diagnóstico, transforma necessidades em
          estratégia e cria ambientes que fortalecem pessoas, marcas e negócios.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-wrap gap-3"
        >
          {categorias.map((categoria) => {
            const ativa = categoriaAtiva === categoria.value;

            return (
              <button
                key={categoria.value}
                type="button"
                onClick={() => onCategoriaChange(categoria.value)}
                className={`min-h-9 border px-5 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                  ativa
                    ? "border-[#733522] bg-[#733522] text-white"
                    : "border-[#733522]/25 bg-transparent text-[#733522] hover:border-[#733522] hover:bg-[#733522] hover:text-white"
                }`}
              >
                {categoria.label}
              </button>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjetosHero;
