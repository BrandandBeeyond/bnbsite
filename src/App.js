import React from "react";
import { Link, Element } from "react-scroll";
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

const App = () => {
  return (
    <>
      {/* ✅ Header Section */}
      <Header />

      {/* ✅ Smooth Scrolling Sections */}
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

      <Element name="process">
        <Process />
      </Element>

      <Element name="work">
        <WorkSample />
      </Element>

      <Element name="faqs">
        <Faqs />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      {/* ✅ Footer Section */}
      <Footer />
    </>
  );
};

export default App;
