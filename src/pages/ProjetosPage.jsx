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

      <GaleriaProjetos categoriaAtiva={categoriaAtiva} />

      <CtaProjetos />
    </main>
  );
};

export default ProjetosPage;
