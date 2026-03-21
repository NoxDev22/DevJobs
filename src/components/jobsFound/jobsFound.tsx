import "./jobsFound.css";

//types
import { type typeOfJob } from "../types/types";
//components
import { JobsCard } from "../jobCard/jobsCard";

type Props = {
  resultJobs: typeOfJob[];
  loading: boolean;
  total: number;
};

export function JobsFound({ resultJobs, loading, total }: Props) {
  return (
    <section className="jobs">
      <div className="jobs__texts container">
        <h2>{total} Jobs Found</h2>
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
        {(loading && <p className="text_notFound">Cargando...</p>) ||
          resultJobs?.map((job) => {
            return (
              <JobsCard
                key={job.id}
                titulo={job.titulo}
                empresa={job.empresa}
                ubicacion={job.ubicacion}
                data={job.data}
                descripcion={job.descripcion}
              />
            );
          })}
      </section>
    </section>
  );
}
