// Used through JSX member tags; ESLint does not count those as variable references.
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ContatoInfo = () => {
  return (
    <motion.aside
      className="flex flex-col gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        staggerChildren: 0.13,
      }}
    >
      <motion.div variants={itemVariants}>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]">
          Endereço
        </span>

        <address className="mt-5 not-italic">
          <p className="font-serif text-2xl font-light italic leading-relaxed text-[#733522]">
            Rua Alfredo Pujol, 545 · Cj 81
            <br />
            02017-010 · São Paulo · SP
          </p>
        </address>
      </motion.div>

      <motion.div variants={itemVariants}>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]">
          Telefone
        </span>

        <a
          href="tel:+551122833481"
          className="mt-5 block font-serif text-2xl font-light italic text-[#733522] transition-colors duration-300 hover:text-[#C9A55A]"
        >
          (11) 2283-3481
        </a>
      </motion.div>

      <motion.div variants={itemVariants}>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]">
          E-mail
        </span>

        <a
          href="mailto:contato@monicahmarangoni.com.br"
          className="mt-5 block break-all font-serif text-xl font-light italic text-[#733522] transition-colors duration-300 hover:text-[#C9A55A] sm:text-2xl"
        >
          contato@monicahmarangoni.com.br
        </a>
      </motion.div>

      <motion.div variants={itemVariants}>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A604E]">
          Social
        </span>

        <div className="mt-5 flex flex-col items-start gap-3 font-serif text-xl font-light italic text-[#733522]">
          <a
            href="https://www.instagram.com/monicahmarangoni_arquiteta"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[#C9A55A]"
          >
            Instagram · @monicahmarangoni_arquiteta
          </a>

          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="transition-colors duration-300 hover:text-[#C9A55A]"
          >
            LinkedIn · Monicah Marangoni
          </a>

          <a
            href="https://www.facebook.com/MonicahMarangoniArquitetura/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[#C9A55A]"
          >
            Facebook · Monicah Marangoni
          </a>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default ContatoInfo;
