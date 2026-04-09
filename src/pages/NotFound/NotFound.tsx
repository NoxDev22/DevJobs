//Components
import { Link } from "react-router";
//Hooks
import { useDocumentTitle } from "../../hooks/useTitle";

import "./notFound.css";

export default function NotFound() {
  useDocumentTitle(window.location.pathname);
  return (
    <section className="container notFound">
      <figure className="notFound_illustration">
        <img
          src="./images/illustration-error-404.png"
          alt="illustration of error 404"
          className="notFound_illustration_img"
        />
      </figure>
      <div className="notFound_texts">
        <h2 className="notFound_title">Sorry, page not found</h2>
        <p className="notFound_description">
          The requested page could not be found.
        </p>
        <Link to="/" className="notFound_btnBackToHome">
          Back to home
        </Link>
      </div>
    </section>
  );
}
