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
        start: "top top",
        end: "+=1800px",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin:1
      },
    });

    hexagonsRef.current.forEach((hex, index) => {
      tl.to(hex, {
        backgroundColor: "#FFBB00",
        duration: 1,
        delay: index * 1.5,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="pt-2">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h4 className="section_head mt-20">our process</h4>
          <div className="col-lg-12">
            <div className="hex-container" ref={containerRef}>
              <div className="position-relative">
                <svg
                  width="167"
                  height="110"
                  viewBox="0 0 167 110"
                  fill="none"
                  className="connectPath"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.819625 1.74313C0.819625 1.74313 67.6764 7.60791 102.842 31.6393C135.691 54.0875 164.82 108.743 164.82 108.743"
                    stroke="white"
                    stroke-width="3"
                    stroke-dasharray="6 6"
                  />
                </svg>

                <div
                  ref={(el) => (hexagonsRef.current[0] = el)}
                  className="hexagon hex-1"
                >
                  <h3 className="hex-title">
                    Research <br /> & Planning
                  </h3>
                </div>
              </div>

              <div className="position-relative">
                <svg
                  width="167"
                  height="110"
                  viewBox="0 0 167 110"
                  fill="none"
                  className="connectPath2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.819625 1.74313C0.819625 1.74313 67.6764 7.60791 102.842 31.6393C135.691 54.0875 164.82 108.743 164.82 108.743"
                    stroke="white"
                    stroke-width="3"
                    stroke-dasharray="6 6"
                  />
                </svg>
                <div
                  ref={(el) => (hexagonsRef.current[1] = el)}
                  className="hexagon hex-2"
                >
                  <h3 className="hex-title">
                    Concept
                    <br /> & Ideation
                  </h3>
                </div>
              </div>

              <div className="position-relative">
                <svg
                  width="167"
                  height="110"
                  viewBox="0 0 167 110"
                  fill="none"
                  className="connectPath3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.819625 1.74313C0.819625 1.74313 67.6764 7.60791 102.842 31.6393C135.691 54.0875 164.82 108.743 164.82 108.743"
                    stroke="white"
                    stroke-width="3"
                    stroke-dasharray="6 6"
                  />
                </svg>
                <div
                  ref={(el) => (hexagonsRef.current[2] = el)}
                  className="hexagon hex-3"
                >
                  <h3 className="hex-title">
                    {" "}
                    Design <br /> & Development
                  </h3>
                </div>
              </div>

              <div
                ref={(el) => (hexagonsRef.current[3] = el)}
                className="hexagon hex-4"
              >
                <h3 className="hex-title">
                  Review <br /> & Finalization
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;



// .hex-container {
//     position: relative;
//     display: flex;
//     gap: 50px;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 700px;
//   }
  
//   /* Hexagon Styling */
//   .hexagon {
//     width: 270px;
//     height: 300px;
//     background-color: #d9d9d9;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     transition: background-color 0.3s ease;
//     padding: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .hex-1 {
//     transform: translateY(-80px);
//   }
//   .hex-2 {
//     transform: translateY(80px);
//   }
//   .hex-3 {
//     transform: translateY(-80px);
//   }
//   .hex-4 {
//     transform: translateY(80px);
//   }
  
//   /* Active Hexagon */
//   .hex-active {
//     background-color: #ffbb00;
//   }
  
//   /* Specific Line Positions */
//   .line-1 {
//     top: 50%;
//     left: 270px;
//     transform: translateY(-50%);
//   }
  
//   .line-2 {
//     top: 30%;
//     left: 620px;
//   }
  
//   .line-3 {
//     top: 60%;
//     left: 970px;
//   }
//   .hex-title {
//       font-family: "Inter", sans-serif;
//     font-weight: 700;
//     font-size: 24px;
//     line-height: 100%;
//     letter-spacing: 0%;
//     text-align: center;
//     text-transform: uppercase;
//   }
//   .hex-line-1{
//       position: absolute;
//       top:20%;
//       right: -100px;
     
//   }
  
//   .connectPath{
//       position: absolute;
//       right: -110px;
//       top: 30px;
//   }
  
//   .connectPath2 {
//       position: absolute;
//       right: -170px;
//       top: 129px;
//       transform: rotate(112.46deg);
//   }
//   .connectPath3 {
//       position: absolute;
//       right: -110px;
//       top: 30px;
//   }
  