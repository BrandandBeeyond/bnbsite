import React from "react";
import dotImage from '../../images/logos/dots.png';

const About = () => {
  return (
    <section className="">
      <div className="row align-items-center">
        <div className="col-lg-5 d-flex justify-content-center align-items-center position-relative">
            <img src={dotImage} className="img-fluid dotted" alt="" />
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about_para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="mt-5">
                <button className="btn mainbtn">
                  Start your project <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="bnb_video position-relative">
              <div className="hexagon-sec d-flex flex-row align-items-end gap-5">
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
