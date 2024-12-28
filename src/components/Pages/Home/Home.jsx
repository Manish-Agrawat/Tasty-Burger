import React from "react";
import Layout from "../../Layouts/Layout";
import Section from "./Section";
import "../../styles/Home.css";
import About from "./About";
import Menu from "./Menu";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Layout>
        <Section />
        <About />
        <Menu />
        <Section4 />
        <Section5 />
        <Blog />
       <Contact/>
      </Layout>
    </>
  );
};

export default Home;
