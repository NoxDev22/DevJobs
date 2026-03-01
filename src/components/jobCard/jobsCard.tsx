import "./jobsCard.css";
//types
import { type cardJobType } from "../types/types";

export function JobsCard({
  companyName,
  positionName,
  contract,
  salary,
  location,
  technologies,
  isRemote,
  posted,
}: cardJobType) {
  return (
    <article className="jobs__card">
      <div className="jobs__header">
        <img src="./images/logo_default.jpg" alt="" className="jobs__image" />
        <span>
          <h3 className="jobs__level">{positionName}</h3>
          <p className="jobs__description">
            {companyName} • {isRemote ? "Remote" : "In person"} • {location}
          </p>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          className="jobs__iconSave"
        >
          <path
            fill="#8a9394"
            d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
          />
        </svg>
      </div>
      <div className="jobs__technologies">
        {technologies.map((tech, i) => {
          return <p key={i}>{tech}</p>;
        })}
      </div>
      <div className="jobs__published">
        <h2>Published</h2>
        <p>{posted}</p>
      </div>
      <div className="jobs__footer">
        <div className="jobs__footerInfo">
          <span>
            <h3 className="jobs__footerH3">Salary</h3>
            <p>$ {salary}</p>
          </span>
          <span>
            <h3 className="jobs__footerH3">Contract</h3>
            <p>{contract}</p>
          </span>
        </div>
        <button className="jobs__button">Apply Now</button>
      </div>
    </article>
  );
}
