//Layouts
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
//Pages
import { Search } from "./pages/Search/Search";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
//hooks
import { useRouter } from "./hooks/useRouter";
import { useDocumentTitle } from "./hooks/useTitle";

function App() {
  const { pathName } = useRouter();
  useDocumentTitle(pathName);

  return (
    <>
      <Header />
      {pathName === "/" && <Home />}
      {pathName === "/search" && <Search />}
      <Footer />
    </>
  );
}

export default App;

/*
Terminado
  opciones de limpiar filtro
  spinner mejorar cuando este cargando
  usar localStorage para los filtros
*/
