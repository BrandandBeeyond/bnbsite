import React from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";

const Blogs = () => {
  return (
    <>
      <HexCanvas title={"Blogs"} />

      <section className="printmediapage">
        <div className="container">
          <div className="row gy-4">
            <div className="row text-center mt-3">
              <h2 className="foliohead" style={{ color: "#fff" }}>
                   Blogs
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
