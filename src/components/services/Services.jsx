import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";

const Services = () => {
  const servicedata = [
    {
      serviceThumb: require("../../images/services/webdev.png"),
      serviceTitle: "website development",
      servicePara: "Turning Clicks into Customers with Stunning Websites.",
    },
    {
      serviceThumb: require("../../images/services/social.png"),
      serviceTitle: "Social Media",
      servicePara: "Crafting Conversations, Creating Connections.",
    },
    {
      serviceThumb: require("../../images/services/gmb.png"),
      serviceTitle: "Google My Business",
      servicePara: "Making Your Brand Visible, Trusted & Found.",
    },
    {
      serviceThumb: require("../../images/services/logodesign.png"),
      serviceTitle: "LOGO DESIGN",
      servicePara:
        "Crafting iconic brand identities that stand out and make a lasting impact.",
    },
    {
      serviceThumb: require("../../images/services/printmedia.png"),
      serviceTitle: "Print Media Designs",
      servicePara:
        "From brochures to billboards, Captivating designs, impactful results.",
    },
    {
      serviceThumb: require("../../images/services/brandstrategy.png"),
      serviceTitle: "Brand Strategy",
      servicePara: "Crafting a powerful roadmap for long-term success.",
    },
  ];

  return (
    <section className="services">
      <div className="container-fluid">
        <div className="text-center">
          <h4 className="subhead">We offer</h4>
          <h2 className="work_head py-3">
            Strategic, Smart, and Seamlessly Integrated <br /> Marketing That
            Works!
          </h2>
        </div>
        <div className="row gy-5 pt-20">
          {servicedata.map((item, i) => (
            <div className="col-lg-4 d-flex justify-content-center" key={i}>
              <ReactParallaxTilt
                className="card servicecard rounded-5 overflow-hidden"
                glareEnable={true}
                glareMaxOpacity={0.35}
                scale={1.07}
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                perspective={1000}
              >
                <div className="card-body">
                  <div className="d-flex flex-column justify-content-center">
                    <div className="text-center">
                      <img
                        src={item.serviceThumb}
                        className="img-fluid service_thumb"
                        alt=""
                      />
                      <div className="service_head my-3">
                        <h5 className="">{item.serviceTitle}</h5>
                      </div>
                      <div className="service_para">
                        <p className="pb-0">{item.servicePara}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ReactParallaxTilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
