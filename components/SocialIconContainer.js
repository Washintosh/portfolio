import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const SocialIconContainer = ({ lang }) => {
  const [message, setMessage] = useState(false);

  const mailClickHandler = () => {
    navigator.clipboard.writeText("wyagualmindiola@gmail.com");
    setMessage(true);
    const timeout = setTimeout(() => {
      setMessage(false);
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  };

  if (lang === "es") {
    return (
      <div className="socialIconContainer">
        <div onClick={mailClickHandler}>
          <div className="socialIcon mailIcon">
            <HiOutlineMail />
          </div>
          <p className={`mailMessage ${message ? "show" : ""}`}>
            Correo electrónico copiado al portapapeles
          </p>
        </div>
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
    );
  } else if (lang === "en") {
    return (
      <div className="socialIconContainer">
        <div onClick={mailClickHandler}>
          <div className="socialIcon mailIcon">
            <HiOutlineMail />
          </div>
          <p className={`mailMessage ${message ? "show" : ""}`}>
            Email address copied to clipboard
          </p>
        </div>
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
    );
  }
};

export default SocialIconContainer;
