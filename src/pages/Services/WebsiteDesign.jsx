import React from "react";
import HexCanvas from "../../components/hexcanvas/HexCanvas";

const WebsiteDesign = () => {
  return (
    <>
      <HexCanvas title={`WEbsite design`} />

      <section className="websec mt-3">
        <div className="container">
          <h2 className="inter webtitle text-center text-white my-3">
            We create experiences, not just websites{" "}
          </h2>
          <div className="webservice">
            <img
              src={require("../../images/brands/webservice.png")}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        <div className="container">
          <div className="row text-center mt-3">
            <h1 className="foliohead" style={{ color: "#f9b000" }}>
              We at brand and beeyond{" "}
            </h1>
            <span className="inter subtextfolio text-white">
              From strategy to storytelling ,digital to design, we craft Brands
              Beeyond expectations.
            </span>
          </div>
        </div>

        <div className="bg-tb position-relative">
          <div className="tbtouch">
            <img
              src={require("../../images/brands/tbname.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="row justify-content-center text-end pararow">
            <div className="col-lg-10">
              <div className="tbpara">
                <p className="">
                  India’s 1st and only Pure Veg Family Nature Retreat, designed
                  to emotionally connect with guests while highlighting your
                  core offerings, USPs, and serene mountain experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lifespaces position-relative">
          <div className="container text-end">
            <h2 className="pt-5 tlname inter" style={{ color: "#3F5339" }}>
              Touchwood Lifespaces
            </h2>
          </div>
        </div>
        <div className="bg-strata position-relative"></div>
        <div className="container text-center py-5">
          <h2 className="tlname inter" style={{ color: "#80F2FF" }}>
            Dr. Bhatacharjee Clinic{" "}
          </h2>
          <div className="tbpara text-white inter mt-3">
            <p className="">
              The website for Dr. Bhattacharjee’s Clinic is designed to reflect
              the warmth, trust, and holistic healing approach of homeopathy. It
              features a clean, calming layout with easy access to treatment
              options, patient testimonials, and appointment booking.
            </p>
          </div>
        </div>

        <div className="bg-bnb position-relative">
          <div className="container h-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-lg-4 col-4"></div>
              <div className="col-lg-8 col-8">
                <h2 className="tlname inter" style={{ color: "#424242" }}>
                  BRAND AND BEEYOND{" "}
                </h2>
                <div className="tbpara">
                  <p>
                    Brand and Beyond is a creative marketing agency that
                    specializes in crafting impactful brand identities through
                    design, strategy, and storytelling. We offer end-to-end
                    services including branding, graphic design, digital
                    marketing, and website development. connect, and grow beyond
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fairytale position-relative">
          <div className="container pt-5">
            <div className="col-lg-7 col-12">
              <h2 className="tlname inter" style={{ color: "#424242" }}>
                FAIRYTALE WEDDINGS{" "}
              </h2>
              <div className="tbpara">
                <p>
                  Heartcrafted Fairytale Weddings by Touchwood Bliss brings your
                  love story to life with nature-inspired celebrations in the
                  mountains of Igatpuri—elegant, soulful, and truly
                  unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-ict position-relative"></div>
        <div className="mt-5 text-center">
          <h2 className="tlname inter" style={{ color: "#fff" }}>
            ICT - Institue of CAD technology
          </h2>
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="tbpara mt-4" style={{ color: "#fff" }}>
                <p>
                  Heartcrafted Fairytale Weddings by Touchwood Bliss brings your
                  love story to life with nature-inspired celebrations in the
                  mountains of Igatpuri—elegant, soulful, and truly
                  unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteDesign;
