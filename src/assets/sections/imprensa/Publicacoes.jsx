import { motion } from "framer-motion";
import designWeek from "../../meterias/DW - DESING WEEK.docx?url";
import officeConnection from "../../meterias/OfficeConnection01.mp4";
import materiaVideo from "../../meterias/2.mp4";

const MotionArticle = motion.article;

const materiais = [
  {
    tipo: "Mostra Inspire Mais · Design Week SP",
    titulo: "Projeto selecionado para a Semana de Design",
    descricao:
      "O projeto da Mostra Inspire Mais foi selecionado para participar da Design Week SP.",
    arquivo: designWeek,
    formato: "Documento",
  },
  {
    tipo: "Vídeo enviado",
    titulo: "Office Connection",
    arquivo: officeConnection,
    formato: "Vídeo",
  },
  {
    tipo: "Vídeo enviado",
    titulo: "Matéria em vídeo",
    arquivo: materiaVideo,
    formato: "Vídeo",
  },
];

const videos = materiais.filter((material) => material.formato === "Vídeo");
const documento = materiais.find((material) => material.formato === "Documento");

const Publicacoes = () => (
  <section className="bg-[#FAF4EE] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <div className="grid items-stretch gap-12 md:grid-cols-2">
        {videos.map((material, index) => (
          <MotionArticle
            key={material.titulo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="flex h-full flex-col border-b border-[#733522]/15 pb-8"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9A604E]">
              {material.tipo}
            </span>
            <h2 className="mt-6 text-3xl font-light italic leading-tight text-[#543025] md:text-4xl">
              {material.titulo}
            </h2>
            <video
              className="mt-7 aspect-video w-full object-cover"
              controls
              preload="metadata"
              src={material.arquivo}
              aria-label={material.titulo}
            />
          </MotionArticle>
        ))}
      </div>

      <MotionArticle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mt-14 flex flex-col gap-8 border-t border-[#733522]/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9A604E]">
            {documento.tipo}
          </span>
          <h2 className="mt-4 text-2xl font-light italic leading-tight text-[#543025] md:text-3xl">
            {documento.titulo}
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-[#625A56] md:text-base">
            {documento.descricao}
          </p>
        </div>
        <a
          href={documento.arquivo}
          download
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 bg-[#733522] px-7 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#9A604E]"
        >
          Abrir documento
          <span aria-hidden="true" className="text-base">↓</span>
        </a>
      </MotionArticle>
    </div>
  </section>
);

export default Publicacoes;
