import React from "react";
import BnbLogo from "../../images/logos/bnblogo.png";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark py-2  position-sticky top-0 z9">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <img
              src={BnbLogo}
              className="img-fluid bnblogo"
              width="100px"
              alt=""
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mob-bar"
          ></button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto navbarmenu">
            <li className="nav-item">
              <a href="" className="nav-link main-links active">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link main-links active">
                services
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link main-links active">
                portfolio
              </a>
            </li>
            <button className="btn contactbtn ms-4">Contact Us</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
