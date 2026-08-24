import HeroScroll from "../assets/sections/home/HeroScroll";
import CarrosselLogos from "../assets/sections/home/CarrosselLogos";
import QuemAssina from "../assets/sections/home/QuemAssina";
import Manifesto from "../assets/sections/home/Manifesto";
import Processo from "../assets/sections/home/Processo";
import Especialidades from "../assets/sections/home/Especialidades";
import ProjetosSelecionados from "../assets/sections/home/ProjetosSelecionados";
import Numeros from "../assets/sections/home/Numeros";
import InstagramSection from "../assets/sections/home/InstagramSection";
import Feedbacks from "../assets/sections/home/Feedbacks";

const HomePage = () => {
  return (
    <>
      <main className="w-full overflow-x-hidden">
        <HeroScroll />
        <CarrosselLogos />
        <QuemAssina />
        <Manifesto />
        <Processo />
        <Especialidades />
        <ProjetosSelecionados />
        <Numeros />
        <InstagramSection />
        <Feedbacks />
      </main>
    </>
  );
};

export default HomePage;
