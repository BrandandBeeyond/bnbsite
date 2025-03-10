import React from "react";
import "./counter.css";

const Counter = () => {
  return (
    <section className="counter pt-30 pt-mob-0 pb-10">
      <div className="container-fluid">
        <div className="row justify-content-center mt-mob-m50 mt-sm-5">
          <div className="col-lg-10 border-mob">
            <div className="row g-2 g-sm-3 g-md-5">
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="count text-center">
                  <h4 className="countnum" data-target="40">
                    2000+
                  </h4>
                  <span className="count-text">
                    Brands Buzzing with Success
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="count text-center">
                  <h4 className="countnum" data-target="40">
                    12+
                  </h4>
                  <span className="count-text">
                    Creative Bees Fueling Innovation
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="count text-center">
                  <h4 className="countnum" data-target="40">
                    500+
                  </h4>
                  <span className="count-text">
                    Projects Crafted to Perfection
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="count text-center">
                  <h4 className="countnum" data-target="40">
                    25+
                  </h4>
                  <span className="count-text">
                     Industries Impacted Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
