import React, { useEffect } from "react";
import Header from "./components/header/Header";
import HexCanvas from "./components/hexcanvas/HexCanvas";
import About from "./components/about/About";
import Counter from "./components/counter/Counter";
import Process from "./components/process/Process";
import Client from "./components/clients/Client";
import WorkSample from "./components/work/WorkSample";
import Faqs from "./components/faq/Faqs";
import Services from "./components/services/Services";
import gsap from "gsap/all";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



const App = () => {

  gsap.registerPlugin(ScrollSmoother);

  useEffect(()=>{
      ScrollSmoother.create({
        wrapper:'#smooth-wrapper',
        content:'#smooth-content',
        smooth:2,
        effects:true
      })
  },[])


  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <HexCanvas />
          <About />
          <Counter />
          <Client/>
          <Services/>
          <Process/>
          <WorkSample/>
          <Faqs/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;
