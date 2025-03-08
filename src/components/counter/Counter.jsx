import React from "react";
import "./counter.css";

const Counter = () => {
  return (
    <section className="counter pt-30 pb-10">
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="row g-5">
              <div className="col-lg-3">
                <div className="count text-center">
                  <h4 class="countnum" data-target="40">
                    2000+
                  </h4>
                  <span className="count-text">
                    Brands Buzzing with Success
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="count text-center">
                  <h4 class="countnum" data-target="40">
                    12+
                  </h4>
                  <span className="count-text">
                    Creative Bees Fueling Innovation
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="count text-center">
                  <h4 class="countnum" data-target="40">
                    500+
                  </h4>
                  <span className="count-text">
                    Projects Crafted to Perfection
                  </span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="count text-center">
                  <h4 class="countnum" data-target="40">
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
