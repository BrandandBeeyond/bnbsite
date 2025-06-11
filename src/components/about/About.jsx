import React from "react";
import dotImage from "../../images/logos/dots.png";

const About = ({headingRef}) => {
  return (
    <section className="d-none d-sm-none d-md-block">
      
      <div className="row align-items-center">
        <div className="col-lg-4 d-flex justify-content-center align-items-center position-relative order-md-1 order-3">
          <img
            src={dotImage}
            className="img-fluid dotted d-none d-sm-none d-md-block"
            alt=""
          />
          <div className="row justify-content-center mt-4 mt-sm-3 mt-md-0">
            <div className="col-lg-12 text-center text-sm-start text-md-start">
              <div
                className="about_para d-none d-sm-none d-md-block"
                
              >
                <p ref={headingRef}>
                  From strategy to storytelling ,<br /> digital to design—we
                  craft <br />
                  Brands Beeyond expectations.
                </p>
              </div>
              <div className="about_para d-block d-sm-block d-md-none">
                <p>
                  From strategy to storytelling , digital to design—we craft
                  Brands Beeyond expectations.
                </p>
              </div>
              <div className="mt-3 mt-sm-4 mt-md-5"data-aos="fade-up" data-aos-offset="100" data-aos-duration="4000">
                <button
                  className="btn mainbtn"
                  
                >
                  Start your project <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex justify-content-center order-2 order-md-3">
          <div className="bnb_video position-relative">
            <video width="100%" height="100%" autoPlay muted loop>
              <source
                src={require("../../video/bgvideo.mp4")}
                type="video/mp4"
              />
            </video>
            <div className="hexagon-sec d-flex flex-row align-items-start align-items-sm-end  gap-2 gap-sm-3 gap-md-5">
              {/* <div className=""></div> */}
              <img
                src={require("../../images/big-hex.png")}
                className="img-fluid order-2"
                alt=""
              />
              <img
                src={require("../../images/small-hex.png")}
                className="img-fluid order-1"
                alt=""
              />
              {/* <div className="hexagon-small order-1"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
