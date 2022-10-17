import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Sidebar from "../Sidebar";
import DataScience from "../components/DataScience";
import Services from "../components/Services";

const Home = ({ lang }) => {
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
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Sidebar lang={lang} />
      {/* <Services lang={lang} /> */}
      <DataScience lang={lang} />
      <Contact lang={lang} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const {
    params: { lang },
  } = context;
  return {
    props: { lang },
  };
}
