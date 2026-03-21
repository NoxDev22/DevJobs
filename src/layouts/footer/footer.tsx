import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer__links">
        <div className="container footer__contentList">
          <ul>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Salaries</a>
            </li>
            <li>
              <a href="#">Tech Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
        <div className="container footer__icons">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="32"
              viewBox="0 0 24 24"
              className="footer__iconTerminal"
            >
              <path
                fill="#8a9394"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm3.5-1l-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4zm4.5 0v-2h6v2z"
              />
            </svg>
            <h3>TechJobs &copy; 2026</h3>
          </span>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#8a9394"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
                </g>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <g clipPath="url(#IconifyId19bcd9f63def98a851)">
                    <path
                      fill="#8a9394"
                      fillRule="evenodd"
                      d="M11.891 3.58a.75.75 0 0 0-1.06 1.061L14.188 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L15.78 8.53a.75.75 0 0 0 0-1.06zM4.11 12.42a.75.75 0 0 0 1.06-1.061L1.811 8l3.353-3.354a.75.75 0 1 0-1.06-1.06L.22 7.47a.75.75 0 0 0 0 1.06z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="IconifyId19bcd9f63def98a851">
                      <path fill="#8a9394" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8a9394"
                  d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"
                />
              </svg>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
