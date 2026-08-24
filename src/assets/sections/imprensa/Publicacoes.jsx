import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const publicacoes = [
  {
    id: 1,
    veiculo: "Casa Vogue",
    data: "Mai · 2025",
    titulo: "Arquitetura corporativa que escuta antes de projetar",
    descricao:
      "Reportagem sobre o método consultivo aplicado em escritórios de tecnologia e startups em São Paulo.",
    link: "#",
  },
  {
    id: 2,
    veiculo: "Arquitetura & Construção",
    data: "Mar · 2025",
    titulo: "Retrofit do edifício Bella Paulista",
    descricao:
      "Estudo de caso da revitalização corporativa que une identidade, funcionalidade e linguagem contemporânea.",
    link: "#",
  },
  {
    id: 3,
    veiculo: "Estadão Imóveis",
    data: "Nov · 2024",
    titulo: "Como o espaço impacta a cultura organizacional",
    descricao:
      "Entrevista com Monicah Marangoni sobre fluxos, ergonomia e a relação entre layout, comportamento e performance.",
    link: "#",
  },
  {
    id: 4,
    veiculo: "Glamurama",
    data: "Ago · 2024",
    titulo: "Casa de Igaratá · refúgio assinado",
    descricao:
      "Visita pela residência de campo que equilibra natureza, materialidade, conforto e qualidade de vida.",
    link: "#",
  },
];

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

const Publicacoes = () => {
  const handleTemporaryLink = (event, link) => {
    if (link === "#") {
      event.preventDefault();
    }
  };

  return (
    <section className="bg-[#FAF4EE] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <MotionDiv
        className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {publicacoes.map((publicacao, index) => (
          <MotionArticle
            key={publicacao.id}
            variants={itemVariants}
            className={[
              "group border-b border-[#733522]/15 py-10",
              "md:min-h-[270px] md:px-10",
              index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0",
            ].join(" ")}
          >
            <a
              href={publicacao.link}
              onClick={(event) => handleTemporaryLink(event, publicacao.link)}
              className="flex h-full flex-col"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9A604E]">
                  {publicacao.veiculo}
                </span>

                <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.25em] text-[#625A56]/55">
                  {publicacao.data}
                </span>
              </div>

              <h2 className="mt-8 max-w-xl text-3xl font-light italic leading-tight text-[#543025] transition-colors duration-300 group-hover:text-[#C9A55A] md:text-4xl">
                {publicacao.titulo}
              </h2>

              <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-[#625A56] md:text-base">
                {publicacao.descricao}
              </p>

              <span className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#9A604E]/0 pb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#9A604E] opacity-0 transition-all duration-300 group-hover:border-[#9A604E] group-hover:opacity-100">
                Ler publicação
                <span aria-hidden="true">→</span>
              </span>
            </a>
          </MotionArticle>
        ))}
      </MotionDiv>
    </section>
  );
};

export default Publicacoes;
