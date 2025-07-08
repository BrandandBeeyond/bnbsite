import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <HexCanvas title={"Blogs"} />

      <section className="printmediapage">
        <div className="container">
          <div className="row gy-4">
            <div className="row mt-3">
              <div className="col-lg-6">
                <img src={require('../images/strategic_branding.png')} className="img-fluid object-fit-cover" alt="" />
              </div>
              <div className="col-lg-6">
                <Link className="nav-link" to="/why_your_business_needs_strategic_branding">
                  <h2 className="foliohead-sm" style={{ color: "#fff" }}>
                    Why Your Business Needs Strategic Branding in 2025
                  </h2>
                  <div className="blog-para text-white">
                    <p>
                      We are not just another branding agency in India. We are a
                      strategic growth partner that builds brands from the
                      inside out—brands that resonate, convert, and sustain.
                      Backed by two years of immersive experience and a
                      portfolio that spans across real estate, hospitality,
                      MSMEs, clinics, startups, and more, we help businesses
                      brand smart, grow fast, and lead with meaning.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
