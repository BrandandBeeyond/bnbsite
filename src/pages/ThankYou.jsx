import React, { useEffect } from "react";
import CheckIcon from "../images/check.png";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {

const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div
      className="vh-100 d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "#272727" }}
    >
      <div className="container text-center">
        <h2 className="text-white ty-head">Thank You !</h2>
        <div className="mt-4">
          <img src={CheckIcon} className="img-fluid" alt="" />

          <div className="about-para text-white mt-4">
            <p>
              Thank you for reaching out! Our team has received your message and
              will get back to you within 24 to 48 hours.
            </p>
          </div>

          <div className="mt-5">
               <button className="btn btn-lg rounded-pill btn-light" onClick={()=>navigate('/')}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
