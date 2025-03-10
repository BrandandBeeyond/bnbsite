import React, { useState } from "react";
import BnbLogo from "../../images/logos/bnblogo.png";

const Header = () => {

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const currentScrollY = window.scrollY;

  

  if(currentScrollY > lastScrollY && currentScrollY > 100){

  }

  return (
    <header className="navbar navbar-expand-lg navbar-dark py-2 header-wrapper">
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
