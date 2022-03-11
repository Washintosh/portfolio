import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("Click to copy");
  const heroRef = useRef(null);
  useEffect(() => {
    for (let i = 0; i < heroRef.current.children.length; i++) {
      heroRef.current.children[i].classList.add("show");
    }
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <h1>Washington</h1>
      <h2>Full Stack Developer</h2>
      <span className="heroSpan">Available for work</span>
      <div className="socialIconContainer">
        <a
          href="https://www.linkedin.com/in/washington-xavier-yagual-mindiola-42a811215/"
          target="_blank"
          className="socialIcon"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Washintosh"
          target="_blank"
          className="socialIcon"
        >
          <AiFillGithub />
        </a>
      </div>
      <div
        className="mailContainer"
        onClick={() => {
          navigator.clipboard.writeText("wyagualmindiola@gmail.com");
          setMessage("Copied to clipboard");
        }}
        onMouseEnter={() => {
          setAlert(true);
        }}
        onMouseLeave={() => {
          setAlert(false);
          setMessage("Click to copy");
        }}
      >
        <div className="mailIcon">
          <HiOutlineMail />
        </div>
        <div className="mailAddress"></div>
        <p
          className={`${
            alert
              ? message === "Copied to clipboard"
                ? "mailAlert show correct"
                : "mailAlert show"
              : "mailAlert"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};
export default Hero;
