import { useState } from "react";

import ProjetosHero from "../assets/sections/projetos/ProjetosHero";
import GaleriaProjetos from "../assets/sections/projetos/GaleriaProjetos";
import CtaProjetos from "../assets/sections/projetos/CtaProjetos";

const ProjetosPage = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("TODOS");

  return (
    <main className="w-full overflow-x-hidden">
      <ProjetosHero
        categoriaAtiva={categoriaAtiva}
        onCategoriaChange={setCategoriaAtiva}
      />

      {categoriaAtiva === "RETROFIT" && (
        <section className="bg-[#FAF4EE] px-5 pb-12 sm:px-8 md:pb-16 lg:px-12">
          <div className="mx-auto max-w-[1400px] border-t border-[#733522]/15 pt-10 md:pt-14">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A604E]">
              Corporativo · Retrofit
            </span>
            <h2 className="mt-4 text-3xl font-light italic text-[#733522] sm:text-4xl">
              O que é retrofit?
            </h2>
            <div className="mt-5 max-w-4xl space-y-4 text-base font-light leading-relaxed text-[#625A56] md:text-lg">
              <p>
                Retrofit é a atualização de um espaço existente que preserva a
                arquitetura ou a base estrutural que ainda tem valor e potencial.
                Em projetos corporativos, essa intervenção adapta o ambiente às
                necessidades atuais da empresa sem descartar tudo o que já foi
                construído.
              </p>
              <p>
                A renovação pode combinar novos materiais e acabamentos, revisão
                das instalações, adequações às normas de segurança e acessibilidade
                e integração de tecnologias atuais. Layout, iluminação,
                climatização, infraestrutura e comunicação visual são pensados em
                conjunto para melhorar o uso diário, o conforto e a identidade do
                espaço.
              </p>
              <p>
                Assim, cada retrofit equilibra o que deve ser preservado com o que
                precisa evoluir. O resultado é um ambiente corporativo mais seguro,
                funcional e preparado para novas formas de trabalho, mantendo a
                continuidade da estrutura existente.
              </p>
            </div>
          </div>
        </section>
      )}

      <GaleriaProjetos categoriaAtiva={categoriaAtiva} />

      <CtaProjetos />
    </main>
  );
};

export default ProjetosPage;
