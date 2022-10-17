import SocialIconContainer from "./SocialIconContainer";
import ContactForm from "./ContactForm";

const Contact = ({ lang }) => {
  if (lang === "es") {
    return (
      <div id="contact">
        <ContactForm lang={lang} />
        <article className="contactArticle">
          <div>
            <p>¿Estás interesado?</p>
            <span>Hazmelo saber!</span>
            <p>Estoy abierto a cualquier oportunidad remota o freelance.</p>
            <p>Trabajemos juntos.</p>
            <p>Siéntete libre de enviar un correo.</p>
          </div>
          <SocialIconContainer lang={lang} />
        </article>
      </div>
    );
  } else if (lang === "en") {
    return (
      <div className="contact" id="contact">
        <ContactForm lang={lang} />
        <article className="contactArticle">
          <div>
            <p>Are you interested?</p>
            <span>Let&apos;s get in touch !</span>
            <p>I&apos;m open to freelance opportunities or remote position.</p>
            <p>Let&apos;s work together.</p>
            <p>Feel free to send an email.</p>
          </div>
          <SocialIconContainer lang={lang} />
        </article>
      </div>
    );
  }
};

export default Contact;
