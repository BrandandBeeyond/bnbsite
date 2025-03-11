import React, { useState } from "react";
import "./contact.css";

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

  const handleSelectedService=(service)=>{
     if(selectedServices.includes(service)){
       setSelectedServices(selectedServices.filter((item)=> item !== service))
     }
     else{
       setSelectedServices([...selectedServices,service])
     }
  }


  return (
    <section className="pt-25">
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

              <form className="row gy-4 my-4">
                <div className="col-lg-12">
                  <div className="servicestabs d-flex flex-wrap gap-3 mb-5">
                    {services.map((service,index)=>(
                      <div className={`service-tab ${selectedServices.includes(service) ? 'active':''}`} key={index} onClick={()=>handleSelectedService(service)}>{service}</div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="num"
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="col-lg-12 col-12">
                  <input
                    type="email"
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-lg-12 col-12">
                  <textarea
                    name=""
                    rows={5}
                    className="form-control form-input bg-transparent rounded-0 border-0 mb-2"
                    id=""
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
