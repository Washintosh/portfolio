import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ lang }) => {
  const [formName, setFormName] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [alert, setFormAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const contactFormRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    if (lang === "es") {
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
              message: "El correo fue enviado exitosamente",
              success: true,
            });
            setTimeout(() => {
              setFormAlert({
                show: false,
                message: "El correo fue enviado exitosamente",
                success: true,
              });
            }, 2500);
          },
          (error) => {
            console.log(error.text);
            console.log("ERROR");
            setFormAlert({
              show: true,
              message: "El correo no pudo ser enviado",
              success: false,
            });
            setTimeout(() => {
              setFormAlert({
                show: false,
                message: "El correo no pudo ser enviado",
                success: true,
              });
            }, 2500);
          }
        );
    } else if (lang === "en") {
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
            setTimeout(() => {
              setFormAlert({
                show: false,
                message: "The mail was successfully sent",
                success: true,
              });
            }, 2500);
          },
          (error) => {
            console.log(error.text);
            console.log("ERROR");
            setFormAlert({
              show: true,
              message: "The mail was not able to be sent",
              success: false,
            });
            setTimeout(() => {
              setFormAlert({
                show: false,
                message: "The mail was not able to be sent",
                success: true,
              });
            }, 2500);
          }
        );
    }
  };
  if (lang === "es") {
    return (
      <form className="contactForm" ref={contactFormRef} onSubmit={sendEmail}>
        <label htmlFor="name">
          <input
            name="user_name"
            id="name"
            placeholder=" "
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <p>nombre</p>
        </label>
        <label htmlFor="subject">
          <input
            name="user_subject"
            id="subject"
            placeholder=" "
            value={formSubject}
            onChange={(e) => setFormSubject(e.target.value)}
          />
          <p>asunto</p>
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
          <p>correo electrónico</p>
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
          />
          <p>mensaje</p>
        </label>
        <button>enviar</button>
        <p id="alert" className={`${alert.show ? "show" : ""}`}>
          {alert.message}
        </p>
      </form>
    );
  } else if (lang === "en") {
    return (
      <form className="contactForm" ref={contactFormRef} onSubmit={sendEmail}>
        <label htmlFor="name">
          <input
            name="user_name"
            id="name"
            placeholder=" "
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <p>name</p>
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
      </form>
    );
  }
};

export default ContactForm;
