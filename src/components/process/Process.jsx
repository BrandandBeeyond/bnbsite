import React, { useEffect, useRef } from "react";
import "./process.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Process = () => {
  const containerRef = useRef(null);
  const hexagonsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Start pinning as soon as the section reaches the top
        end: "+=900", // Keeps the section pinned for some time
        scrub: 1,
        pin: true, 
        pinSpacing: false, // Ensures the next section doesn’t push up
        anticipatePin: 1,
      },
    });
  
    // Delay before scrolling resumes
    tl.to({}, { duration: 3 }); // Holds for 3 seconds
  
    hexagonsRef.current.forEach((hex, index) => {
      tl.to(hex, {
        backgroundColor: "#FFBB00",
        duration: 1,
        delay: index * 1.5,
      });
    });
  
    ScrollTrigger.refresh();
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  

  return (
    <section className="pt-2">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h4 className="section_head mt-20"data-aos="fade-up" data-aos-delay="80">our process</h4>
          <div className="col-lg-12">
            <div className="hex-container" ref={containerRef}>
              <div className="hex-wrapper position-relative">
                <div className="hexagon-dumb hex-dumb"></div>
              </div>
              <div className="hex-wrapper position-relative">
                <div className="hexagon-dumb-small hex-dumb-1"></div>
                <div className="hexagon-dumb-small hex-dumb-2"></div>
                <div
                  ref={(el) => (hexagonsRef.current[0] = el)}
                  className="hexagon hex-1"
                >
                  <div className="hex-content">
                    <div className="hex-num">
                      <span>01</span>
                    </div>
                    <h3 className="hex-title">
                      Research <br /> & Planning
                    </h3>
                    <div className="hex-para">
                      <p>Understand the problem, goals, and target audience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hex-wrapper position-relative">
                <div
                  ref={(el) => (hexagonsRef.current[1] = el)}
                  className="hexagon hex-2"
                >
                  <div className="hex-content">
                    <div className="hex-num">
                      <span>02</span>
                    </div>
                    <h3 className="hex-title">
                      Concept
                      <br /> & Ideation
                    </h3>
                    <div className="hex-para">
                      <p>Brainstorm ideas and Create wireframes, mood boards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hex-wrapper position-relative">
                <div className="hexagon-dumb-mid hex-dumb-1"></div>
                <div className="hexagon-dumb-mid hex-dumb-2"></div>
                <div className="hexagon-dumb-mid hex-dumb-3"></div>
                <div
                  ref={(el) => (hexagonsRef.current[2] = el)}
                  className="hexagon hex-3"
                >
                  <div className="hex-content">
                    <div className="hex-num">
                      <span>03</span>
                    </div>
                    <h3 className="hex-title">
                      Design <br /> & Development
                    </h3>
                    <div className="hex-para">
                      <p>Brainstorm ideas and Create wireframes, mood boards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hex-wrapper position-relative">
                <div
                  ref={(el) => (hexagonsRef.current[3] = el)}
                  className="hexagon hex-4"
                >
                  <div className="hex-content">
                    <div className="hex-num">
                      <span>04</span>
                    </div>
                    <h3 className="hex-title">
                      Testing <br /> & Feedback
                    </h3>
                    <div className="hex-para">
                      <p>Gather feedback from users, stakeholders.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hex-wrapper position-relative">
                <div className="hexagon-dumb-small hex-dumb-3"></div>
                <div className="hexagon-dumb-xssmall hex-dumb-4"></div>
                <div className="hexagon-dumb-xssmall hex-dumb-5"></div>
                <div
                  ref={(el) => (hexagonsRef.current[4] = el)}
                  className="hexagon hex-5"
                >
                  <div className="hex-content">
                    <div className="hex-num">
                      <span>05</span>
                    </div>
                    <h3 className="hex-title">
                      Review <br /> & Finalization
                    </h3>
                    <div className="hex-para">
                      <p>Launch, implement, or publish the design.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hex-wrapper position-relative">
                <div className="hexagon-dumb hex-dumb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
