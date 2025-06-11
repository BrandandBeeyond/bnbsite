import React, { useState } from "react";
import HexCanvas from "../components/hexcanvas/HexCanvas";
import CallIcon from "../images/call.svg";
import EmailIcon from "../images/email.svg";
import LocationIcon from "../images/location.svg";

const Contact = () => {
  const services = [
    "Social Media",
    "Website Development",
    "Web SEO",
    "Google SEO & GMB",
    "Logo design",
    "Strategy",
    "Motion Graphics",
  ];
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelectedService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };
  return (
    <>
      <HexCanvas title={`Contact Us`} />

      <section className="bg-contactform d-flex flex-column align-items-start align-items-sm-center justify-content-center">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h2 className="ctformhead mb-0">Lets get started !! </h2>

          <form className="row justify-content-center gy-2 gy-sm-4 my-1 my-sm-4">
            <div className="col-lg-10">
              <h4 className="start_contact_dark my-1 my-sm-5">
                I am looking for a project in{" "}
              </h4>
              <div className="servicestabs d-flex flex-wrap justify-content-center text-center  gap-2 gap-sm-3 mt-3 mb-1 mb-sm-5">
                {services.map((service, index) => (
                  <div
                    className={`service-tab ${
                      selectedServices.includes(service) ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleSelectedService(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 col-6">
              <input
                type="text"
                name="name"
                className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-lg-6 col-6">
              <input
                type="tel"
                name="phone"
                className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="col-lg-12 col-12">
              <input
                type="email"
                name="email"
                className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-lg-12 col-12">
              <textarea
                name="message"
                rows={5}
                className="form-control form-input bg-transparent rounded-0 border-0 mb-2 d-none d-sm-block"
                id=""
                placeholder="describe your project"
              ></textarea>
            </div>
             <div className="col-lg-12 col-12">
              <input
                type="text"
                name="message"
                className="form-control form-input bg-transparent rounded-0 border-0 mb-2 d-block d-sm-none"
                placeholder="message"
                required
              />
            </div>
            <div className="mt-5 text-center text-sm-center text-md-center">
              <button className="btn submitbtn">SEND </button>
            </div>
          </form>
        </div>
      </section>

      <section className="directcontact">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-4 col-4">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                    <img src={CallIcon} className="img-fluid c-icon" alt="" />
                    <span className="c-text mt-3">call</span>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                    <img src={EmailIcon} className="img-fluid c-icon" alt="" />
                    <span className="c-text mt-4 mt-sm-5">Email</span>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                    <img src={LocationIcon} className="img-fluid c-icon" alt="" />
                    <span className="c-text mt-3">Location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
