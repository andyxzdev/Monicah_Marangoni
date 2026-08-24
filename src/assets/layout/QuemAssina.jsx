import { motion } from "framer-motion";

import profissionalImage from "../../assets/images/arts/monicah.webp";

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

const QuemAssina = () => {
  return (
    <section
      id="quem-assina"
      className="overflow-hidden bg-[#FAF9F7] px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
        {/* Imagem */}
        <motion.div
          className="relative min-h-[520px] overflow-hidden bg-[#E8E4DF] sm:min-h-[650px] lg:min-h-[700px]"
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
            amount: 0.05,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src={profissionalImage}
            alt="Arquiteta responsável pelo escritório"
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
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          className="flex flex-col items-start lg:pr-6"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8A4B3A] md:text-xs"
          >
            01 · Quem assina
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-8 max-w-4xl text-4xl font-light italic leading-[1.05] tracking-[-0.025em] text-[#733522] sm:text-5xl lg:text-[62px]"
          >
            Um escritório especializado em{" "}
            <span className="text-[#C9A55A]">arquitetura estratégica</span> para
            empresas, clínicas e residências
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-3xl space-y-5 text-base font-light leading-relaxed text-[#56504D] md:text-[17px]"
          >
            <p>
              Desenvolvemos projetos personalizados que unem arquitetura,
              interiores e neuroarquitetura para criar ambientes mais
              funcionais, produtivos e alinhados à identidade de cada cliente.
            </p>

            <p>
              Ao invés de focar na trajetória individual, apresentamos a
              experiência construída ao longo de mais de duas décadas de
              atuação.
            </p>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="#escritorio"
            className="group mt-10 inline-flex items-center gap-5 border-b border-[#8A4B3A] pb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#8A4B3A] transition-colors duration-300 hover:border-[#C9A55A] hover:text-[#C9A55A] md:text-sm"
            whileHover={{
              x: 5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            Conheça nosso escritório
            <motion.span
              aria-hidden="true"
              className="text-xl font-light"
              whileHover={{
                x: 5,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuemAssina;
