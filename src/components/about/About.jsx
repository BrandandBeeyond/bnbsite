import React from "react";
import dotImage from "../../images/logos/dots.png";

const About = () => {
  return (
    <section className="">
      <div className="row align-items-center t-up-mob">
        <div className="col-lg-4 d-flex justify-content-center align-items-center position-relative order-md-1 order-3">
          <img
            src={dotImage}
            className="img-fluid dotted d-none d-sm-none d-md-block"
            alt=""
          />
          <div className="row justify-content-center mt-4 mt-sm-3 mt-md-0">
            <div className="col-lg-12 text-center text-sm-start text-md-start">
              <div className="about_para">
                <p>
                  From strategy to storytelling ,<br /> digital to design—we craft <br />
                  Brands Beeyond expectations.
                </p>
              </div>
              <div className="mt-3 mt-sm-4 mt-md-5">
                <button className="btn mainbtn">
                  Start your project <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex justify-content-center order-2 order-md-3">
          <div className="bnb_video position-relative">
            <div className="hexagon-sec d-flex flex-row align-items-start align-items-sm-end  gap-2 gap-sm-3 gap-md-5">
              <div className="hexagon-big order-2"></div>
              <div className="hexagon-small order-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
