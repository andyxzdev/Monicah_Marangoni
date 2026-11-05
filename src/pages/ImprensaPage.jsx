import ImprensaHero from "../assets/sections/imprensa/ImprensaHero";
import Publicacoes from "../assets/sections/imprensa/Publicacoes";
import PressKit from "../assets/sections/imprensa/PressKit";
import Premiacoes from "../assets/sections/imprensa/Premiacoes";

const ImprensaPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <ImprensaHero />
      <Publicacoes />
      <Premiacoes />
      <PressKit />
    </main>
  );
};

export default ImprensaPage;
