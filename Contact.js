import { useEffect, useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [alert, setAlert] = useState(false);
  const contactTitleRef = useRef(null);
  const [message, setMessage] = useState(translate("Click to copy"));
  const [formAlert, setFormAlert] = useState({
    show: false,
    message: "",
    success: true,
  });

  const [formName, setFormName] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const contactFormRef = useRef(null);
  const contactArticleRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7vd576",
        "template_08fzisr",
        contactFormRef.current,
        "tKEiZ76dsKiG_lqYR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS");
          setFormName("");
          setFormSubject("");
          setFormEmail("");
          setFormMessage("");
          setFormAlert({
            show: true,
            message: "The mail was successfully sent",
            success: true,
          });
        },
        (error) => {
          console.log(error.text);
          console.log("ERROR");
          setFormAlert({
            show: true,
            message: "The mail was not able to be sent",
            success: false,
          });
        }
      );
  };

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY < 690) contactTitleRef.current.style.right = `-600px`;
      else {
        contactTitleRef.current.style.right = `${window.scrollY - 590}px`;
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  });

  useEffect(() => {
    const verifyVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // closeProjects();
        } else {
          // openProjects();
          entry.target.classList.remove("show");
        }
      });
    };
    const observer = new IntersectionObserver(verifyVisibility, {
      rootMargin: "300px",
    });
    observer.observe(contactFormRef.current);
    observer.observe(contactArticleRef.current);
  }, []);

  useEffect(() => {
    if (formAlert.show) {
      const timeout = setTimeout(
        () => setFormAlert((prev) => ({ ...prev, show: false })),
        1500
      );
      return () => clearTimeout(timeout);
    }
  }, [formAlert.show]);

  return (
    <div className="contact" id="contact">
      <div
        className={`${
          formAlert.show
            ? formAlert.success
              ? "formAlert show success"
              : "formAlert show error"
            : formAlert.success
            ? "formAlert success"
            : "formAlert error"
        }`}
      >
        {formAlert.message}
      </div>
      <h2 className="contactTitle" ref={contactTitleRef}>
        contact
      </h2>
      <form className="contactForm" ref={contactFormRef} onSubmit={sendEmail}>
        <label htmlFor="name">
          <input
            name="user_name"
            id="name"
            placeholder=" "
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <p>{translate("name")}</p>
        </label>
        <label htmlFor="subject">
          <input
            name="user_subject"
            id="subject"
            placeholder=" "
            value={formSubject}
            onChange={(e) => setFormSubject(e.target.value)}
          />
          <p>Subject</p>
        </label>
        <label htmlFor="email">
          <input
            name="user_email"
            id="email"
            placeholder=" "
            type="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
          />
          <p>email</p>
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
          />
          <p>message</p>
        </label>
        <button>send</button>
        {alert}
      </form>
      <article className="contactArticle" ref={contactArticleRef}>
        <div>
          <h3>Are you interested?</h3>
          <h3>Let's get in touch !</h3>
        </div>
        <div>
          <p>I'm open to freelance opportunities or remote position.</p>
          <p>Let's work together.</p>
          <p>Feel free to send an email.</p>
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
      </article>
    </div>
  );
};

export default Contact;
