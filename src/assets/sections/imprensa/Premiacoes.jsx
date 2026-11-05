import { motion } from "framer-motion";
import destaque2022 from "../../premiaçoes/11.png";
import destaque2023 from "../../premiaçoes/13.png";
import clubCasa2023 from "../../premiaçoes/16.png";

const MotionArticle = motion.article;

const premiacoes = [
  {
    imagem: destaque2022,
    titulo: "Destaques Club&Casa 2022",
    descricao: "Região Leste de São Paulo",
  },
  {
    imagem: destaque2023,
    titulo: "100+ Profissionais de Destaque 2023",
    descricao: "Regiões Sul e Oeste de São Paulo",
  },
  {
    imagem: clubCasa2023,
    titulo: "Profissional Destaque Club&Casa 2023",
    descricao: "Premiação Club&Casa",
  },
];

const Premiacoes = () => (
  <section className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#9A604E] md:text-xs">
        Reconhecimentos
      </span>
      <h2 className="mt-6 max-w-4xl text-4xl font-light italic leading-tight text-[#733522] sm:text-5xl lg:text-[64px]">
        Premiações
      </h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {premiacoes.map((premiacao, index) => (
          <MotionArticle
            key={premiacao.titulo}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <img
              src={premiacao.imagem}
              alt={premiacao.titulo}
              loading="lazy"
              className="aspect-square w-full object-contain object-center"
            />
            <h3 className="mt-5 text-xl font-light italic text-[#733522]">
              {premiacao.titulo}
            </h3>
            <p className="mt-2 text-xs font-light uppercase tracking-[0.15em] text-[#625A56]">
              {premiacao.descricao}
            </p>
          </MotionArticle>
        ))}
      </div>
    </div>
  </section>
);

export default Premiacoes;
