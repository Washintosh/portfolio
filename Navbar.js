import { useGlobalContext } from "./pages/_app";
import { FaBars } from "react-icons/fa";
import LanguageSubmenu from "./LanguageSubmenu";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const { openSubmenu, languageSelected, openSidebar, isSidebarOpen } =
    useGlobalContext();
  const hoverLanguage = (e) => {
    const location = {
      left:
        (e.target.getBoundingClientRect().left +
          e.target.getBoundingClientRect().right) /
        2,
      top: e.target.getBoundingClientRect().y,
    };
    openSubmenu(location);
  };
  const navRef = useRef(null);
  useEffect(() => {
    for (let i = 0; i < navRef.current.children.length; i++) {
      navRef.current.children[i].classList.add("show");
    }
  }, []);
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
            <a href="#aboutMe">about me</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <a onMouseOver={hoverLanguage} href="#">
              {languageSelected}
            </a>
          </li>
        </ul>
      </div>
      <LanguageSubmenu />
    </nav>
  );
};

export default Navbar;
