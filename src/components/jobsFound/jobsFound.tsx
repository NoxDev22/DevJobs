import "./jobsFound.css";
import { useState } from "react";
//types
import { type typeJob } from "../types/types";
//components
import { JobsCard } from "../jobCard/jobsCard";
import { Pagination } from "../pagination/pagination";

type Props = {
  resultJobs: typeJob[];
};

export function JobsFound({ resultJobs }: Props) {
  const [limit, setLimit] = useState({ lower: 0, upper: 6 });

  const handleSelectLimit = (value: number) => {
    setLimit(() => {
      return {
        lower: (value - 1) * 6,
        upper: value * 6,
      };
    });
  };

  return (
    <section className="jobs">
      <div className="jobs__texts container">
        <h2>{resultJobs.length} Jobs Found</h2>
        <span className="jobs__recent">
          <p>Recent</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#13ec92"
              d="M17 20q-.425 0-.712-.288T16 19v-5q0-.425.288-.712T17 13h2q.425 0 .713.288T20 14v5q0 .425-.288.713T19 20zm-6 0q-.425 0-.712-.288T10 19V5q0-.425.288-.712T11 4h2q.425 0 .713.288T14 5v14q0 .425-.288.713T13 20zm-6 0q-.425 0-.712-.288T4 19v-9q0-.425.288-.712T5 9h2q.425 0 .713.288T8 10v9q0 .425-.288.713T7 20z"
            />
          </svg>
        </span>
      </div>
      <section className="jobs__founds container">
        {resultJobs.slice(limit.lower, limit.upper).map((job) => {
          return (
            <JobsCard
              key={job.id}
              companyName={job.companyName}
              positionName={job.positionName}
              contract={job.contract}
              salary={job.salary}
              location={job.location}
              technologies={job.technologies}
              isRemote={job.isRemote}
              posted={job.posted}
            />
          );
        })}
      </section>
      <Pagination jobs={resultJobs} onPagination={handleSelectLimit} />
    </section>
  );
}
