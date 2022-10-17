const LANGUAGES = {
  es: "Español",
  en: "English",
};

const DATA_SCIENCE_TECHS = {
  excel: {
    name: "Microsoft Excel",
    icon: "excel_icon.png",
  },
  powerbi: {
    name: "Power BI",
    icon: "powerbi_icon.png",
  },
  python: {
    name: "Python",
    icon: "python_icon.png",
  },
};

const DATA_SCIENCE_PROJECTS = [
  {
    id: "data-science-project-1",
    tech: ["Power BI", "Microsoft Excel"],
    name: "Dashboard FARMERS S.A.",
    img: "dashboard-farmer.png",
  },
  {
    id: "data-science-project-2",
    tech: ["Power BI", "Microsoft Excel"],
    name: "Dashboard Venta de Videojuegos",
    img: "dashboard-videojuegos.png",
  },
  {
    id: "data-science-project-3",
    tech: ["Power BI", "Microsoft Excel"],
    name: "Dashboard Ventas Regionales",
    img: "dashboard-ventas.png",
  },
  {
    id: "data-science-project-4",
    tech: ["Power BI", "Microsoft Excel"],
    name: "Dashboard Recursos Humanos",
    img: "dashboard-hr.png",
  },
  {
    id: "data-science-project-5",
    tech: ["Power BI", "Microsoft Excel"],
    name: "Dashboard Gestión de Proyectos",
    img: "dashboard-pm.png",
  },
];

module.exports = { LANGUAGES, DATA_SCIENCE_TECHS, DATA_SCIENCE_PROJECTS };
