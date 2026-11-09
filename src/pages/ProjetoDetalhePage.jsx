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

          <div className="mt-10 grid gap-10 lg:grid-cols-1">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A604E]">
                {projeto.categoriaLabel}
              </span>
              <h1 className="mt-5 max-w-4xl text-5xl font-light italic leading-[0.95] tracking-[-0.025em] text-[#733522] sm:text-7xl lg:text-[96px]">
                {projeto.titulo}
              </h1>
              {projeto.informacoes.length > 0 && (
                <div className="mt-8 max-w-4xl space-y-7">
                  {projeto.informacoes.map((informacao, index) => (
                    <div key={`${informacao.titulo ?? "texto"}-${index}`}>
                      {informacao.titulo && (
                        <h2 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9A604E]">
                          {informacao.titulo}
                        </h2>
                      )}
                      <p className="mt-2 text-base font-light leading-relaxed text-[#625A56] sm:text-lg">
                        {informacao.texto}
                      </p>
                    </div>
                  ))}
                </div>
              )}
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

          {projeto.imagensAdicionais.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {projeto.imagensAdicionais.map((imagem, index) => (
                <div
                  key={imagem}
                  className="aspect-[4/3] overflow-hidden bg-[#DED3C8]"
                >
                  <img
                    src={imagem}
                    alt={`${projeto.titulo} - imagem ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          )}

          {projeto.subprojetos.length > 0 && (
            <section className="mt-20 border-t border-[#733522]/15 pt-12">
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A604E]">
                Projetos relacionados
              </span>
              <h2 className="mt-4 text-3xl font-light italic text-[#733522] sm:text-4xl">
                Subprojetos
              </h2>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                {projeto.subprojetos.map((subprojeto) => (
                  <article
                    key={subprojeto.id}
                    id={subprojeto.id}
                    className="scroll-mt-28 border-b border-[#733522]/15 pb-9"
                  >
                    {subprojeto.imagem && (
                      <img
                        src={subprojeto.imagem}
                        alt={subprojeto.titulo}
                        loading="lazy"
                        className="aspect-[4/3] w-full bg-[#DED3C8] object-cover object-center"
                      />
                    )}
                    <h3 className="mt-5 text-2xl font-light italic text-[#733522]">
                      {subprojeto.titulo}
                    </h3>

                    {subprojeto.informacoes?.map((informacao, index) => (
                      <div
                        key={`${subprojeto.id}-${informacao.titulo ?? "texto"}-${index}`}
                        className="mt-5"
                      >
                        {informacao.titulo && (
                          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9A604E]">
                            {informacao.titulo}
                          </span>
                        )}
                        <p className="mt-2 text-sm font-light leading-relaxed text-[#625A56] md:text-base">
                          {informacao.texto}
                        </p>
                      </div>
                    ))}

                    {subprojeto.imagensAdicionais?.length > 0 && (
                      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {subprojeto.imagensAdicionais.map((imagem, index) => (
                          <div
                            key={`${subprojeto.id}-${imagem}`}
                            className="aspect-[4/3] overflow-hidden bg-[#DED3C8]"
                          >
                            <img
                              src={imagem}
                              alt={`${subprojeto.titulo} · foto ${index + 1}`}
                              loading="lazy"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjetoDetalhePage;
