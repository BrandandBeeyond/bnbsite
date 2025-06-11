import React from "react";
import HexCanvas from "../../components/hexcanvas/HexCanvas";

const PrintMediadesigns = () => {
  return (
    <>
      <HexCanvas title={`Print Media Designs`} />

      <section className="printmediapage">
        <div className="container">
          <div className="row gy-4">
            <div className="row text-center mt-3">
              <h2 className="foliohead" style={{ color: "#fff" }}>
                Journal design
              </h2>
              <span className="inter subtextfolio-1 text-white">
                Beeyond Daily Journal is thoughtfully crafted for all age
                groups—children, teenagers, adults, and senior citizens. With
                simple prompts, creative space, and mindful reflections, it
                encourages everyone to capture their thoughts, emotions, and
                everyday moments with ease and joy. A timeless companion for
                self-expression, wellness, and personal growth.
              </span>
            </div>
            <div className="printmedia mt-5">
              <img
                src={require("../../images/brands/printmediamain.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-sm-6 col-6">
              <img
                src={require("../../images/brands/beeyondbann1.jpg")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <img
                src={require("../../images/brands/beeyondbann2.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <img
                src={require("../../images/brands/beeyondbann3.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <img
                src={require("../../images/brands/beeyondbann4.jpg")}
                className="img-fluid w-100"
                alt=""
              />
            </div>

            <div className="printmedia">
              <img
                src={require("../../images/brands/bookmockup.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </div>

          <div className="row gy-4 text-center justify-content-center mt-5 pt-5">
            <h2 className="foliohead" style={{ color: "#fff" }}>
              Corporate Stationery
            </h2>

            <div className="creativecard">
              <img
                src={require("../../images/brands/blisscard.png")}
                className="img-fluid h-100 w-100"
                alt=""
              />
            </div>
            <div className="creativecard creative2">
              <img
                src={require("../../images/brands/lifespacescard.png")}
                className="img-fluid h-100 w-100"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-sm-6 col-6">
              <img
                src={require("../../images/brands/graycoldcreative.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-6">
              <img
                src={require("../../images/brands/swayamcreative.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>

            <div className="col-lg-12">
              <img
                src={require("../../images/brands/utkarshcreative.jpg")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="col-lg-12">
              <img
                src={require("../../images/brands/bridalcreative.png")}
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrintMediadesigns;
