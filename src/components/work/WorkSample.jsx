import React, { useEffect, useRef } from "react";
import "./worksample.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const WorkSample = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let device_width = window.innerWidth;

    if (device_width > 100) {
      const sections = gsap.utils.toArray(".h-section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 0.95),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=2300",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
          onEnter: () => {},
          onLeave: () => {},
          onLeaveBack: () => {},
          onEnterBack: () => {},
        },
      });
    }
  }, []);
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <h4 className="work_head py-3 ps-5">Our work</h4>
          <div className="wrapper" ref={containerRef}>
            <div className="horizontal-scroll-1">
              <div className="h-section first">
                <div className="row">
                  <div className="col-lg-3 pe-1">
                    <div className="row gy-3">
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0 bg-bliss-logo d-flex justify-content-center align-items-center">
                          <img
                            src={require("../../images/logos/bliss.png")}
                            className="img-fluid"
                            width={120}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0">
                          <img
                            src={require("../../images/bliss/bliss_thumb2.webp")}
                            className="img-fluid object-fit-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card bigcard rounded-3 border-0">
                          <img
                            src={require("../../images/bliss/bliss_thumb_mid.webp")}
                            className="img-fluid object-fit-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ps-1">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <div className="color-box bg-white"></div>
                          <div className="color-box bg-blissgreen"></div>
                          <div className="color-box bg-darkgreen"></div>
                        </div>
                      </div>
                      <div className="col-lg-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-section second">
                <div className="row">
                  <div className="col-lg-3 pe-1">
                    <div className="row gy-3">
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0 bg-beeyond d-flex justify-content-center align-items-center">
                          <img
                            src={require("../../images/beeyond/beeyond_logo.png")}
                            className="img-fluid"
                            width={160}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0 bg-light">
                          <img
                            src={require("../../images/beeyond/beeyond_thumb2.webp")}
                            className="img-fluid object-fit-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card bigcard rounded-3 border-0">
                          <img
                            src={require("../../images/beeyond/beeyond_thumb3.webp")}
                            className="img-fluid object-fit-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-section third">
                <div className="row">
                  <div className="col-lg-3 pe-1">
                    <div className="row gy-3">
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0 bg-lifespaces-logo d-flex justify-content-center align-items-center">
                          <img
                            src={require("../../images/logos/lifespaces.png")}
                            className="img-fluid"
                            width={200}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0 bg-light"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card bigcard rounded-3 border-0 bg-light">
                          <img
                            src={require("../../images/lifespaces/lifespaces_web_thumb.webp")}
                            className="img-fluid object-fit-cover"
                            style={{ objectPosition: "top" }}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ps-1">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card bigcard rounded-3 border-0">
                          <img
                            src={require("../../images/lifespaces/lifespaces_mob_thumb.webp")}
                            className="img-fluid object-fit-cover h-100"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-section fourth">
                <div className="row">
                  <div className="col-lg-3 pe-1">
                    <div className="row gy-3">
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0">
                        <img
                            src={require("../../images/swayam/swayam_thumb1.webp")}
                            className="img-fluid object-fit-cover h-100 scaled" style={{objectPosition:'115%'}}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card smallcard rounded-3 border-0 ">
                          <img
                            src={require("../../images/swayam/swayam_thumb2.webp")}
                            className="img-fluid object-fit-cover h-100 scaled"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card bigcard rounded-3 border-0 bg-light">
                          <img
                            src={require("../../images/swayam/swayam_thumb_3.webp")}
                            className="img-fluid object-fit-cover h-100"
                           
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ps-1">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card bigcard rounded-3 border-0">
                          <img
                            src={require("../../images/lifespaces/lifespaces_mob_thumb.webp")}
                            className="img-fluid object-fit-cover h-100"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vh-100"></section>
    </>
  );
};

export default WorkSample;
