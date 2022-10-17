const Services = ({ lang }) => {
  if (lang === "es") {
    return (
      <section id="services-section">
        <h2>Servicios</h2>
      </section>
    );
  } else if (lang === "en") {
    return (
      <section id="services-section">
        <h2>Services</h2>
      </section>
    );
  }
};

export default Services;
