import HeroScroll from "./assets/layout/HeroScroll";
import CarrosselLogos from "./assets/layout/CarrosselLogos";
import QuemAssina from "./assets/layout/QuemAssina";
import Manifesto from "./assets/layout/Manifesto";
import Processo from "./assets/layout/Processo";
import Especialidades from "./assets/layout/Especialidades";
import ProjetosSelecionados from "./assets/layout/ProjetosSelecionados";
import Numeros from "./assets/layout/Numeros";
import InstagramSection from "./assets/layout/InstagramSection";
import Feedbacks from "./assets/layout/Feedbacks";
import Footer from "./assets/layout/Footer";
import Header from "./assets/layout/Header";

function App() {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
}

export default App;
