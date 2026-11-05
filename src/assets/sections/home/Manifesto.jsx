// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import manifestoImage from "../../images/arts/manifesto.webp";

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="overflow-hidden bg-[#FAF9F7] px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 xl:gap-20">
        {/* Conteúdo */}
        <motion.div
          className="flex flex-col items-start lg:pl-2"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8A4B3A] md:text-xs"
          >
            02 · Manifesto
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 max-w-3xl text-4xl font-light italic leading-[1.08] tracking-[-0.025em] text-[#733522] sm:text-5xl lg:text-[62px]"
          >
            Projetar é compreender comportamentos antes de desenhar espaços
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-3xl space-y-5 text-base font-light leading-relaxed text-[#56504D] md:text-[17px]"
          >
            <p>
              Cada ambiente influencia emoções, produtividade, relacionamento e
              percepção de valor.
            </p>

            <p>
              Por isso, nosso processo começa com um diagnóstico aprofundado que
              investiga cultura, objetivos, rotinas e necessidades antes de
              qualquer decisão de projeto.
            </p>
          </motion.div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className="relative min-h-[520px] overflow-hidden bg-[#E8E4DF] sm:min-h-[650px] lg:min-h-[700px]"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.05,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src={manifestoImage}
            alt="Projeto de arquitetura corporativa"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{
              scale: 1.12,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Camada que revela a imagem */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-[#733522]"
            initial={{
              x: "0%",
            }}
            whileInView={{
              x: "-100%",
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              duration: 1.1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
