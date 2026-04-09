//React router
import { Routes, Route } from "react-router";
//lazy
import { lazy, Suspense } from "react";
//Layouts
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Discover = lazy(() => import("./pages/Discover/discover"));
const JobDetails = lazy(() => import("./pages/JobDetails/jobDetails"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div
            style={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "300px",
            }}
          >
            Cargando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/:jobId" element={<JobDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

/*
TERMINADO
Implementar react router
Modificar componente LINK
Modificar Hook useRouter
Quitar la utilización de localStorage convirtiendo la URL en la fuente de la verdad

POR IMPLEMENTAR:

usar UseParams de react router para obtener el id de cada trabajo y realizar la petición a la api para obtener el trabajo ejemplo: https://jscamp-api.vercel.app/api/jobs/7a4d1d8b-1e45-4d8c-9f1a-8c2f9a9121a4

maquetar pagina de mas información acerca del trabajo
*/
