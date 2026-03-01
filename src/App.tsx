//Layouts
import { Header } from "./layouts/header/header";
import { Main } from "./layouts/main/main";
import { Footer } from "./layouts/footer/footer";
//Components
import { Hero } from "./components/hero/hero";
import { Search } from "./components/search/search";
import { JobsFound } from "./components/jobsFound/jobsFound";
import { useEffect, useState } from "react";
//Utils
import { fetchJobs } from "./services/fetch";
//types
import { type typeJob } from "./components/types/types";

function App() {
  const [jobs, setJobs] = useState<typeJob[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: typeJob[] = await fetchJobs();
      setJobs(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Search />
        <JobsFound resultJobs={jobs} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
