import { AnimatePresence, motion } from "framer-motion";
import projetos from "../../../data/projetos";

const MotionDiv = motion.div;
const MotionArticle = motion.article;
const MotionImg = motion.img;

const tamanhoClasses = {
  destaque: "md:col-span-2",
  alto: "",
  normal: "",
};

const alturaClasse = "h-[420px] sm:h-[520px] lg:h-[650px]";

const GaleriaProjetos = ({ categoriaAtiva }) => {
  const projetosFiltrados =
    categoriaAtiva === "RETROFIT"
      ? [
          ...projetos.filter((projeto) => projeto.subcategoria === "RETROFIT"),
          ...projetos.flatMap((projeto) =>
            projeto.subprojetos
              .filter((subprojeto) => subprojeto.subcategoria === "RETROFIT")
              .map((subprojeto) => ({
                ...subprojeto,
                id: `${projeto.id}-${subprojeto.id}`,
                href: `/projetos/${projeto.id}#${subprojeto.id}`,
                categoriaLabel: projeto.categoriaLabel,
                tamanho: "normal",
              })),
          ),
        ]
      : categoriaAtiva === "TODOS"
        ? [...projetos]
        : projetos.filter((projeto) => projeto.categoria === categoriaAtiva);

  return (
    <section className="overflow-hidden bg-[#FAF4EE] px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
      <MotionDiv
        layout
        className="mx-auto grid max-w-[1400px] gap-x-7 gap-y-12 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {projetosFiltrados.map((projeto, index) => (
            <MotionArticle
              layout
              key={projeto.id}
              className={`${tamanhoClasses[projeto.tamanho]} ${projeto.id === "monster" ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
                layout: { duration: 0.55 },
              }}
            >
              <a
                href={projeto.href ?? `/projetos/${projeto.id}`}
                className="group block"
                aria-label={`Conhecer o projeto ${projeto.titulo}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#DED3C8] ${projeto.id === "monster" ? "h-[500px] sm:h-[640px] lg:h-[780px]" : alturaClasse}`}
                >
                  <MotionImg
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-5 top-5 z-10 bg-[#FAF4EE] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#733522]">
                    {categoriaAtiva === "RETROFIT"
                      ? "Retrofit"
                      : projeto.categoriaLabel}
                  </span>
                  <div className="pointer-events-none absolute inset-5 border border-white/0 transition-colors duration-500 group-hover:border-white/45" />
                </div>
                <div className="mt-4 h-[4.5rem]">
                  <h2 className={`${projeto.id === "monster" ? "text-4xl sm:text-5xl" : "text-3xl"} font-light italic leading-tight text-[#733522]`}>
                    {projeto.titulo}
                  </h2>
                </div>
              </a>
            </MotionArticle>
          ))}
        </AnimatePresence>
      </MotionDiv>
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
