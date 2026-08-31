import { Link, Navigate, useParams } from "react-router-dom";

import { getProjetoById } from "../data/projetos";

const ProjetoDetalhePage = () => {
  const { id } = useParams();
  const projeto = getProjetoById(id);

  if (!projeto) {
    return <Navigate to="/projetos" replace />;
  }

  return (
    <main className="w-full overflow-hidden bg-[#FAF4EE]">
      <section className="px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/projetos"
            className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#8A4B3A] transition-colors hover:text-[#C9A55A]"
          >
            Voltar para projetos
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A604E]">
                {projeto.categoria}
              </span>
              <h1 className="mt-5 max-w-4xl text-5xl font-light italic leading-[0.95] tracking-[-0.025em] text-[#733522] sm:text-7xl lg:text-[96px]">
                {projeto.titulo}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-[#733522]/20 pt-5 lg:mb-2">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9A604E]">
                  Local
                </span>
                <p className="mt-2 text-sm font-light text-[#625A56]">
                  {projeto.local}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9A604E]">
                  Ano
                </span>
                <p className="mt-2 text-sm font-light text-[#625A56]">
                  {projeto.ano}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 h-[58vh] min-h-[420px] overflow-hidden bg-[#DED3C8] md:mt-16 lg:h-[680px]">
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-5 border border-white/45" />
          </div>
          <p className="mt-8 text-lg font-light text-[#625A56]">
            {projeto.descricao}
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProjetoDetalhePage;
