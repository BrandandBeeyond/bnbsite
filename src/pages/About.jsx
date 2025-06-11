import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import mainBee from "../images/bigbee.svg";
import Client from "../components/clients/Client";
import Contact from "../components/contact/Contact";
import ReactOwlCarousel from "react-owl-carousel";
import useSplitText from "../hooks/useSplitText";

const About = () => {
  const headingRef = useSplitText({
    type: "chars",
    animateFrom: { y: 80, opacity: 0 },
    animateTo: {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.04,
      ease: "power3.out"
    },
    deps: []
  });
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: false,
    dots: true,
  };

  return (
    <>
      <HexCanvas
        title={`We Discover, <span class='highlight'>We Design</span>, We Execute`}
      />

      <section className="mission-vision position-relative">
        <div className="row align-items-center py-4">
          <div className="col-lg-6 ps-0">
            <h2 className="abt-text ps-5 ps-md-0">Mission</h2>
          </div>
          <div className="col-lg-6">
            <div className="mis-para">
              <p ref={headingRef} className="split-heading">
                To make Entrepreneurship a Happy Journey with power of
                Spirituality and Branding
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-0 mt-sm-5">
          <div className="col-lg-6">
            <div className="vis-para">
              <p ref={headingRef} className="split-heading">
                To make Brand and Beeyond as Number 1 Strategic Unmarketing
                Agency in India by 2027
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-end pe-0">
            <h2 className="abt-text pe-5 pe-sm-0">Vision</h2>
          </div>
        </div>
      </section>

      <div className="bee-wrapper">
        <section className="bgbee d-flex align-items-center justify-content-center">
          <div className="container d-flex flex-column align-items-center justify-content-center h-100 inter">
            <div className="tupsec text-center">
              <h2 className="beeHead text-white">The BEE</h2>
              <span className="beeSub text-dark">Our Brand Ambasador</span>
            </div>
            <div className="row text-center position-relative beerow">
              <div className="col-lg-3 col-3">
                <h3 className="beeSub2 py-1 py-sm-5">Purpose-Driven</h3>
                <h3 className="beeSub2 py-1 py-sm-5 fw-bold">Collaborative</h3>
                <h3 className="beeSub2 py-1 py-sm-5">Consistent</h3>
              </div>
              <div className="col-lg-6 col-6 text-center">
                <img src={mainBee} className="img-fluid beee" alt="" />
                <h3 className="beeSub2 fw-bold py-1 py-sm-5">Strategic</h3>
              </div>
              <div className="col-lg-3 col-3">
                <h3 className="beeSub2 py-1 py-sm-5">Focused</h3>
                <h3 className="beeSub2 py-1 py-sm-5 fw-bold">Resilient</h3>
                <h3 className="beeSub2 py-1 py-sm-5">Value-Creators</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

   

      <section className="team mt-5 pt-5 text-white">
        <div className="container-fluid text-center">
          <div className="titlesec position-relative">
            <div className="blury-circle"></div>
            <h2 className="meetourteam" ref={headingRef}>Meet our fabulous team </h2>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="about-para py-3 py-sm-5">
                  <p ref={headingRef}>
                    "Meet our Creative Team A family of creators, thinkers, and
                    storytellers shaping brands that matter{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-10 d-none d-sm-none d-md-block d-lg-block">
                <div className="meetteam position-relative">
                  <div className="blury-circle-btm"></div>
                  <div className="d-flex flex-row gap-2">
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/kapilsir.jpeg")}
                        className="img-fluid picdown"
                        alt=""
                      />
                    </div>
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/sainathsir.jpg")}
                        className="img-fluid zoom picdown1"
                        alt=""
                      />
                    </div>
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/rupali_mam.png")}
                        className="img-fluid picdown"
                        alt=""
                      />
                    </div>
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/pallavimam.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex secrow flex-row gap-2">
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/vivek.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/pavitra.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/prajwal.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="anotherround">
                    <div className="d-flex flex-row  gap-2">
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/abhijeet.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/Dhiraj.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/sarath.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/pratik.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex secrow flex-row gap-2">
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/gaurav.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/yash.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/swaraj.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 d-block d-sm-block d-md-none d-lg-none overflow-hidden">
                <div className="meetteam position-relative">
                  <div className="blury-circle-btm"></div>
                  <div className="d-flex flex-row justify-content-center gap-2">
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/kapilsir.jpeg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="hexagon-team">
                      <img
                        src={require("../images/team/sainathsir.jpg")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex secrow flex-row gap-2">
                    <div className="position-relative">
                      <div className="hexagon-dead-l"></div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/rupali_mam.png")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-dead-r"></div>
                    </div>
                  </div>
                  <div className="anotherround-mob">
                    <div className="d-flex flex-row  gap-2">
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/pallavimam.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/vivek.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex lastrow flex-row gap-2">
                      <div className="position-relative">
                        <div className="hexagon-dead-l"></div>
                        <div className="hexagon-team">
                          <img
                            src={require("../images/team/pavitra.jpg")}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="hexagon-dead-r"></div>
                      </div>
                    </div>
                  </div>
                  <div className="anotherround-mob-1">
                    <div className="d-flex flex-row  gap-2">
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/prajwal.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/abhijeet.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex lastrow flex-row gap-2">
                      <div className="position-relative">
                        <div className="hexagon-dead-l"></div>
                        <div className="hexagon-team">
                          <img
                            src={require("../images/team/pratik.jpg")}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="hexagon-dead-r"></div>
                      </div>
                    </div>
                  </div>
                   <div className="anotherround-mob-2">
                    <div className="d-flex flex-row  gap-2">
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/gaurav.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/Dhiraj.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex lastrow flex-row gap-2">
                      <div className="position-relative">
                        <div className="hexagon-dead-l"></div>
                        <div className="hexagon-team">
                          <img
                            src={require("../images/team/yash.jpg")}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="hexagon-dead-r"></div>
                      </div>
                    </div>
                  </div>
                   <div className="anotherround-mob-3">
                    <div className="d-flex flex-row  gap-2">
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/sarath.jpg")}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="hexagon-team">
                        <img
                          src={require("../images/team/swaraj.jpg")}
                          className="img-fluid"
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
      </section>

      <section className="testi my-4">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="position-relative text-center realvoicetext">
              <h2 className="meetourteam text-white" ref={headingRef}>
                Real voices <br />
                Real branding journeys
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <ReactOwlCarousel
              className="owl-theme section"
              loop
              margin={20}
              autoplay
              {...options}
            >
              <div className="card reviewcard rounded-5 border-0">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <div className="client-review inter text-white">
                    <p>
                      “Working with Brand and Beeyond was a game-changer for us.
                      They didn’t just give us a logo or a campaign — they gave
                      us clarity, confidence, and a brand we’re proud to call
                      our own. The team goes deep, asks the right questions, and
                      brings out the essence of who you truly are. It’s not just
                      branding — it’s a complete transformation.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="card reviewcard rounded-5 border-0">
                <div className="card-body"></div>
              </div>
              <div className="card reviewcard rounded-5 border-0">
                <div className="card-body"></div>
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </section>

      <Client />
      <Contact />
    </>
  );
};

export default About;
