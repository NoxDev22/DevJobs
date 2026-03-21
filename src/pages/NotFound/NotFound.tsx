import "./notFound.css";

export function NotFound() {
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
        <a href="/" className="notFound_btnBackToHome">
          Back to home
        </a>
      </div>
    </section>
  );
}
