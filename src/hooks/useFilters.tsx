import { useState } from "react";

export function useFilters() {
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("text") || "";
  });
  const [filters, setFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      technology: params.get("technology") || "",
      experience: params.get("level") || "",
      location: params.get("type") || "",
    };
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("page")) || 1;
  });

  const nextPage = (totalPages: number) => {
    if (currentPage < totalPages) {
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1;
      setCurrentPage(newCurrentPage);
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
