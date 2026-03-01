import "./pagination.css";

import type { typeJob } from "../types/types";
import { useState } from "react";

type tpJobs = {
  jobs: typeJob[];
  onPagination: (value: number) => void;
};

export function Pagination({ jobs, onPagination }: tpJobs) {
  const [pgSelected, setPgSelected] = useState(1);

  let listPagination: number[] = Array.from(
    { length: Math.ceil(jobs.length / 6) },
    (_, i) => i + 1,
  );

  return (
    <div className="pagination">
      <button
        className={`pagination__arrow ${pgSelected <= 1 ? "pagination__arrow--limit" : ""}`}
        onClick={() => {
          setPgSelected(pgSelected - 1);
          onPagination(pgSelected - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 24 24"
        >
          <path
            fill="#13ec92"
            d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
          />
        </svg>
      </button>
      <div className="pagination__number">
        {listPagination.map((nm) => (
          <a
            href="#"
            key={nm}
            className={`pagination__link ${nm === pgSelected ? "pagination__link--active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onPagination(nm);
              setPgSelected(nm);
            }}
          >
            {nm}
          </a>
        ))}
      </div>
      <button
        className={`pagination__arrow ${pgSelected === listPagination.length ? "pagination__arrow--limit" : ""}`}
        onClick={() => {
          setPgSelected(pgSelected + 1);
          onPagination(pgSelected + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 24 24"
        >
          <path
            fill="#13ec92"
            d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
          />
        </svg>
      </button>
    </div>
  );
}
