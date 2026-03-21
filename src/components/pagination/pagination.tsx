import "./pagination.css";

type tpJobs = {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  nextPage: (totalPages: number) => void;
  prevPage: () => void;
};

export function Pagination({
  currentPage,
  totalPages,
  setPage,
  prevPage,
  nextPage,
}: tpJobs) {
  let listPagination: number[] = Array.from(
    { length: totalPages },
    (_, i) => i + 1,
  );

  return (
    <div className="pagination">
      <button
        className={`pagination__arrow ${currentPage <= 1 ? "pagination__arrow--limit" : ""}`}
        onClick={prevPage}
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
        {listPagination.map((pgNumber) => (
          <a
            href="#"
            key={pgNumber}
            className={`pagination__link ${pgNumber === currentPage ? "pagination__link--active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setPage(pgNumber);
            }}
          >
            {pgNumber}
          </a>
        ))}
      </div>
      <button
        className={`pagination__arrow ${currentPage === listPagination.length ? "pagination__arrow--limit" : ""}`}
        onClick={() => {
          nextPage(totalPages);
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
