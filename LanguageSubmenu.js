import { useEffect, useRef } from "react";
import { useGlobalContext } from "./pages/_app";

const LanguageSubmenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    languageSelected,
    setLanguageSelected,
    location,
  } = useGlobalContext();
  const submenuRef = useRef(null);
  const languages = ["english", "español"];
  useEffect(() => {
    submenuRef.current.style.top = `${location.top}px`;
    submenuRef.current.style.left = `${location.left}px`;
  }, [location]);

  return (
    <div
      className={`${
        isSubmenuOpen ? "show languageSubmenu" : "languageSubmenu"
      }`}
      ref={submenuRef}
      onMouseLeave={closeSubmenu}
    >
      {languages.map((lang) => {
        return (
          <a
            href="#"
            key={lang}
            className={`${languageSelected === lang ? "activeLanguage" : ""}`}
            onClick={() => {
              setLanguageSelected(lang);
              closeSubmenu();
            }}
          >
            {lang}
          </a>
        );
      })}
    </div>
  );
};
export default LanguageSubmenu;
