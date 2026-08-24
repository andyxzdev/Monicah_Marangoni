import { motion } from "framer-motion";

const whatsappNumber = "5511999999999";

const mensagem = encodeURIComponent(
  "Olá! Gostaria de conversar sobre um projeto de arquitetura.",
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

const CtaSobre = () => {
  return (
    <section className="bg-[#FAF4EE] px-5 py-14 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"
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
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2 className="max-w-4xl text-3xl font-light italic text-[#733522] md:text-4xl">
          Estratégia e bem-estar em espaços que geram resultados.
        </h2>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center bg-[#733522] px-8 text-[10px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#C9A55A]"
        >
          Iniciar conversa
        </a>
      </motion.div>
    </section>
  );
};

export default CtaSobre;
