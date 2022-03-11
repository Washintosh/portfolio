import Head from "next/head";
import Hero from "../Hero";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Contact from "../Contact";
import Sidebar from "../Sidebar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Washington Yagual</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Washington Yagual" />
        {/* Add description and  keywords */}
        <meta name="description" content="" />
        <meta name="keywords" content="HTML CSS JavaScript" />
      </Head>
      <Navbar />
      <Hero />
      <Sidebar />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
