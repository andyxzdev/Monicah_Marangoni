import { motion } from "framer-motion";

const MotionSpan = motion.span;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionArticle = motion.article;

const feedbacks = [
  {
    nome: "Cintia · Shoebiz",
    projeto: "Shoebiz",
    texto: "Ai Monica, ficou lindo!!!! Parabéns!!!!! O escritório está fazendo um super sucesso com nossos fornecedores",
  },
  {
    nome: "Cliente · Indelta",
    projeto: "Indelta",
    texto: "Nosso projeto trouxe encantamento, bem estar e sucesso!!! Parabéns por este ano vida!!!!",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Feedbacks = () => (
  <section
    id="depoimentos"
    className="overflow-hidden bg-[#FAF9F7] py-20 md:py-28"
  >
    <MotionDiv
      className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <MotionSpan
        variants={itemVariants}
        className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9A604E] md:text-xs"
      >
        07 · Depoimentos
      </MotionSpan>
      <MotionH2
        variants={itemVariants}
        className="mt-6 max-w-4xl text-4xl font-light italic leading-tight tracking-[-0.025em] text-[#733522] sm:text-5xl lg:text-[64px]"
      >
        O que dizem nossos clientes
      </MotionH2>
      <MotionP
        variants={itemVariants}
        className="mt-5 max-w-2xl text-base font-light leading-relaxed text-[#625A56] md:text-[17px]"
      >
        Mensagens recebidas sobre projetos realizados pelo escritório.
      </MotionP>
    </MotionDiv>
    <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-1 gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
      {feedbacks.map((feedback, index) => (
        <MotionArticle
          key={feedback.nome}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#EFE7DF] p-7 md:min-h-[320px] md:p-9"
        >
          <span
            aria-hidden="true"
            className="absolute right-6 top-3 font-serif text-8xl font-light leading-none text-[#C9A55A]/25"
          >
            “
          </span>
          <p className="relative z-10 mt-8 text-base font-light leading-relaxed text-[#56504D] md:text-[17px]">
            “{feedback.texto}”
          </p>
          <div className="relative z-10 mt-9 border-t border-[#8A4B3A]/20 pt-5">
            <h3 className="text-2xl font-light italic text-[#733522]">
              {feedback.nome}
            </h3>
            <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#9A604E]">
              {feedback.projeto}
            </span>
          </div>
        </MotionArticle>
      ))}
    </div>
  </section>
);

export default Feedbacks;
