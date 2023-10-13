import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" Component={Inicio} />
        <Route path="/sobremim" Component={SobreMim} />
        <Route
          path="*"
          element={
            <div>
              <h1>Erro 404</h1>
              <p>Página não encontrada!</p>
            </div>
          }
        />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
