import "./hero.css";

export function Hero() {
  return (
    <section className="hero">
      <section className="container hero__container">
        <div className="hero__note">
          <span className="hero__circle"></span>
          <p className="hero__txtNote">2,482 NEW ROLES THIS WEEK</p>
        </div>
        <div className="hero__texts">
          <h1 className="hero__title">
            Code Your <span>Future</span>
          </h1>
          <p className="hero__description">
            The premier destination for software engineering talent. Connect
            with toptier tech companies worldwide.
          </p>
        </div>
      </section>
    </section>
  );
}
