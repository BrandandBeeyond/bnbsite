import React from "react";
import { Element } from "react-scroll";
import Header from "./components/header/Header";
import HexCanvas from "./components/hexcanvas/HexCanvas";
import About from "./components/about/About";
import Counter from "./components/counter/Counter";
import Process from "./components/process/Process";
import Client from "./components/clients/Client";
import WorkSample from "./components/work/WorkSample";
import Faqs from "./components/faq/Faqs";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ProcessMob from "./components/process/ProcessMob";
import WorkSampleMob from "./components/work/WorkSampleMob";

const App = () => {
  return (
    <>
   
      <Header />

     
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

      {/* <Element name="faqs">
        <Faqs />
      </Element> */}

      <Element name="contact">
        <Contact />
      </Element>

      {/* ✅ Footer Section */}
      <Footer />
    </>
  );
};

export default App;
