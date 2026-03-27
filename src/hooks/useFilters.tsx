import React, { useState } from "react";

export function useFilters() {
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("text") || "";
  });
  const [filters, setFilters] = useState(() => {
    const jobFilters = window.localStorage.getItem("jobFilters");
    return jobFilters
      ? JSON.parse(jobFilters)
      : {
          technology: "",
          experience: "",
          location: "",
        };
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const jobCurrentPage = window.localStorage.getItem("jobCurrentPage");
    return jobCurrentPage ? Number(jobCurrentPage) : 1;
  });

  const nextPage = (totalPages: number) => {
    if (currentPage < totalPages) {
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
      window.localStorage.setItem("jobCurrentPage", newCurrentPage.toString());
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1;
      setCurrentPage(newCurrentPage);
      window.localStorage.setItem("jobCurrentPage", newCurrentPage.toString());
    }
  };
  const setPage = (page: number) => {
    setCurrentPage(page);
    window.localStorage.setItem("jobCurrentPage", page.toString());
  };

  return {
    filters,
    textToFilter,
    setFilters,
    setTextToFilter,
    currentPage,
    setPage,
    prevPage,
    nextPage,
  };
}

// const [searchText, setSearchText] = useState("");
// const [filters, setFilters] = useState({
//   location: "",
//   tech: "",
//   contract: "",
//   area: "",
//   salary: "",
//   remote: false,
// });

// const filteredResults = jobs
//   .filter((job) => {
//     const matchName = normalize(job.positionName).includes(
//       normalize(searchText),
//     );
//     return matchName;
//   })
//   .filter((job) => {
//     // contrato
//     const locationMatch =
//       !filters.location ||
//       normalize(job.location).includes(normalize(filters.location));

//     // tecnologías
//     const techMatch =
//       !filters.tech ||
//       normalize(job.technologies.join(",")).includes(normalize(filters.tech));

//     // contrato
//     const contractMatch =
//       !filters.contract || job.contract === filters.contract;

//     // área
//     const areaMatch = !filters.area || job.area === filters.area;

//     // remoto
//     const remoteMatch = !filters.remote || job.isRemote === true;

//     // salario
//     const salaryMatch = (() => {
//       if (!filters.salary) return true;

//       const [min, max] = filters.salary.split("-");
//       return job.salary >= Number(min) && job.salary <= Number(max);
//     })();

//     return (
//       contractMatch &&
//       locationMatch &&
//       techMatch &&
//       areaMatch &&
//       salaryMatch &&
//       remoteMatch
//     );
//   });
