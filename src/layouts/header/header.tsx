import { useState } from "react";
import "./header.css";

import { Link } from "../../components/Link/link";

export function Header() {
  const [activated, setActivated] = useState(false);

  const handlerActivated = () => {
    setActivated(!activated);
  };

  return (
    <header className="header">
      <section className="header__container container">
        <Link href="/" className={"header__logo"}>
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              className="header__iconLogo"
            >
              <path
                fill="#13ec92"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm3.5-1l-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4zm4.5 0v-2h6v2z"
              />
            </svg>
            <h2 className="header__textLogo">TechJobs</h2>
          </>
        </Link>

        <nav className={`nav ${activated ? "nav--activated" : ""}`}>
          <ul className="nav__list">
            <li className="nav__li">
              <Link href="/" className="nav__link">
                Home
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="nav__icon"
              >
                <path fill="#8a9394" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
              </svg>
            </li>
            <li className="nav__li">
              <Link href="/discover" className="nav__link">
                Discover
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="nav__icon"
              >
                <path
                  fill="#8a9394"
                  d="m7.5 16.5l7-2l2-7l-7 2zm4.5-3q-.625 0-1.062-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5m0 8.5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>
            </li>
            <li className="nav__li">
              <Link href="/saved" className="nav__link">
                Saved
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="nav__icon"
              >
                <path
                  fill="#8a9394"
                  d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
                />
              </svg>
            </li>
            <li className="nav__li">
              <Link href="/message" className="nav__link">
                Message
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="nav__icon"
              >
                <path
                  fill="#8a9394"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                />
              </svg>
            </li>
            <li className="nav__li">
              <Link href="/profile" className="nav__link">
                Profile
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="nav__icon"
              >
                <path
                  fill="#8a9394"
                  d="M12 13q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-1.15q-1.35-1.325-3.137-2.087T12 15t-3.863.763T5 17.85z"
                />
              </svg>
            </li>
          </ul>
        </nav>
        <div className="header__icons">
          <div
            className={`header_iconMenu ${activated ? "header_iconMenuClose" : "header_iconMenuBar"}`}
            onClick={handlerActivated}
          ></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 20 20"
            className="header_iconBell nav__icon"
          >
            <path
              fill="#f6f8f7"
              d="M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3"
            />
          </svg>
        </div>
      </section>
    </header>
  );
}
