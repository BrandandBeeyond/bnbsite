import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";

const Careers = () => {
  return (
    <>
      <HexCanvas title={`<span class='highlight'>Work</span> With us`} />

      <section className="careeratbnb mt-5">
        <div className="container">
          <div className="text-center">
            <h4 className="career-desc">
              We’re a bunch of thinkers, tinkerers, storytellers, designers, and
              digital ninjas who believe that good vibes + great ideas =
              powerful campaigns.
            </h4>

            <button className="btn btn-career mt-3 mt-sm-5">Join us</button>
          </div>
        </div>
      </section>

      <section className="mt-60 text-white inter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h4 className="career-desc text-center">
                life at Brand and Beeyond
              </h4>

              <div className="d-flex flex-row justify-content-center gap-3 mt-5">
                <div className="position-relative">
                  <div className="hexagon-team"></div>
                  <div className="content-chai d-none d-sm-none d-md-block">
                    <h5 className="creativetext">Chai Bonding </h5>
                    <span className="creativedesc">
                      Occasionally, a new way of organizing work leads to <br />{" "}
                      extraordinary improvements. Total quality managem
                    </span>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="hexagon-team"></div>
                <div className="content-chai-2 d-none d-sm-none d-md-block">
                    <h5 className="creativetext">Co-learning  </h5>
                    <span className="creativedesc">
                      Occasionally, a new way of organizing work leads to <br />{" "}
                      extraordinary improvements. Total quality managem
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex extradown justify-content-center flex-row gap-2">
                <div className="flex-column">
                  <div className="hexagon-team crup"></div>
                  <h5 className="creativetext d-none d-sm-none d-md-block">Creative Freedom</h5>
                  <span className="creativedesc d-none d-sm-none d-md-block">
                    Occasionally, a new way of organizing work leads to <br />{" "}
                    extraordinary improvements. Total quality managem
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
