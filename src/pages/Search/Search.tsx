import "./search.css";
import { useState, useEffect, useId } from "react";

//Components
import { Main } from "../../layouts/main/main";
import { Hero } from "../../components/hero/hero";
import { JobsFound } from "../../components/jobsFound/jobsFound";
import { AppliedFiltersContainer } from "../../components/appliedFiltersContainer/appliedFilters";
import { SelectWrapper } from "../../components/selectWrapper/selectWrapper";
import { Pagination } from "../../components/pagination/pagination";
//Icons
import { Magnifying } from "../../components/svgIcons/magnifying";
import { AdjustmentIcon } from "../../components/svgIcons/adjustmentIcon";

//types
import { type typeOfJob } from "../../components/types/types";
//hooks
import { useFetchJobs } from "../../services/fetch";
import { useFilters } from "../../hooks/useFilters";

export function Search() {
  const [jobs, setJobs] = useState<typeOfJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  //Hooks
  const {
    filters,
    setFilters,
    textToFilter,
    setTextToFilter,
    currentPage,
    setPage,
    prevPage,
    nextPage,
  } = useFilters();

  //id
  const idTextToFilter = useId();
  const idExperience = useId();
  const idTechnology = useId();
  const idLocation = useId();

  const resultPerPage = "9";
  const totalPages = Math.ceil(total / Number(resultPerPage));

  useEffect(() => {
    setPage(1);
    console.log("render primer effect");
  }, [textToFilter, filters.experience, filters.location, filters.technology]);

  useEffect(() => {
    const params = new URLSearchParams();
    console.log("render segundo effect");
    if (textToFilter) params.append("text", textToFilter);
    if (filters.experience) params.append("level", filters.experience);
    if (filters.location) params.append("type", filters.location);
    if (filters.technology) params.append("technology", filters.technology);

    const offset = (currentPage - 1) * Number(resultPerPage);
    params.append("offset", offset.toString());
    params.append("limit", resultPerPage);

    const queryParams = params.toString();

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await useFetchJobs(queryParams);
        setJobs(result.data);
        setTotal(result.total);
      } catch (e) {
        console.error("Error al cargar empleos:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [
    textToFilter,
    filters.experience,
    filters.location,
    filters.technology,
    currentPage,
  ]);
  console.log(currentPage);
  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    const form = new window.FormData(e.currentTarget);
    setTextToFilter(form.get(idTextToFilter)?.toString() ?? "");
    setFilters({
      technology: form.get(idTechnology)?.toString() ?? "",
      experience: form.get(idExperience)?.toString() ?? "",
      location: form.get(idLocation)?.toString() ?? "",
    });
  };

  return (
    <Main>
      <Hero />
      <section className="search container">
        <form action="" className="search__form" onChange={handleSearch}>
          <div className="search__formInputs">
            <div className="search__seeker">
              <input
                type="text"
                placeholder="Senior Backend"
                className="search__input"
                name={idTextToFilter}
              />
              <Magnifying className="search__iconMagnifying" />
            </div>
            <div className="search__filter">
              <AdjustmentIcon className="search__iconAdjustment" />
            </div>
          </div>
          <div className="search__selectWrapperContainer">
            <SelectWrapper
              name={idTechnology}
              option={[
                { value: "", text: "Technologies" },
                { value: "Javascript" },
                { value: "Java" },
                { value: "React" },
                { value: "Python" },
                { value: "Node.js" },
              ]}
            />
            <SelectWrapper
              name={idLocation}
              option={[
                { value: "", text: "Location" },
                { value: "Madrid" },
                { value: "Barcelona" },
              ]}
            />
            <SelectWrapper
              name={idExperience}
              option={[
                { value: "", text: "Experience" },
                { value: "Senior" },
                { value: "Mid-level" },
                { value: "Junior" },
              ]}
            />
          </div>
        </form>
      </section>
      <AppliedFiltersContainer />
      <JobsFound resultJobs={jobs} loading={loading} total={total} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Main>
  );
}
