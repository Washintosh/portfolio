import netflix01 from "./public/netflix01.png";
import netflix02 from "./public/netflix02.png";
import netflix03 from "./public/netflix03.png";
import netflix04 from "./public/netflix04.png";
import netflix05 from "./public/netflix05.png";
import netflix06 from "./public/netflix06.png";
import netflix07 from "./public/netflix07.png";
import netflixAdmin01 from "./public/netflixAdmin01.png";
import netflixAdmin02 from "./public/netflixAdmin02.png";
import netflixAdmin03 from "./public/netflixAdmin03.png";
import netflixAdmin04 from "./public/netflixAdmin04.png";
import netflixAdmin05 from "./public/netflixAdmin05.png";
const projectsInfo = [
  {
    number: 1,
    name: "Netflix clone",
    source: "https://github.com/Washintosh/netflix/tree/client",
    link: "https://netflix-client-washington.netlify.app/",
    description:
      "Website to watch different movies or series filtered by genre and authenticated login. Responsive dessign.",
    technologies: ["Node.js", "React", "Express", "Firebase", "Mongodb"],
    images: [
      netflix01,
      netflix02,
      netflix03,
      netflix04,
      netflix05,
      netflix06,
      netflix07,
    ],
  },
  {
    number: 2,
    name: "Netflix Admin",
    source: "https://github.com/Washintosh/netflix/tree/admin",
    link: "https://netflix-admin-washington.netlify.app/",
    description:
      "Website to add, delete, update or get all movies or series to the Netflix clone platform. Also gives new users registered.",
    technologies: [
      "Node.js",
      "React",
      "Express",
      "Firebase",
      "Mongodb",
      "Material UI",
    ],
    images: [
      netflixAdmin01,
      netflixAdmin02,
      netflixAdmin03,
      netflixAdmin04,
      netflixAdmin05,
    ],
  },
];

export default projectsInfo;
