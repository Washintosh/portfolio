import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./pages/_app";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "show sidebar" : "sidebar"}`}>
      <div className="faTimesContainer">
        <button className="faIcon" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebarButtons">
        <ul>
          <li>
            <a href="#">about me</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
