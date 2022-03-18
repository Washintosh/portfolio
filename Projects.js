import projectsInfo from "./projectsInfo";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useGlobalContext } from "./pages/_app";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const { seeProjects, setProject, project, openProjects, closeProjects } =
    useGlobalContext();
  const projectRef = useRef(null);
  const [change, setChange] = useState("");
  useEffect(() => {
    for (let i = 0; i < projectRef.current.children.length; i++) {
      if (i === 0) continue;
      const verifyVisibility = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.classList.add("show");
            setChange(projectsInfo[i - 1].name);
            setTimeout(() => {
              setProject(projectsInfo[i - 1]);
            }, 500);
          }
        });
      };
      const observer = new IntersectionObserver(verifyVisibility, {
        rootMargin: "-300px",
      });
      observer.observe(projectRef.current.children[i]);
    }
  }, []);

  useEffect(() => {
    const verifyVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target.classList.add("show");
          openProjects();
          setChange("Change");
        } else {
          // entry.target.classList.remove("show");
          closeProjects();
          setChange("Change2");
        }
      });
    };
    const observer = new IntersectionObserver(verifyVisibility, {
      rootMargin: "-300px",
    });
    observer.observe(projectRef.current);
  }, []);

  const informationRef = useRef(null);
  useEffect(() => {
    informationRef.current.classList.add("change");
    const timeout = setTimeout(() => {
      informationRef.current.classList.remove("change");
    }, 500);
    return () => clearTimeout(timeout);
  }, [change]);

  return (
    <div className="projects" ref={projectRef} id="projects">
      <div
        className={`information ${seeProjects ? "show" : ""}`}
        ref={informationRef}
      >
        <span className="projectNumber">{project.number}</span>
        <div className="projectLinks">
          <a className="projectSource" target="_blank" href={project.source}>
            <AiFillGithub />
          </a>
          <a className="projectLink" target="_blank" href={project.link}>
            <FaExternalLinkAlt />
          </a>
        </div>
        <div>
          <h1 className="projectName">{project.name}</h1>
          <p className="projectDescription">{project.description}</p>
        </div>
        <div className="technologies">
          {project.technologies.map((tech, techIndex) => (
            <div key={`${project.name}tech${techIndex}`} className="tech">
              {tech}
            </div>
          ))}
        </div>
      </div>
      {projectsInfo.map((project) => {
        return (
          <div className="images" key={`${project.name}`}>
            {project.images.map((image, imageIndex) => (
              <div
                className="imgContainer"
                key={`project${project.name}}image${imageIndex}`}
              >
                <Image src={image} alt="" />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
