import projeto1 from "../assets/images/projetos/1.jpg";
import projeto2 from "../assets/images/projetos/2.jpg";
import projeto3 from "../assets/images/projetos/3.jpg";
import projeto4 from "../assets/images/projetos/4.jpg";

const projetos = [
  [
    1,
    projeto1,
    "Arquitetura corporativa",
    "Alpargatas \u00b7 Retrofit",
    "S\u00e3o Paulo \u00b7 SP",
    "2024",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    2,
    projeto2,
    "Arquitetura residencial",
    "Casa Morumbi",
    "S\u00e3o Paulo \u00b7 SP",
    "2023",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    3,
    projeto3,
    "Arquitetura corporativa",
    "Ginfor",
    "S\u00e3o Paulo \u00b7 SP",
    "2022",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    4,
    projeto4,
    "Interiores corporativos",
    "Delta BC \u00b7 Interiores",
    "S\u00e3o Paulo \u00b7 SP",
    "2024",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    5,
    projeto1,
    "Arquitetura residencial",
    "Casa de Campo",
    "S\u00e3o Paulo \u00b7 SP",
    "2022",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    6,
    projeto2,
    "Arquitetura comercial",
    "Loja Zig Mundi",
    "S\u00e3o Paulo \u00b7 SP",
    "2021",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    7,
    projeto3,
    "Interiores corporativos",
    "3\u00ba Cart\u00f3rio",
    "S\u00e3o Paulo \u00b7 SP",
    "2023",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  [
    8,
    projeto4,
    "Arquitetura residencial",
    "Resid\u00eancia Contempor\u00e2nea",
    "S\u00e3o Paulo \u00b7 SP",
    "2024",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ,
  ],
].map(([id, imagem, categoria, titulo, local, ano, descricao]) => ({
  id,
  imagem,
  categoria,
  titulo,
  local,
  ano,
  descricao,
}));

export const getProjetoById = (id) =>
  projetos.find((projeto) => projeto.id === Number(id));
