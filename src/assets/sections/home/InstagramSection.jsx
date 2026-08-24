import { motion } from "framer-motion";

import instagram1 from "../../images/projetos/1.jpg";
import instagram2 from "../../images/projetos/2.jpg";
import instagram3 from "../../images/projetos/3.jpg";
import instagram4 from "../../images/projetos/4.jpg";
import instagram5 from "../../images/projetos/1.jpg";
import instagram6 from "../../images/projetos/2.jpg";
import instagram7 from "../../images/projetos/3.jpg";
import instagram8 from "../../images/projetos/4.jpg";

const InstagramIcon = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />

      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
};

const publicacoes = [
  {
    id: 1,
    imagem: instagram1,
    alt: "Projeto arquitetônico corporativo",
  },
  {
    id: 2,
    imagem: instagram2,
    alt: "Projeto de interiores",
  },
  {
    id: 3,
    imagem: instagram3,
    alt: "Projeto comercial",
  },
  {
    id: 4,
    imagem: instagram4,
    alt: "Projeto residencial",
  },
  {
    id: 5,
    imagem: instagram5,
    alt: "Detalhes de arquitetura",
  },
  {
    id: 6,
    imagem: instagram6,
    alt: "Identidade visual em ambiente comercial",
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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const imageVariants = {
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

const InstagramSection = () => {
  const instagramUrl = "https://www.instagram.com/monicahmarangoni_arquiteta";

  return (
    <section
      id="instagram"
      className="overflow-hidden bg-[#F8F1EA] py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho */}
        <motion.div
          className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <div>
            <motion.span
              variants={headerItemVariants}
              className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#A06A59] md:text-xs"
            >
              06 · Instagram
            </motion.span>

            <motion.h2
              variants={headerItemVariants}
              className="mt-6 break-words text-3xl font-light italic leading-tight tracking-[-0.02em] text-[#32150F] sm:text-4xl md:text-5xl"
            >
              @monicahmarangoni_arquiteta
            </motion.h2>

            <motion.p
              variants={headerItemVariants}
              className="mt-4 max-w-xl text-base font-light leading-relaxed text-[#625A56]"
            >
              Bastidores de obra, detalhes de marcenaria e os projetos que estão
              tomando forma.
            </motion.p>
          </div>

          <motion.a
            variants={headerItemVariants}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir perfil no Instagram"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#9A604E] bg-transparent px-7 text-xs font-medium uppercase tracking-[0.3em] text-[#9A604E] transition-colors duration-300 hover:bg-[#9A604E] hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            Seguir
          </motion.a>
        </motion.div>
      </div>

      {/* Galeria */}
      <motion.div
        className="mx-auto mt-14 grid max-w-[1600px] grid-cols-2 gap-3 px-3 sm:px-5 md:grid-cols-3 lg:grid-cols-6"
        variants={galleryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
      >
        {publicacoes.map((publicacao) => (
          <motion.a
            key={publicacao.id}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={imageVariants}
            className="group relative aspect-[4/5] overflow-hidden bg-[#DED3C8]"
            aria-label="Abrir publicação no Instagram"
          >
            <motion.img
              src={publicacao.imagem}
              alt={publicacao.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Camada do hover */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#32150F]/0 transition-colors duration-500 group-hover:bg-[#32150F]/45">
              <InstagramIcon className="h-8 w-8 translate-y-3 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default InstagramSection;
