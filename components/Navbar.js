import { useGlobalContext } from "../pages/_app";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { LANGUAGES } from "../constants";

const Navbar = ({ lang }) => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  const navRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < navRef.current.children.length; i++) {
      navRef.current.children[i].classList.add("show");
    }
  }, []);

  const otherLang = lang === "es" ? "en" : "es";

  if (lang === "es") {
    return (
      <nav className="navbar" ref={navRef}>
        <div className="navSpace"></div>
        <div
          className={`${
            isSidebarOpen ? "faBarsContainer" : "faBarsContainer show"
          }`}
        >
          <button className="faIcon" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="navButtons">
          <ul>
            <li>
              <a href="#aboutMe">servicios</a>
            </li>
            <li>
              <a href="#projects">projectos</a>
            </li>
            <li>
              <a href={`/${otherLang}`}>{LANGUAGES[otherLang]}</a>
            </li>
            <li>
              <a className="contactMe" href="#contact">
                contáctame
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else if (lang === "en") {
    return (
      <nav className="navbar" ref={navRef}>
        <div className="navSpace"></div>
        <div
          className={`${
            isSidebarOpen ? "faBarsContainer" : "faBarsContainer show"
          }`}
        >
          <button className="faIcon" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="navButtons">
          <ul>
            <li>
              <a href="#aboutMe">services</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href={`/${otherLang}`}>{LANGUAGES[otherLang]}</a>
            </li>
            <li>
              <a className="contactMe" href="#contact">
                contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
