import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSelectedService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      services: selectedServices.join(", "),
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log("Email successfully sent:", response);
        navigate("/thank-you");
      })
      .catch((err) => {
        console.error("Email sending failed:", err);
      });
  };

  return (
    <section
      className={location.pathname === "/services" ? "pt-25-advance" : "pt-25"}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="contact_head">Lets get started !! </h2>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <h4 className="start_contact mb-2">
                I am looking for a project in{" "}
              </h4>

              <form className="row gy-4 my-4" onSubmit={handleSubmit}>
                <div className="col-lg-12">
                  <div className="servicestabs d-flex flex-wrap justify-content-center justify-content-sm-start gap-3 mb-5">
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

                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    placeholder="Phone number"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 col-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 col-12">
                  <textarea
                    name="message"
                    rows={5}
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    id=""
                    onChange={handleChange}
                    placeholder="describe your project"
                  ></textarea>
                </div>
                <div className="mt-5 text-center text-sm-center text-md-start">
                  <button className="btn submitbtn">SEND </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
