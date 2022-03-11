import { createContext, useContext, useState } from "react";
import "../styles/globals.css";

const globalContext = createContext();
function MyApp({ Component, pageProps }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [languageSelected, setLanguageSelected] = useState("english");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSubmenu = (l) => {
    setIsSubmenuOpen(true);
    setLocation(l);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openLanguageModal = () => {
    setIsLanguageModalOpen(true);
  };
  const closeLanguageModal = () => {
    setIsLanguageModalOpen(false);
  };

  const [seeProjects, setSeeProjects] = useState(false);
  const openProjects = () => {
    setSeeProjects(true);
  };
  const closeProjects = () => {
    setSeeProjects(false);
  };

  const [project, setProject] = useState({
    name: "",
    source: "",
    description: "",
    technologies: [],
  });

  return (
    <globalContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        languageSelected,
        setLanguageSelected,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        seeProjects,
        openProjects,
        closeProjects,
        project,
        setProject,
      }}
    >
      <Component {...pageProps} />
    </globalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(globalContext);

export default MyApp;
