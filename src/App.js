import React, { useEffect } from "react";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });

    window.addEventListener("load", AOS.refresh);
    return () => window.removeEventListener("load", AOS.refresh);
  }, []);

  return (
    <>
      <Header />

      <Home/>
    
      {/* ✅ Footer Section */}
      <Footer />
    </>
  );
};

export default App;
