import React, { useEffect } from "react";
import Header from "./components/header/Header";
import ReactGA from "react-ga4";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";

const App = () => {
  const TRACKING_ID = "G-60G9YGJRFT";
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  useEffect(() => {
   
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });


    const handleLoad = () => AOS.refresh();
    window.addEventListener("load", handleLoad);
    
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      <Header />

      <Home />

      {/* ✅ Footer Section */}
      <Footer />
    </>
  );
};

export default App;
