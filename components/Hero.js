import { useEffect, useRef, useState } from "react";
import SocialIconContainer from "./SocialIconContainer";

const Hero = ({ lang }) => {
  const leftHeroRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < leftHeroRef.current.children.length; i++) {
      leftHeroRef.current.children[i].classList.add("show");
    }
  }, []);

  if (lang === "es") {
    return (
      <div id="hero">
        <div id="leftHero" ref={leftHeroRef}>
          <p>Hola! Bienvenido, soy</p>
          <h1>Washington</h1>
          <h2>Desarrollador Full Stack · Analista de datos</h2>
          <div className="buttonsContainer">
            <a href="#contact" className="contactMe">
              Contáctame
            </a>
            <SocialIconContainer lang={lang} />
          </div>
        </div>
        <div id="rightHero">
          <div className="el el1"></div>
          <div className="el el2"></div>
          <div className="el el3"></div>
          <div className="el el4"></div>
          <div className="el el5"></div>
          <div className="el el6"></div>
          <div className="el el7"></div>
          <div className="el el8"></div>
        </div>
      </div>
    );
  } else if (lang === "en") {
    return (
      <div id="hero">
        <div id="leftHero" ref={leftHeroRef}>
          <p>Hi! Welcome, I'm</p>
          <h1>Washington</h1>
          <h2>Full Stack Developer · Data Analyst</h2>
          <div className="buttonsContainer">
            <a href="#contact" className="contactMe">
              Contact me
            </a>
            <SocialIconContainer lang={lang} />
          </div>
        </div>
        <div id="rightHero">
          <div className="el el1"></div>
          <div className="el el2"></div>
          <div className="el el3"></div>
          <div className="el el4"></div>
          <div className="el el5"></div>
          <div className="el el6"></div>
          <div className="el el7"></div>
          <div className="el el8"></div>
        </div>
      </div>
    );
  }
};
export default Hero;
