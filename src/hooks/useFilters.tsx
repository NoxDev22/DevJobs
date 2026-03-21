import { useState } from "react";

export function useFilters() {
  const [textToFilter, setTextToFilter] = useState("");
  const [filters, setFilters] = useState({
    technology: "",
    experience: "",
    location: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = (totalPages: number) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const setPage = (page: number) => {
    setCurrentPage(page);
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
