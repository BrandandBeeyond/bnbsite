import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "./components/header/Header";
import ReactGA from "react-ga4";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import LogoDesign from "./pages/Services/LogoDesign";
import WebsiteDesign from "./pages/Services/WebsiteDesign";
import SocialMedia from "./pages/Services/SocialMedia";
import Googlemybusiness from "./pages/Services/Googlemybusiness";
import PrintMediadesigns from "./pages/Services/PrintMediadesigns";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import Sidebar from "./components/header/Sidebar";
import Blogs from "./pages/Blogs";
import ScrollTrigger from "gsap/ScrollTrigger";
import StrategicBrandingBlog from "./pages/Blogs/why_your_business_needs_strategic_branding";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const TRACKING_ID = "G-8TTH8GV3LY";
  const location = useLocation();
  const smoothRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

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

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    if (!smoothRef.current) {
      smoothRef.current = ScrollSmoother.create({
        wrapper,
        content,
        smooth: 0.8,
        effects: true,
      });
    } else {
      smoothRef.current.scrollTo(0, true);
    }
  }, [location.pathname]);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <main className="overflow-x-hidden">
            <Header toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/logodesign" element={<LogoDesign />} />
              <Route path="/websitedesign" element={<WebsiteDesign />} />
              <Route path="/socialmedia" element={<SocialMedia />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/googlemybusiness" element={<Googlemybusiness />} />
              <Route path="/printmediadesigns" element={<PrintMediadesigns />} />
              <Route path="/why_your_business_needs_strategic_branding" element={<StrategicBrandingBlog />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;