import "./home.css";

//Components
import { Main } from "../../layouts/main/main";
import { Hero } from "../../components/hero/hero";
import { BenefitsCard } from "../../components/benefitsCard/benefitsCard";
import { Faq } from "../../components/faq/faq";
//Icon
import { Launch } from "../../components/svgIcons/launchIcon";
import { Link } from "../../components/Link/link";
//
type Props = {};

export function Home({}: Props) {
  return (
    <Main>
      <Hero />
      <section className="container home">
        <div className="home_whyContainer">
          <h2 className="home_whyTitle">Why DevJobs?</h2>
          <p className="home_whyDescription">
            DevJobs is designed for developers seeking new opportunities in
            technology. We gather job postings from companies looking for talent
            in frontend, backend, DevOps, and more. Our goal is to make finding
            your next job simple, fast, and focused on what really matters: your
            skills.
          </p>
          <Link href="/search" className="home_whyButton">
            <Launch /> Search for work
          </Link>
        </div>
      </section>
      <section className="container benefits">
        <BenefitsCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="#8a9394"
                d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"
              />
            </svg>
          }
          title="Find your dream job"
          description="Discover opportunities in technology companies that are looking for developers with your skills and experience."
        />
        <BenefitsCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="#8a9394"
                d="M5 11v-1q0-1.8.813-3.287T8 4.275L6.125 2.4L7 1.5l2.125 2.125q.65-.3 1.388-.462T12 3t1.488.163t1.387.462L17 1.5l.875.9L16 4.275q1.375.95 2.188 2.438T19 10v1zm10-2q.425 0 .713-.288T16 8t-.288-.712T15 7t-.712.288T14 8t.288.713T15 9M9 9q.425 0 .713-.288T10 8t-.288-.712T9 7t-.712.288T8 8t.288.713T9 9m3 14q-2.925 0-4.962-2.037T5 16v-4h14v4q0 2.925-2.037 4.963T12 23"
              />
            </svg>
          }
          title="Filter by technologies"
          description="Search for jobs based on the tools you are proficient in, such as React, Node.js, Docker, or Kubernetes."
        />
        <BenefitsCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 15 15"
            >
              <path
                fill="#8a9394"
                d="M7.988 1.563a.52.52 0 0 1 .608-.417l.269.056c2.764.638 5.188 3.036 5.188 6.501c0 1.537-.7 2.745-1.515 3.663c-.585.659-1.255 1.193-1.793 1.602h1.637a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.846l.182-.138c.534-.405 1.152-.892 1.694-1.502c.715-.804 1.252-1.776 1.252-2.97c0-3.012-2.16-5.073-4.606-5.533l-.102-.03a.52.52 0 0 1-.314-.578M.86 7.297c0-1.536.7-2.744 1.515-3.663c.585-.658 1.255-1.192 1.793-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.687l-.182.137c-.534.405-1.152.892-1.694 1.502c-.715.804-1.252 1.776-1.252 2.971c0 3.044 2.207 5.118 4.685 5.547a.522.522 0 0 1-.177 1.027C3.5 13.367.86 10.913.86 7.297"
              />
            </svg>
          }
          title="Updated offers"
          description="Opportunities are constantly updated so you can always find relevant positions."
        />
        <BenefitsCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#8a9394"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                <path d="M12 7v5l3 3" />
              </g>
            </svg>
          }
          title="Save time"
          description="Find deals in one place that you would normally have to search for on multiple platforms."
        />
      </section>
      <section className="container CtaFaq">
        <div className="cta_container">
          <h2 className="cta_title">Start your search today</h2>
          <p className="cta_description">
            Explore hundreds of opportunities for developers and find the role
            that best suits your profile.
          </p>
          <Link href="/search" className="home_whyButton">
            <Launch /> Search for work
          </Link>
        </div>
        <div className="faq_container">
          <Faq
            textHead="What kind of jobs can I find on DevJobs?"
            textContent="At DevJobs you can find opportunities for frontend developers, backend developers, full stack developers, DevOps and more."
          />
          <Faq
            textHead="Do I need to create an account?"
            textContent="Not necessarily. You can freely explore the offers and access the application links."
          />
          <Faq
            textHead="What technologies are included in the offers?"
            textContent="You'll find jobs related to modern tools like React, Node.js, Kubernetes, Docker, Python, and others."
          />
          <Faq
            textHead="Are the offers remote?"
            textContent="Many companies advertise remote, hybrid, or on-site positions depending on their needs."
          />
        </div>
      </section>
    </Main>
  );
}
