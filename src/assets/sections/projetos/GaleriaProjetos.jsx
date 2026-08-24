import { AnimatePresence, motion } from "framer-motion";

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
    categoria: "CORPORATIVO",
    categoriaLabel: "Arquitetura corporativa",
    titulo: "Alpargatas · Retrofit",
    local: "São Paulo · SP",
    ano: "2024",
    tamanho: "destaque",
  },
  {
    id: 2,
    imagem: projeto2,
    categoria: "RESIDENCIAL",
    categoriaLabel: "Arquitetura residencial",
    titulo: "Casa Morumbi",
    local: "São Paulo · SP",
    ano: "2023",
    tamanho: "alto",
  },
  {
    id: 3,
    imagem: projeto3,
    categoria: "CORPORATIVO",
    categoriaLabel: "Arquitetura corporativa",
    titulo: "Ginfor",
    local: "São Paulo · SP",
    ano: "2022",
    tamanho: "normal",
  },
  {
    id: 4,
    imagem: projeto4,
    categoria: "CORPORATIVO",
    categoriaLabel: "Interiores corporativos",
    titulo: "Delta BC · Interiores",
    local: "São Paulo · SP",
    ano: "2024",
    tamanho: "normal",
  },
  {
    id: 5,
    imagem: projeto5,
    categoria: "RESIDENCIAL",
    categoriaLabel: "Arquitetura residencial",
    titulo: "Casa de Campo",
    local: "São Paulo · SP",
    ano: "2022",
    tamanho: "alto",
  },
  {
    id: 6,
    imagem: projeto6,
    categoria: "COMERCIAL",
    categoriaLabel: "Arquitetura comercial",
    titulo: "Loja Zig Mundi",
    local: "São Paulo · SP",
    ano: "2021",
    tamanho: "destaque",
  },
  {
    id: 7,
    imagem: projeto7,
    categoria: "CORPORATIVO",
    categoriaLabel: "Interiores corporativos",
    titulo: "3º Cartório",
    local: "São Paulo · SP",
    ano: "2023",
    tamanho: "normal",
  },
  {
    id: 8,
    imagem: projeto8,
    categoria: "RESIDENCIAL",
    categoriaLabel: "Arquitetura residencial",
    titulo: "Residência Contemporânea",
    local: "São Paulo · SP",
    ano: "2024",
    tamanho: "alto",
  },
];

const tamanhoClasses = {
  destaque: "md:col-span-2",
  alto: "",
  normal: "",
};

const alturaClasses = {
  destaque: "h-[420px] sm:h-[520px] lg:h-[650px]",
  alto: "h-[480px] sm:h-[600px] lg:h-[720px]",
  normal: "h-[420px] sm:h-[500px] lg:h-[570px]",
};

const GaleriaProjetos = ({ categoriaAtiva }) => {
  const projetosFiltrados =
    categoriaAtiva === "TODOS"
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === categoriaAtiva);

  return (
    <section className="overflow-hidden bg-[#FAF4EE] px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
      <motion.div
        layout
        className="mx-auto grid max-w-[1400px] gap-x-7 gap-y-12 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {projetosFiltrados.map((projeto, index) => (
            <motion.article
              layout
              key={projeto.id}
              className={tamanhoClasses[projeto.tamanho]}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
                layout: {
                  duration: 0.55,
                },
              }}
            >
              <a
                href={`/projetos/${projeto.id}`}
                className="group block"
                aria-label={`Conhecer o projeto ${projeto.titulo}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#DED3C8] ${
                    alturaClasses[projeto.tamanho]
                  }`}
                >
                  <motion.img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute left-5 top-5 z-10 bg-[#FAF4EE] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#733522]">
                    {projeto.categoriaLabel}
                  </span>

                  <div className="pointer-events-none absolute inset-5 border border-white/0 transition-colors duration-500 group-hover:border-white/45" />
                </div>

                <div className="mt-4 flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-3xl font-light italic leading-tight text-[#733522]">
                      {projeto.titulo}
                    </h2>

                    <p className="mt-2 text-xs font-light uppercase tracking-[0.15em] text-[#625A56]/70">
                      {projeto.local}
                    </p>
                  </div>

                  <span className="shrink-0 pt-2 text-[10px] font-medium text-[#9A604E]">
                    {projeto.ano}
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {projetosFiltrados.length === 0 && (
        <div className="mx-auto max-w-[1400px] py-20 text-center">
          <p className="text-lg font-light text-[#625A56]">
            Nenhum projeto encontrado nesta categoria.
          </p>
        </div>
      )}
    </section>
  );
};

export default GaleriaProjetos;
