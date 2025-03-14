import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import About from "../components/about/About";
import Counter from "../components/counter/Counter";
import Client from "../components/clients/Client";
import { Element } from "react-scroll";
import Services from "../components/services/Services";
import Process from "../components/process/Process";
import ProcessMob from "../components/process/ProcessMob";
import WorkSample from "../components/work/WorkSample";
import WorkSampleMob from "../components/work/WorkSampleMob";
import Faqs from "../components/faq/Faqs";
import Contact from "../components/contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Best Web Development Company in Nashik - Brandandbeeyond</title>
        {/* <link rel="canonical" href="https://brandandbeeyond.com/" /> */}
        
      </Helmet>
      <h1 className="visual-hidden">Best web development company in Nashik</h1>

      <Element name="hexcanvas">
        <HexCanvas />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="counter">
        <Counter />
      </Element>

      <Element name="client">
        <Client />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="process" className="d-none d-sm-none d-md-block">
        <Process />
      </Element>
      <Element name="processmob" className="d-block d-sm-block d-md-none">
        <ProcessMob />
      </Element>

      <Element name="work" className="d-none d-sm-block d-md-block">
        <WorkSample />
      </Element>
      <Element name="workmob" className="d-block d-sm-none d-md-none">
        <WorkSampleMob />
      </Element>

      <Element name="faqs">
        <Faqs />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Home;
