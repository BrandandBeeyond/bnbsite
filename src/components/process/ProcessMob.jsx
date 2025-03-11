import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const ProcessMob = () => {
  const containerRef = useRef(null);
  const hexagonsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Start pinning as soon as the section reaches the top
        end: "+=400", 
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
          <h4 className="section_head text-center mt-20">our process</h4>
          <div className="col-lg-10">
            <div className="hex-container-mob" ref={containerRef}>

            <div className="hex-wrapper position-relative">
                <div className="hexagon-dumb hex-dumb-mob-1"></div>
              </div>

              <div className="hex-wrapper position-relative">
                <div
                  ref={(el) => (hexagonsRef.current[0] = el)}
                  className="hexagon hex-1-mob"
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
                  className="hexagon hex-2-mob"
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
                      <p>
                        Brainstorm ideas and Create wireframes, mood boards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hex-wrapper position-relative">
                <div
                  ref={(el) => (hexagonsRef.current[2] = el)}
                  className="hexagon hex-3-mob"
                >
                  <div className="hex-content">
                    <div className="hex-num">
                      <span>03</span>
                    </div>
                    <h3 className="hex-title">
                      Design <br /> & Development
                    </h3>
                    <div className="hex-para">
                      <p>
                        Brainstorm ideas and Create wireframes, mood boards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hex-wrapper position-relative">
                <div
                  ref={(el) => (hexagonsRef.current[3] = el)}
                  className="hexagon hex-4-mob"
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
                <div
                  ref={(el) => (hexagonsRef.current[4] = el)}
                  className="hexagon hex-5-mob"
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
                <div className="hexagon-dumb hex-dumb-mob-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessMob;
