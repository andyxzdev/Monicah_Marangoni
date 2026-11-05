import airCharter from "../assets/projetos-atualizados/air-charter.jpg";
import beetech from "../assets/projetos-atualizados/beetech-remessa-online.jpg";
import bebemix from "../assets/projetos-atualizados/bebemix.jpg";
import clinovi1 from "../assets/projetos-atualizados/clinovi-1.jpg";
import clinovi3 from "../assets/projetos-atualizados/clinovi-3.jpg";
import delta from "../assets/projetos-atualizados/delta.jpg";
import febraban from "../assets/projetos-atualizados/febraban-cyber.jpeg";
import glanbia from "../assets/projetos-atualizados/glanbia.jpg";
import gympass1 from "../assets/projetos-atualizados/gympass-1.jpeg";
import gympass2 from "../assets/projetos-atualizados/gympass-2.jpeg";
import gi from "../assets/projetos-atualizados/gi-selecionadas.jpg";
import marcia from "../assets/projetos-atualizados/marcia-apto.jpg";
import marilia from "../assets/projetos-atualizados/marilia-juquehy.jpg";
import monster from "../assets/projetos-atualizados/monster.jpg";
import petit from "../assets/projetos-atualizados/petit-patisserie.jpg";
import quiosque from "../assets/projetos-atualizados/quiosque-igarata.jpg";
import shoebiz from "../assets/projetos-atualizados/shoebiz.jpg";
import zigMundi from "../assets/projetos-atualizados/zig-mundi-londrina.jpg";
import decorSocial from "../assets/projetos sociais/decor social/SolidRockBrasil_depois_DecorSocial_MathoFotografia_038.jpg";

const projetos = [
  ["air-charter", airCharter, "CORPORATIVO", "Air Charter"],
  ["beetech", beetech, "CORPORATIVO", "Beetech · Remessa Online"],
  ["clinovi-1", clinovi1, "CORPORATIVO", "Clinovi 1"],
  ["clinovi-3", clinovi3, "CORPORATIVO", "Clinovi 3"],
  ["delta", delta, "CORPORATIVO", "Delta"],
  ["febraban-cyber", febraban, "CORPORATIVO", "Febraban · Cyber"],
  ["gi", gi, "CORPORATIVO", "GI"],
  ["glanbia", glanbia, "CORPORATIVO", "Glanbia"],
  ["gympass-1", gympass1, "CORPORATIVO", "Gympass 1"],
  ["gympass-2", gympass2, "CORPORATIVO", "Gympass 2"],
  ["monster", monster, "CORPORATIVO", "Monster"],
  ["shoebiz", shoebiz, "CORPORATIVO", "Shoebiz"],
  ["marilia-juquehy", marilia, "RESIDENCIAL", "Marília · Juquehy"],
  ["marcia-apto", marcia, "RESIDENCIAL", "Márcia · Apartamento"],
  ["quiosque-igarata", quiosque, "RESIDENCIAL", "Quiosque Igaratá"],
  ["bebemix", bebemix, "COMERCIAL", "BebêMix"],
  ["petit-patisserie", petit, "COMERCIAL", "Petit Patisserie"],
  ["zig-mundi", zigMundi, "COMERCIAL", "Zig Mundi · Londrina"],
  ["decor-social", decorSocial, "SOCIAL", "Decor Social · Solid Rock Brasil"],
].map(([id, imagem, categoria, titulo], index) => ({
  id,
  imagem,
  categoria,
  categoriaLabel: {
    CORPORATIVO: "Arquitetura corporativa",
    RESIDENCIAL: "Arquitetura residencial",
    COMERCIAL: "Arquitetura comercial",
    SOCIAL: "Projeto social",
  }[categoria],
  titulo,
  tamanho: index % 6 === 0 ? "destaque" : index % 3 === 1 ? "alto" : "normal",
}));

export default projetos;

export const getProjetoById = (id) => projetos.find((projeto) => projeto.id === id);
