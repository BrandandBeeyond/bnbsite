import React, { useEffect, useRef, useState } from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import Contact from "../components/contact/Contact";
import Marquee from "react-fast-marquee";
import Ae from "../images/softwares/adobe elustrator.svg";
import ps from "../images/softwares/photoshop.svg";
import lr from "../images/softwares/lightrome.svg";
import pr from "../images/softwares/premier pro.svg";
import capcut from "../images/softwares/capcut.svg";
import xd from "../images/softwares/xd.svg";
import Aftereffects from "../images/softwares/aftereffect.svg";
import filmora from "../images/softwares/filmora.svg";
import canva from "../images/softwares/canva.svg";
import blender from "../images/softwares/blender.svg";
import figma from "../images/softwares/figma.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const needsRedrawRef = useRef(false);
  let hexagons = [];
  const navigate = useNavigate();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 useEffect(() => {
    // Create the custom cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    cursor.innerText = "View More";
    document.body.appendChild(cursor);

    // Function to update cursor position
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Select all cards to apply hover effect
    const cards = document.querySelectorAll(".service-detailcard");

    // Add events to each card
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        cursor.style.display = "flex";
      });
      card.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
      });
      card.addEventListener("mousemove", moveCursor);
    });

    // Cleanup
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
        card.removeEventListener("mousemove", moveCursor);
      });
      document.body.removeChild(cursor);
    };
  }, []);
  const services = [
    {
      title: "WEBSITE DEVELOPMENT & WEB SEO",
      detailedService: ["Website Design", "App Design", "Website Audit"],
      image: require("../images/services/webdev.png"),
      shortDesc: "Your brand deserves to be seen — beautifully and powerfully.",
      serviceDescription:
        'At Brand and Beeyond, we craft websites that do more than exist — they perform. From sleek design to seamless functionality, every site we build is tailored to reflect your brand’s purpose and potential. But performance doesn’t stop at aesthetics — our integrated SEO strategies ensure your website ranks higher, attracts the right audience, and converts clicks into loyal customers.',
       url:'/websitedesign'
      },
    {
      title: "Social Media",
      detailedService: [
        "Social Media Advertising",
        "Social Media Management",
        "Content Creation",
      ],
      image: require("../images/services/social.png"),
      shortDesc: "Your brand deserves more than likes — it deserves loyalty.",
      serviceDescription:
        "At Brand and Beeyond, we don’t just create content; we craft conversations. From aesthetic feeds and scroll-stopping reels to targeted ad campaigns, we help you build a community that clicks, connects, and converts. Let’s turn your social presence into brand power.",
       url:'/socialmedia'
      },
    {
      title: "google my business",
      detailedService: ["Insights & Reporting", "GMB Setup & Optimization"],
      image: require("../images/services/gmb.png"),
      shortDesc: "Be the brand they find — and trust.",
      serviceDescription:
        "Your GMB profile is your digital storefront. We optimize it to boost local visibility, drive calls, map visits, and build instant credibility. From strategic keywords and reviews to engaging visuals and regular updates — we make sure you rank higher and convert faster. Because first impressions on Google shouldn’t be left to chance.",
       url:'/googlemybusiness'
      },
    {
      title: "brand design",
      detailedService: [
        "Packaging design",
        "Stationary design",
        "Visual Identity",
        "Logo Design",
      ],
      image: require("../images/services/social.png"),
      shortDesc: "Crafting Logos That Speak for Your Brand.",
      serviceDescription:
        "Your brand deserves a logo that speaks louder than words.We don’t just design logos — we design symbols of trust, purpose, and power.At Brand and Beeyond, every logo is built with meaning, strategy, and memorability — crafted to leave a lasting impression in a single glance.It’s not just a mark. It’s your identity — simplified.",
       url:'/logodesign'
      },
    {
      title: "Print media designs",
      detailedService: [
        "Merchandise Design",
        "Publication Design",
        "Corporate Stationary",
        "Brochure design",
      ],
      image: require("../images/services/printmedia.png"),
      shortDesc: "Designs that don’t just speak — they stay.",
      serviceDescription:
        "From brochures and flyers to packaging and standees, we create print designs that captivate on paper and leave a lasting brand impression. With attention to detail, brand alignment, and high-impact visuals, we bring your offline presence to life — beautifully and boldly.Because good design doesn’t end at the screen",
       url:'/printmediadesigns'
      },
    {
      title: "Business strategy",
      detailedService: ["Brand Personality", "Brand Positioning"],
      image: require("../images/services/brandstrategy.png"),
      shortDesc: "A business without strategy is just noise.",
      serviceDescription:
        "We dig deep to uncover your purpose, position your value, and shape a brand that’s clear, consistent, and unforgettable. From defining your business DNA to mapping customer journeys, we craft strategies that drive connection, clarity, and conversion.",
       url:'https://businessandbeeyond.com'
      },
  ];

  useEffect(() => {
    const canvas = canvasRef.current.getContext("2d");
    const canvasElement = canvasRef.current;
    let [canvW, canvH] = [window.innerWidth, window.innerHeight];
    const size = 20;
    const xinc = size * Math.sin(Math.PI / 3) * 2;
    const yinc = size * 1.5;

    const setCanvasSize = () => {
      canvW = window.innerWidth;
      canvH = 525;
      canvasElement.width = canvW;
      canvasElement.height = canvH;
      createHexGrid();
    };

    const createHexGrid = () => {
      hexagons = [];
      for (let y = 0; y < canvH / yinc; y++) {
        for (let x = y % 2 === 0 ? 0 : xinc / 2; x < canvW; x += xinc) {
          hexagons.push({
            x,
            y: y * yinc,
            hoverState: 0,
            opacity: 0.5,
            lineWidth: 3.5,
          });
        }
      }
      needsRedrawRef.current = true;
    };

    const drawHexagon = (x, y, hoverState, opacity, lineWidth) => {
      canvas.beginPath();
      for (let side = 0; side > -7; side--) {
        const x2 = x + size * Math.sin((side * 2 * Math.PI) / 6);
        const y2 = y + size * Math.cos((side * 2 * Math.PI) / 6);
        canvas.lineTo(x2, y2);
      }
      canvas.fillStyle = hoverState === 1 ? "rgba(24,24,24,0.8)" : "#181818";
      canvas.fill();
      canvas.globalAlpha = opacity;
      canvas.strokeStyle =
        hoverState === 2
          ? "#FFD53F"
          : hoverState === 1
          ? "rgba(244,215,116,1)"
          : "#555";
      canvas.lineWidth = lineWidth;
      canvas.stroke();
      canvas.globalAlpha = 1;
    };

    const redraw = () => {
      if (!needsRedrawRef.current) return;
      canvas.clearRect(0, 0, canvW, canvH);
      hexagons.forEach(({ x, y, hoverState, opacity, lineWidth }) =>
        drawHexagon(x, y, hoverState, opacity, lineWidth)
      );
      needsRedrawRef.current = false;
    };

    const handleMouseMove = (event) => {
      const now = performance.now();
      if (now - lastMouseMove < 50) return;
      lastMouseMove = now;

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      hexagons.forEach((hex) => {
        const distance = Math.sqrt(
          (mouseX - hex.x) ** 2 + (mouseY - hex.y) ** 2
        );
        const newHoverState =
          distance < size * 1.5 ? 2 : distance < size * 6 ? 1 : 0;
        if (hex.hoverState !== newHoverState) {
          hex.hoverState = newHoverState;
          needsRedrawRef.current = true;
        }
      });
    };

    let lastMouseMove = 0;
    const animate = () => {
      redraw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", setCanvasSize);
    canvasElement.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    setCanvasSize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", setCanvasSize);
      canvasElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const softwares = [
    { name: "Adobe Illustrator", logo: Ae },
    { name: "Photoshop", logo: ps },
    { name: "Lightroom", logo: lr },
    { name: "Premiere Pro", logo: pr },
    { name: "CapCut", logo: capcut },
    { name: "Adobe XD", logo: xd },
    { name: "After Effects", logo: Aftereffects },
    { name: "Filmora", logo: filmora },
    { name: "Canva", logo: canva },
    { name: "Blender", logo: blender },
    { name: "Figma", logo: figma },
  ];

  return (
    <>
      <HexCanvas title="our services" />

      <section className="servicespage interff mt-5">
        <div className="container-fluid">
          <h2 className="serviceText text-white text-center text-sm-start">Our Services</h2>

          <div className="mt-5 d-flex flex-column gap-5">
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`service-detailcard d-flex justify-content-between align-items-center transition-all ${isOpen ? "open" : ""}`}
                  key={index}
                  onClick={() => toggleService(index)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={service.image} className="img-fluid ms-1 ms-sm-2 ms-md-5" alt="" />

                  <div className="detail-content text-white text-end">
                    <h3 className="service_head1">{service.title}</h3>
                    <div className="mt-3">
                      <p className="interff serviceshort d-none d-sm-none d-md-block">
                        {service.shortDesc}
                      </p>
                      <div className="d-flex flex-wrap justify-content-center justify-content-sm-end gap-1 gap-sm-3">
                        {service.detailedService.map((subservice, index) => (
                          <div className="mt-1 mt-sm-3" key={index}>
                            <span className="subservices-tab interff">
                              {subservice}
                            </span>
                          </div>
                        ))}

                        <div className={`content-wrapper ${isOpen ? "expand":"collapse"}`}>
                          <div className="row justify-content-end mt-3">
                            <div className="col-lg-7">
                              <p className="interff serviceLong">
                                {service.serviceDescription}
                              </p>
                              <div className="text-end mt-4">
                                <button className="know-more-btn" onClick={(e)=>{
                                   e.stopPropagation();

                                   if(service.title.toLowerCase() === "business strategy"){
                                      window.open(service.url,"_blank")
                                   }else{
                                     navigate(service.url)
                                   }
                                }}>
                                  Know More <i class="bi bi-chevron-right"></i>
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="links">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>

      <div className="position-relative client_bannner  py-15">
        <canvas
          ref={canvasRef}
          className="client_banner_hex d-none d-sm-none d-md-block"
          style={{ pointerEvents: "none" }}
        />
        <h4 className="client_head">Software We Work On
</h4>
        <div className="marquee-softs">
          <Marquee autoFill={true} speed={50} pauseOnHover={true}>
            {softwares.map((item, i) => (
              <div className="brand-logo-wrapper" key={i}>
                <img
                  src={item.logo}
                  className={`img-fluid ${item.size}`}
                  width={150}
                  alt="Client Logo"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Services;
