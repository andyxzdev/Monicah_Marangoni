// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import monicahImage from "../../images/arts/monicah.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
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

const SobreHero = () => {
  return (
    <section className="overflow-hidden bg-[#FAF4EE] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={textVariants}
            className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#9A604E] md:text-xs"
          >
            Conheça o escritório
          </motion.span>

          <motion.h1
            variants={textVariants}
            className="mt-7 max-w-5xl text-5xl font-light italic leading-[1.02] tracking-[-0.035em] text-[#733522] sm:text-6xl lg:text-[76px]"
          >
            Arquitetura <span className="text-[#C9A55A]">corporativa</span> com
            mais de 20 anos de bagagem.
          </motion.h1>
        </motion.div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Imagem */}
          <motion.div
            className="relative min-h-[520px] overflow-hidden bg-[#E4D8CE] sm:min-h-[650px] lg:min-h-[760px]"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src={monicahImage}
              alt="Monicah Marangoni, arquiteta"
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{
                scale: 1.1,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-[#733522]"
              initial={{
                x: "0%",
              }}
              whileInView={{
                x: "100%",
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          {/* Apresentação */}
          <motion.div
            className="flex flex-col lg:pt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <motion.p
              variants={textVariants}
              className="font-serif text-2xl font-light italic leading-relaxed text-[#733522] md:text-3xl"
            >
              “Um espaço bem projetado é uma ferramenta poderosa de
              transformação.”
            </motion.p>

            <motion.div
              variants={textVariants}
              className="mt-8 space-y-6 text-base font-light leading-8 text-[#625A56] md:text-[17px]"
            >
              <p>
                Sou arquiteta especializada em projetos corporativos de alta
                performance, com foco em ambientes que impulsionam
                produtividade, bem-estar e identidade empresarial.
              </p>

              <p>
                Atuo com escuta estratégica e personalizada, entendendo as
                prioridades de cada cliente para entregar soluções
                arquitetônicas funcionais, inteligentes e alinhadas aos
                objetivos do negócio.
              </p>

              <p>
                Cada projeto nasce da integração entre arquitetura estratégica,
                neuroarquitetura e princípios de bem-estar, criando espaços que
                geram resultados e melhoram a experiência das pessoas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobreHero;
