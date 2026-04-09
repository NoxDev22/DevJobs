import { useNavigate } from "react-router";
import "./jobsCard.css";
//types
import { type typeOfCard } from "../../types/types";
//Components
import { Button } from "../button/button";
import { Launch } from "../svgIcons/launchIcon";
import { InformationIcon } from "../svgIcons/informationIcon";

export function JobsCard({
  id,
  titulo,
  empresa,
  ubicacion,
  descripcion,
  data,
}: typeOfCard) {
  const navigate = useNavigate();
  const handleMoreInfo = () => {
    navigate(id);
  };
  return (
    <article className="jobs__card">
      <div className="jobs__header">
        <img src="./images/logo_default.jpg" alt="" className="jobs__image" />
        <span>
          <h3 className="jobs__level">{titulo}</h3>
          <p className="jobs__location">{empresa}</p>
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
      <div className="jobs__description">
        <h2>Descripción</h2>
        <p>{descripcion}</p>
      </div>
      <div className="jobs__technologies">
        {data.technology.slice(0, 3).map((tech, i) => {
          return <p key={i}>{tech}</p>;
        })}
      </div>
      <div className="jobs__info">
        <span>
          <h3 className="jobs__infoH3">Nivel</h3>
          <p>{data.nivel}</p>
        </span>
        <span>
          <h3 className="jobs__infoH3">Ubicación</h3>
          <p>{ubicacion}</p>
        </span>
        <span>
          <h3 className="jobs__infoH3">Modalidad</h3>
          <p>{data.modalidad}</p>
        </span>
      </div>
      <div className="jobs_buttons">
        <Button
          className="jobs__button"
          text="More Info"
          handleClick={handleMoreInfo}
        >
          <InformationIcon className="" width="28" height="28" />
        </Button>
        <Button className="jobs__button" text="Apply Now">
          <Launch width="25" height="25" />
        </Button>
      </div>
    </article>
  );
}
