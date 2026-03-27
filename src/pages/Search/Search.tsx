import "./search.css";
import { useState, useEffect, useId, useRef } from "react";

//Components
import { Main } from "../../layouts/main/main";
import { Hero } from "../../components/hero/hero";
import { JobsFound } from "../../components/jobsFound/jobsFound";
import { AppliedFiltersContainer } from "../../components/appliedFiltersContainer/appliedFilters";
import { SelectWrapper } from "../../components/selectWrapper/selectWrapper";
import { Pagination } from "../../components/pagination/pagination";
//Icons
import { Magnifying } from "../../components/svgIcons/magnifying";

//types
import { type typeOfJob } from "../../components/types/types";
//hooks
import { useFetchJobs } from "../../services/fetch";
import { useFilters } from "../../hooks/useFilters";
import { useRouter } from "../../hooks/useRouter";

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
  const { navigateTo } = useRouter();

  //id
  const idTextToFilter = useId();
  const idExperience = useId();
  const idTechnology = useId();
  const idLocation = useId();
  //Ref
  let timeOutId = useRef<number | null>(null);

  //Pagination Variables
  const resultPerPage = "9";
  const totalPages = Math.ceil(total / Number(resultPerPage));
  const filtersStorage = window.localStorage.getItem("jobFilters");

  useEffect(() => {
    const jobCurrentPage = window.localStorage.getItem("jobCurrentPage");
    const newCurrentPage = jobCurrentPage ? Number(jobCurrentPage) : 1;
    setPage(newCurrentPage);
  }, [textToFilter, filters.experience, filters.location, filters.technology]);

  useEffect(() => {
    const params = new URLSearchParams();
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

  useEffect(() => {
    const params = new URLSearchParams();
    if (textToFilter) params.append("text", textToFilter);
    if (filters.experience) params.append("level", filters.experience);
    if (filters.technology) params.append("technology", filters.technology);
    if (filters.location) params.append("type", filters.location);
    if (currentPage > 1) params.append("page", currentPage.toString());

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    navigateTo(newUrl);
  }, [
    textToFilter,
    filters.experience,
    filters.location,
    filters.technology,
    currentPage,
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    const form = new window.FormData(e.currentTarget);

    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }
    timeOutId.current = setTimeout(() => {
      setTextToFilter(form.get(idTextToFilter)?.toString() ?? "");
    }, 550);

    const formFilters = {
      technology: form.get(idTechnology)?.toString() ?? "",
      experience: form.get(idExperience)?.toString() ?? "",
      location: form.get(idLocation)?.toString() ?? "",
    };

    setFilters(formFilters);
    window.localStorage.setItem("jobFilters", JSON.stringify(formFilters));
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
                defaultValue={textToFilter}
                placeholder="Senior Backend"
                className="search__input"
                name={idTextToFilter}
              />
              <Magnifying className="search__iconMagnifying" />
            </div>
          </div>
          <div className="search__selectWrapperContainer">
            <SelectWrapper
              select={
                filtersStorage
                  ? JSON.parse(filtersStorage).technology.toString()
                  : ""
              }
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
              select={
                filtersStorage
                  ? JSON.parse(filtersStorage).location.toString()
                  : ""
              }
              name={idLocation}
              option={[
                { value: "", text: "Location" },
                { value: "Madrid" },
                { value: "Barcelona" },
              ]}
            />
            <SelectWrapper
              select={
                filtersStorage
                  ? JSON.parse(filtersStorage).experience.toString()
                  : ""
              }
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
      <AppliedFiltersContainer
        setFilter={setFilters}
        setTextToFilter={setTextToFilter}
        filter={filters}
        text={textToFilter}
      />
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
