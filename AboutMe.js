import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./pages/_app";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiFirebase,
  SiSocketdotio,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const AboutMe = () => {
  const { translate, openProjects, closeProjects } = useGlobalContext();
  const aboutMeRef = useRef(null);
  const aboutMeTitleRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const resizeEvent = () => setScreenWidth(window.innerWidth);
    const scrollEvent = () => {
      aboutMeTitleRef.current.style.left = `${
        ((1.9 * window.scrollY - 600) * screenWidth) / 1366
      }px`;
    };
    window.addEventListener("resize", resizeEvent);
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
      window.removeEventListener("scroll", scrollEvent);
    };
  });

  return (
    <section className="aboutMe" id="aboutMe" ref={aboutMeRef}>
      <h2 className="aboutMeTitle" ref={aboutMeTitleRef}>
        {translate("about me")}
      </h2>
      <article>
        <div>
          <p>
            {translate(
              "Hi, I'm Washington. I create web pages that give users a fulfilling experience. Even though I study business administration in the university, my interest in development started when I was taught the programming fundamentals in a lesson."
            )}
          </p>
          <p>
            {translate(
              "Here are the technologies I've been working with recently in my projects:"
            )}
          </p>
          <ul>
            <li>
              <p className="javascriptLogo logo">
                <SiJavascript />
              </p>
              <p className="logoName">Javascript</p>
            </li>
            <li>
              <p className="reactLogo logo">
                <FaReact />
              </p>
              <p className="logoName">React</p>
            </li>
            <li>
              <p className="nodeLogo logo">
                <FaNodeJs />
              </p>
              <p className="logoName">Node.js</p>
            </li>
            <li>
              <p className="expressLogo logo">
                <SiExpress />
              </p>
              <p className="logoName">Express</p>
            </li>
            <li>
              <p className="mongodb logo">
                <SiMongodb />
              </p>
              <p className="logoName">Mongodb</p>
            </li>
            <li>
              <p className="nextLogo logo">
                <SiNextdotjs />
              </p>
              <p className="logoName">Next.js</p>
            </li>
            <li>
              <p className="firebase logo">
                <SiFirebase />
              </p>
              <p className="logoName">Firebase</p>
            </li>
            <li>
              <p className="socketio logo">
                <SiSocketdotio />
              </p>
              <p className="logoName">Socket.io</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
