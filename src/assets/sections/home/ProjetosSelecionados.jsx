import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import projeto1 from "../../images/projetos/1.jpg";
import projeto2 from "../../images/projetos/2.jpg";
import projeto3 from "../../images/projetos/3.jpg";
import projeto4 from "../../images/projetos/4.jpg";
import projeto5 from "../../images/projetos/1.jpg";
import projeto6 from "../../images/projetos/2.jpg";
import projeto7 from "../../images/projetos/3.jpg";
import projeto8 from "../../images/projetos/4.jpg";

const projetos = [
  {
    id: 1,
    imagem: projeto1,
    categoria: "Arquitetura corporativa",
    titulo: "Casa Morumbi",
    ano: "2023",
    tamanho: "large",
  },
  {
    id: 2,
    imagem: projeto2,
    categoria: "Corporativo",
    titulo: "Ginfor",
    ano: "2022",
    tamanho: "normal",
  },
  {
    id: 3,
    imagem: projeto3,
    categoria: "Arquitetura corporativa",
    titulo: "Delta BC · Interiores",
    ano: "2024",
    tamanho: "normal",
  },
  {
    id: 4,
    imagem: projeto4,
    categoria: "Residencial",
    titulo: "Casa Horizonte",
    ano: "2022",
    tamanho: "wide",
  },
  {
    id: 5,
    imagem: projeto5,
    categoria: "Arquitetura comercial",
    titulo: "Espaço Essenza",
    ano: "2024",
    tamanho: "wide",
  },
  {
    id: 6,
    imagem: projeto6,
    categoria: "Arquitetura residencial",
    titulo: "Residência Aurora",
    ano: "2023",
    tamanho: "large",
  },
  {
    id: 7,
    imagem: projeto7,
    categoria: "Interiores corporativos",
    titulo: "Escritório Central",
    ano: "2024",
    tamanho: "normal",
  },
  {
    id: 8,
    imagem: projeto8,
    categoria: "Arquitetura comercial",
    titulo: "Studio Concept",
    ano: "2023",
    tamanho: "normal",
  },
];

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
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

const galleryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const MotionLink = motion.create(Link);

const ProjectCard = ({ projeto }) => {
  const gridClasses = {
    large: "lg:col-span-1 lg:row-span-2",
    normal: "lg:col-span-1 lg:row-span-1",
    wide: "lg:col-span-2 lg:row-span-1",
  };

  return (
    <MotionLink
      to={`/projetos/${projeto.id}`}
      variants={projectVariants}
      className={`group relative min-h-[380px] overflow-hidden bg-[#5A291A] md:min-h-[420px] lg:min-h-0 ${
        gridClasses[projeto.tamanho]
      }`}
    >
      <motion.img
        src={projeto.imagem}
        alt={projeto.titulo}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/85" />

      <div className="pointer-events-none absolute inset-4 border border-white/0 transition-colors duration-500 group-hover:border-white/40" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-5 p-6 text-white md:p-8">
        <div>
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#E2BE73]">
            {projeto.categoria}
          </span>

          <h3 className="mt-2 text-3xl font-light italic leading-tight md:text-4xl">
            {projeto.titulo}
          </h3>
        </div>

        <span className="shrink-0 text-xs font-light text-white/75">
          {projeto.ano}
        </span>
      </div>
    </MotionLink>
  );
};

const ProjetosSelecionados = () => {
  return (
    <section
      id="projetos"
      className="overflow-hidden bg-[#FAF9F7] py-20 md:py-28"
    >
      <motion.div
        className="mx-auto max-w-5xl px-5 text-center sm:px-8"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <motion.span
          variants={headerItemVariants}
          className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8A4B3A] md:text-xs"
        >
          05 · Projetos selecionados
        </motion.span>

        <motion.h2
          variants={headerItemVariants}
          className="mt-7 text-4xl font-light italic leading-[1.05] tracking-[-0.025em] text-[#733522] sm:text-5xl lg:text-[68px]"
        >
          Cada projeto é um diagnóstico antes de ser uma obra
        </motion.h2>

        <MotionLink
          variants={headerItemVariants}
          to="/projetos"
          className="group mt-8 inline-flex items-center gap-4 border-b border-[#8A4B3A] pb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#8A4B3A] transition-colors duration-300 hover:border-[#C9A55A] hover:text-[#C9A55A]"
        >
          Ver todos
          <span
            aria-hidden="true"
            className="text-lg transition-transform duration-300 group-hover:translate-x-2"
          >
            →
          </span>
        </MotionLink>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid max-w-[1500px] grid-cols-1 gap-3 bg-[#F4EEE8] p-3 md:grid-cols-2 lg:h-[1280px] lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-4"
        variants={galleryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.05,
        }}
      >
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjetosSelecionados;
