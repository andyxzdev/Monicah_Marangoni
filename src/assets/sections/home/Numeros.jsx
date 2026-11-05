import { useEffect, useRef, useState } from "react";
// motion is used through JSX member tags, which ESLint does not count as references.
// eslint-disable-next-line no-unused-vars
import { animate, motion, useInView } from "framer-motion";

const indicadores = [
  {
    id: 1,
    tipo: "numero",
    valor: 25,
    sufixo: "+",
    descricao: "Anos de mercado",
  },
  {
    id: 2,
    tipo: "numero",
    valor: 200,
    sufixo: "+",
    descricao: "Projetos entregues",
  },
  {
    id: 3,
    tipo: "numero",
    valor: 3,
    sufixo: "",
    descricao: "Frentes - Corporativo | Comercial | Residencial",
  },
  {
    id: 4,
    tipo: "texto",
    texto: "SP",
    descricao: "Sede em São Paulo - atuação nacional",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const Contador = ({ valor, sufixo = "" }) => {
  const contadorRef = useRef(null);
  const estaVisivel = useInView(contadorRef, {
    once: true,
    amount: 0.6,
  });

  const [numeroAtual, setNumeroAtual] = useState(0);

  useEffect(() => {
    if (!estaVisivel) return;

    const animation = animate(0, valor, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],

      onUpdate: (numero) => {
        setNumeroAtual(Math.round(numero));
      },
    });

    return () => animation.stop();
  }, [estaVisivel, valor]);

  return (
    <span ref={contadorRef}>
      {numeroAtual}
      {sufixo}
    </span>
  );
};

const Numeros = () => {
  return (
    <section
      id="numeros"
      className="overflow-hidden bg-[#461C0E] px-5 py-20 text-white sm:px-8 md:py-24 lg:px-12"
    >
      <motion.div
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {indicadores.map((indicador) => (
          <motion.article
            key={indicador.id}
            variants={itemVariants}
            className="flex min-h-40 flex-col items-center justify-center"
          >
            <h3 className="text-7xl font-light italic leading-none tracking-[-0.04em] text-[#E9CDA9] md:text-8xl">
              {indicador.tipo === "numero" ? (
                <Contador valor={indicador.valor} sufixo={indicador.sufixo} />
              ) : (
                indicador.texto
              )}
            </h3>

            <p className="mt-7 max-w-[280px] text-xs font-light uppercase leading-relaxed tracking-wide text-white/65 md:text-sm">
              {indicador.descricao}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Numeros;
