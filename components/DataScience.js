import { DATA_SCIENCE_TECHS, DATA_SCIENCE_PROJECTS } from "../constants";
import Project from "./Project";

const DataScience = ({ lang }) => {
  if (lang === "es") {
    return (
      <section id="data-science-section">
        <section id="data-science-projects-section">
          <h2>Mis Proyectos</h2>
          <div id="data-science-projects">
            {DATA_SCIENCE_PROJECTS.map((project) => {
              const { tech, name, img, id } = project;
              return <Project key={id} tech={tech} name={name} img={img} />;
            })}
          </div>
        </section>
        <article id="data-science-article">
          <p>Soy un profesional en:</p>
          <div id="data-science-techs">
            {Object.keys(DATA_SCIENCE_TECHS).map((tech) => {
              const { name, icon } = DATA_SCIENCE_TECHS[tech];
              return (
                <div
                  key={`data_science_tech_${name}`}
                  className="data-science-tech-container"
                >
                  <img src={icon} alt={icon} />
                  <p className="data-science-tech-icon">{name}</p>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    );
  } else if (lang === "en") {
    return (
      <section id="data-science-section">
        <section id="data-science-projects-section">
          <h2>My Projects</h2>
          <div id="data-science-projects">
            {DATA_SCIENCE_PROJECTS.map((project) => {
              const { tech, name, img, id } = project;
              return <Project key={id} tech={tech} name={name} img={img} />;
            })}
          </div>
        </section>
        <article id="data-science-article">
          <p>I&apos;m a professional in:</p>
          <div id="data-science-techs">
            {Object.keys(DATA_SCIENCE_TECHS).map((tech) => {
              const { name, icon } = DATA_SCIENCE_TECHS[tech];
              return (
                <div
                  key={`data_science_tech_${name}`}
                  className="data-science-tech-container"
                >
                  <img src={icon} alt={icon} />
                  <p className="data-science-tech-icon">{name}</p>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    );
  }
};

export default DataScience;
