import React from "react";
import HexCanvas from "../../components/hexcanvas/HexCanvas";

const Googlemybusiness = () => {
  return (
    <>
      <HexCanvas title={`Google My Business`} />

      <section className="gmbfolio">
        <div className="container">
          <div className="row text-center mt-3">
            <h1 className="foliohead" style={{ color: "#fff" }}>
              gmb FOR TOUCHWOOD BLISS
            </h1>
            <span className="inter subtextfolio-1 text-white">
              Touchwood Bliss is a serene, pure-vegetarian family resort nestled
              in the tranquil hills of Igatpuri, Maharashtra. Offering a
              harmonious blend of nature-inspired wellness and heartfelt
              hospitality, it serves as an ideal destination for family
              getaways, romantic retreats, and fairytale weddings.
            </span>
          </div>
        </div>

        <div
          className="row mb-5 gy-5 gy-sm-0 align-items-center"
          style={{ marginTop: "130px" }}
        >
          <div className="col-lg-7 col-7 p-0">
            <img
              src={require("../../images/brands/gads1.png")}
              className="img-fluid gmb1"
              alt=""
            />
          </div>
          <div className="col-lg-5 col-5 text-center">
            <h2 className="tlname inter" style={{ color: "#fff" }}>
              Google Ads <br /> Review
            </h2>
          </div>
        </div>
        <div className="row flex-row-reverse mt-5 align-items-center">
          <div className="col-lg-7 col-7 p-0">
            <img
              src={require("../../images/brands/gads2.png")}
              className="img-fluid gmb1"
              alt=""
            />
          </div>
          <div className="col-lg-5 col-5 text-center"></div>
        </div>

        <div style={{ marginTop: "120px" }}>
          <div
            className="row mb-5 gy-5 gy-sm-0 align-items-center"
            style={{ marginTop: "130px" }}
          >
            <div className="col-lg-7 col-7 p-0">
              <img
                src={require("../../images/brands/gmb1.png")}
                className="img-fluid gmb1"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-5 text-center">
              <h2 className="tlname inter" style={{ color: "#fff" }}>
                gmb
                <br /> Review
              </h2>
            </div>
          </div>
          <div className="row flex-row-reverse mt-5 align-items-center">
            <div className="col-lg-7 col-7 p-0">
              <img
                src={require("../../images/brands/gmb2.png")}
                className="img-fluid gmb1"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-5 text-center"></div>
          </div>
        </div>

        <div className="container">
          <div className="row g-4 text-center" style={{ marginTop: "180px" }}>
            <h2 className="tlname inter" style={{ color: "#fff" }}>
              iNSTAGRAM REVIEW
            </h2>

            <div className="col-lg-6 col-6">
                <img src={require('../../images/brands/instareview1.png')} className="img-fluid fbreview" alt="" />
            </div>
            <div className="col-lg-6 col-6">
                <img src={require('../../images/brands/instareview2.png')} className="img-fluid fbreview" alt="" />
            </div>
          </div>
          <div className="row g-4 text-center" style={{ marginTop: "120px" }}>
            <h2 className="tlname inter" style={{ color: "#fff" }}>
              facebook REVIEW
            </h2>

            <div className="col-lg-6 col-6">
                <img src={require('../../images/brands/fbreview1.png')} className="img-fluid fbreview" alt="" />
            </div>
            <div className="col-lg-6 col-6">
                <img src={require('../../images/brands/fbreview2.png')} className="img-fluid fbreview" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Googlemybusiness;
