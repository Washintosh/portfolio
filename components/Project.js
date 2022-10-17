const Project = ({ img, name, tech }) => {
  return (
    <article className="data-science-project-container">
      <div className="data-science-project-container-rightSide">
        <h3 className="project-name">{name}</h3>
        <div>
          {tech.map((i, index) => {
            return <span key={`${name}-tech-${index}`}>{i}</span>;
          })}
        </div>
      </div>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
    </article>
  );
};

export default Project;
