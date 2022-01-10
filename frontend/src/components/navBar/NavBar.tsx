import "./NavBar.css";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/apdo3939"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Alexandre Pereira</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
