import ContatoHero from "../assets/sections/contato/ContatoHero";
import ContatoInfo from "../assets/sections/contato/ContatoInfo";
import ContatoForm from "../assets/sections/contato/ContatoForm";

const ContatoPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <ContatoHero />

      <section className="bg-[#FAF4EE] px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <ContatoInfo />

          <ContatoForm />
        </div>
      </section>
    </main>
  );
};

export default ContatoPage;
