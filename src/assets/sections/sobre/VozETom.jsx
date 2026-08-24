import { motion } from "framer-motion";

const caracteristicas = [
  {
    numero: "01",
    titulo: "Estratégica",
    descricao:
      "Autoridade técnica e soluções construídas a partir de diagnóstico.",
  },
  {
    numero: "02",
    titulo: "Precisa",
    descricao: "Clareza sem excessos. Cada palavra carrega intenção.",
  },
  {
    numero: "03",
    titulo: "Refinada",
    descricao: "Sofisticação que não intimida. Cuidado estético em tudo.",
  },
  {
    numero: "04",
    titulo: "Humana",
    descricao:
      "Escuta ativa. Toda empresa e todo espaço são feitos de pessoas.",
  },
  {
    numero: "05",
    titulo: "Global",
    descricao:
      "Repertório internacional e capacidade de dialogar com diferentes culturas.",
  },
  {
    numero: "06",
    titulo: "Confiante",
    descricao: "Autoridade sem arrogância e segurança em cada decisão.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const VozETom = () => {
  return (
    <section className="overflow-hidden bg-[#783923] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#C9A55A] md:text-xs">
            04 · Voz & tom
          </span>

          <h2 className="mt-7 max-w-2xl text-4xl font-light italic leading-tight text-[#E9CDA9] sm:text-5xl lg:text-[60px]">
            Personalidade da marca em seis{" "}
            <span className="text-[#C9A55A]">palavras.</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {caracteristicas.map((item) => (
            <motion.article
              key={item.numero}
              variants={itemVariants}
              className="border-b border-[#E9CDA9]/20 px-0 py-8 sm:px-7 lg:border-r lg:px-8"
            >
              <span className="text-[10px] text-[#C9A55A]">{item.numero}</span>

              <h3 className="mt-4 text-3xl font-light italic text-[#E9CDA9]">
                {item.titulo}
              </h3>

              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/65">
                {item.descricao}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VozETom;
