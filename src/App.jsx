import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";
import ContatoPage from "./pages/ContatoPage";
import HomePage from "./pages/HomePage";
import ImprensaPage from "./pages/ImprensaPage";
import PoliticaDePrivacidadePage from "./pages/PoliticaDePrivacidadePage";
import ProjetoDetalhePage from "./pages/ProjetoDetalhePage";
import ProjetosPage from "./pages/ProjetosPage";
import SobrePage from "./pages/SobrePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhePage />} />
          <Route path="/imprensa" element={<ImprensaPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaDePrivacidadePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
