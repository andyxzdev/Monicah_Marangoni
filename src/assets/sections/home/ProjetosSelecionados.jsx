import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projetos from "../../../data/projetos";

const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionSpan = motion.span;
const MotionH2 = motion.h2;

const projetosSelecionados = [
  projetos[0],
  projetos[12],
  projetos[15],
  projetos[4],
  projetos[13],
  projetos[17],
];

const headerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const galleryVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const projectVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridClasses = [
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
];

const ProjectCard = ({ projeto, index }) => (
  <MotionDiv
    variants={projectVariants}
    className={`group relative min-h-[380px] overflow-hidden bg-[#5A291A] md:min-h-[420px] lg:min-h-0 ${gridClasses[index]}`}
  >
    <MotionImg
      src={projeto.imagem}
      alt={projeto.titulo}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover object-center"
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/85" />
    <div className="pointer-events-none absolute inset-4 border border-white/0 transition-colors duration-500 group-hover:border-white/40" />
    <Link
      to={`/projetos/${projeto.id}`}
      className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-5 p-6 text-white md:p-8"
      aria-label={`Conhecer o projeto ${projeto.titulo}`}
    >
      <div>
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#E2BE73]">
          {projeto.categoriaLabel}
        </span>
        <h3 className="mt-2 text-3xl font-light italic leading-tight md:text-4xl">
          {projeto.titulo}
        </h3>
      </div>
    </Link>
  </MotionDiv>
);

const ProjetosSelecionados = () => (
  <section id="projetos" className="overflow-hidden bg-[#FAF9F7] py-20 md:py-28">
    <MotionDiv
      className="mx-auto max-w-5xl px-5 text-center sm:px-8"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <MotionSpan
        variants={headerItemVariants}
        className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8A4B3A] md:text-xs"
      >
        05 · Projetos selecionados
      </MotionSpan>
      <MotionH2
        variants={headerItemVariants}
        className="mt-7 text-4xl font-light italic leading-[1.05] tracking-[-0.025em] text-[#733522] sm:text-5xl lg:text-[68px]"
      >
        Cada projeto é um diagnóstico antes de ser uma obra
      </MotionH2>
      <MotionDiv variants={headerItemVariants}>
        <Link
          to="/projetos"
          className="group mt-8 inline-flex items-center gap-4 border-b border-[#8A4B3A] pb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#8A4B3A] transition-colors duration-300 hover:border-[#C9A55A] hover:text-[#C9A55A]"
        >
          Ver todos
          <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </MotionDiv>
    </MotionDiv>
    <MotionDiv
      className="mx-auto mt-16 grid max-w-[1500px] grid-cols-1 gap-3 bg-[#F4EEE8] p-3 md:grid-cols-2 lg:h-[1280px] lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-4"
      variants={galleryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {projetosSelecionados.map((projeto, index) => (
        <ProjectCard key={projeto.id} projeto={projeto} index={index} />
      ))}
    </MotionDiv>
  </section>
);

export default ProjetosSelecionados;
