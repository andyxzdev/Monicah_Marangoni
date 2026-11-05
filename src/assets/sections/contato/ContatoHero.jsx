// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

const ContatoHero = () => {
  return (
    <section className="bg-[#FAF4EE] px-5 pb-14 pt-20 sm:px-8 md:pb-20 md:pt-28 lg:px-12">
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
          Vamos conversar
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-7 max-w-5xl text-5xl font-light italic leading-[1.02] tracking-[-0.035em] text-[#733522] sm:text-6xl lg:text-[80px]"
        >
          Antes de projetar, eu <span className="text-[#C9A55A]">escuto.</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default ContatoHero;
