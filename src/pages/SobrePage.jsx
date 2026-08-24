import SobreHero from "../assets/sections/sobre/SobreHero";
import VozETom from "../assets/sections/sobre/VozETom";
import Atuacao from "../assets/sections/sobre/Atuacao";
import Numeros from "../assets/sections/home/Numeros";
import CtaSobre from "../assets/sections/sobre/CtaSobre";

const SobrePage = () => {
  return (
    <>
      <main className="w-full overflow-x-hidden">
        <SobreHero />
        <VozETom />
        <Atuacao />
        <Numeros />
        <CtaSobre />
      </main>
    </>
  );
};

export default SobrePage;
