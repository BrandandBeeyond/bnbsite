import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import AmoraVector from "../images/brands/amora.svg";

const Portfolio = () => {
  return (
    <>
      <HexCanvas title={`Portfolio`} />

      <section className="portfolio-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-6">
              <div className="">
                <img
                  src={require("../images/brands/touchwoodblissbg.jpg")}
                  className="img-fluid w-100"
                  alt=""
                />
                <div className="mt-3  text-start text-white">
                  <h3 className="fortfolio-detail-head inter">
                    WEBSITE DEVELOPMENT
                  </h3>
                  <div className="tbpara1">
                    <p>
                      At our digital marketing agency, we offer end-to-end UI/UX
                      design and web development services to create seamless,
                      engaging, and user-friendly digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <div className="amora-hording position-relative">
                <img
                  src={AmoraVector}
                  className="img-fluid Lbrandlogo"
                  alt=""
                />
                <img
                  src={require("../images/brands/amorabg.png")}
                  className="img-fluid h-100 w-100 object-fit-cover"
                  alt=""
                />

                <div className="mt-3 text-start text-white">
                  <h3 className="fortfolio-detail-head">Logo design</h3>
                  <div className="tbpara1">
                    <p>
                      Crafted with purpose, each design in this portfolio
                      reflects a story—bespoke, bold, and built to resonate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "150px" }}
          >
            <div className="col-lg-4 col-sm-4 col-4 p-0 d-flex justify-content-end">
              <img
                src={require("../images/brands/blissfestive1.png")}
                className="img-fluid blissfestive"
                alt=""
              />
            </div>
            <div className="col-lg-4 col-sm-4 col-4 p-0">
              <div className="position-relative">
                <img
                  src={require("../images/brands/brandmockup.png")}
                  className="img-fluid blissmiddle"
                  alt=""
                />
                <img
                  src={require("../images/brands/blissfestive3.png")}
                  className="img-fluid blissfestive3"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-4 p-0">
              <img
                src={require("../images/brands/blissfestive2.png")}
                className="img-fluid blissfestive"
                alt=""
              />
            </div>
          </div>

          <div className="row text-white justify-content-center mt-5">
            <div className="col-lg-8 col-10 text-center">
              <h3 className="fortfolio-detail-head inter">
                Social media design
              </h3>
              <div className="tbpara1 mt-2">
                <p>
                  Crafted with purpose, each design in this portfolio reflects a
                  story—bespoke, bold, and built to resonate.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="specific-port mt-5">
                <img
                  src={require("../images/brands/printmediamain.png")}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt=""
                />
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-8 col-10 text-center">
                  <h3 className="fortfolio-detail-head inter">
                    print media design
                  </h3>
                  <div className="tbpara1 mt-2">
                    <p>Making Your Brand Visible, Trusted & Found.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="specific-port mt-5">
                <img
                  src={require("../images/brands/gmbportfolio.png")}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt=""
                />
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-8 col-10 text-center">
                  <h3 className="fortfolio-detail-head inter">
                    Google my business
                  </h3>
                  <div className="tbpara1 mt-2">
                    <p>
                      Curating a strong digital presence through optimized
                      Google My Business profiles that connect brands with their
                      local audience and drive meaningful engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-6">
                  <div className="amora-hording position-relative">
                    <img
                      src={require("../images/brands/photography1.jpg")}
                      className="img-fluid h-100 w-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3  text-center text-white">
                    <h3 className="fortfolio-detail-head inter">
                      photography and videography
                    </h3>
                    <div className="tbpara1">
                      <p>
                        Capturing moments with meaning—through compelling
                        visuals that tell your story with emotion, artistry, and
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-6">
                  <div className="amora-hording position-relative">
                    <img
                      src={require("../images/brands/businessstrategy.jpg")}
                      className="img-fluid h-100 w-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-3  text-center text-white">
                    <h3 className="fortfolio-detail-head inter">
                      Business strategy
                    </h3>
                    <div className="tbpara1">
                      <p>
                        Strategic solutions designed to align vision with
                        action—driving growth, clarity, and long-term business
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
