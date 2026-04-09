import "./jobDetails.css";
import { useParams } from "react-router";
import { Link } from "react-router";
//Components
import { Main } from "../../layouts/main/main";
import { useEffect, useState } from "react";
import { Spinner } from "../../components/spinner/spinner";
import { ErrorState } from "../../components/errorState/errorState";
import { JobDetailSection } from "../../components/jobDetailSection/jobDetailSection";
import { JobDetailContent } from "../../components/jobDetailContent/jobDetailContent";
import { Button } from "../../components/button/button";
//icon
import { LocationIcon } from "../../components/svgIcons/locationIcon";
import { Launch } from "../../components/svgIcons/launchIcon";
//type
import { type typeOfJob } from "../../types/types";
type Props = {};

export default function JobDetails({}: Props) {
  const [job, setJob] = useState<typeOfJob | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  //Job id
  const { jobId } = useParams();
  //Scroll
  window.scrollTo(0, 0);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs/${jobId}`,
        );
        if (!response.ok) throw new Error("Error in obtaining the job");
        const job = await response.json();
        setJob(job);
      } catch (err: any) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [jobId]);

  return (
    <Main>
      <section className="jobDetails container">
        {loading && <Spinner className={"jobDetail__spinner"} />}
        {!loading && error && (
          <ErrorState
            title="Oops! We hit a problem"
            message="We’re having trouble loading this job right now. You can try again or go back and continue browsing."
          />
        )}

        {!loading && !error && (
          <>
            <header className="jobDetails__header">
              <span>
                <Link to={"/discover"} className="jobDetails__header_discover">
                  Discover
                </Link>
                /<p className="jobDetails__header_titulo">{job?.titulo}</p>
              </span>
            </header>
            <div className="jobDetails__company">
              <figure className="jobDetail__figure">
                <img
                  src="../images/logo_default.jpg"
                  alt="Logo defecto de una empresa"
                  className="jobDetail__img"
                />
              </figure>
              <div className="jobDetails__company_info">
                <span>
                  <h2>{job?.titulo}</h2>
                  <h3>{job?.empresa}</h3>
                </span>
                <span className="jobDetails__company_level">
                  <p>{job?.data.nivel}</p>•<p>{job?.data.modalidad}</p>
                </span>
                <span className="jobDetails__company_location">
                  <LocationIcon value="" width="20" height="20" />
                  <p>{job?.ubicacion}</p>
                </span>
              </div>
            </div>
            <JobDetailSection
              title="About us"
              text={job?.content.about}
              padding="0"
            />
            <Button text="Apply now" className="jobDetails__button">
              <Launch width="25" height="25" />
            </Button>
            <div className="jobDetail__technologies">
              <h2>Required technologies</h2>
              <span className="jobDetail__contTechnology">
                {job?.data.technology.map((tech, index) => {
                  return (
                    <p key={index} className="jobDetail__technology">
                      {tech}
                    </p>
                  );
                })}
              </span>
            </div>
            <JobDetailSection
              title="About the role"
              text={job?.content.description}
            />
            <JobDetailContent
              title="Requirements"
              list={job?.content.requirements}
            />
            <JobDetailContent
              title="Responsibilities"
              list={job?.content.responsibilities}
            />
          </>
        )}
      </section>
    </Main>
  );
}
