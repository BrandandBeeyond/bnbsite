import React, { useEffect, useState } from "react";
import BnbLogo from "../../images/logos/bnblogo.png";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling Down - Hide Navbar
      setVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling Up - Show Navbar
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`navbar navbar-expand-lg navbar-dark py-2 header-wrapper ${
        visible ? "show-header" : "hide-header"
      }`}
    >
      <div className="container-fluid">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="logo">
            <img
              src={BnbLogo}
              className="img-fluid bnblogo"
              width="100px"
              alt="Logo"
            />
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mob-bar"
          >
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.2C0 1.51826 0.160142 1.82348 0.445198 2.04853C0.730253 2.27357 1.11687 2.4 1.52 2.4H13.68C14.0831 2.4 14.4697 2.27357 14.7548 2.04853C15.0399 1.82348 15.2 1.51826 15.2 1.2C15.2 0.88174 15.0399 0.576516 14.7548 0.351472C14.4697 0.126428 14.0831 0 13.68 0H1.52C1.11687 0 0.730253 0.126428 0.445198 0.351472C0.160142 0.576516 0 0.88174 0 1.2Z"
                fill="#F9B000"
              />
              <path
                d="M13.68 5.19922H1.52C1.11687 5.19922 0.730253 5.32565 0.445198 5.55069C0.160142 5.77573 0 6.08096 0 6.39922C0 6.71748 0.160142 7.0227 0.445198 7.24775C0.730253 7.47279 1.11687 7.59922 1.52 7.59922H13.68C14.0831 7.59922 14.4697 7.47279 14.7548 7.24775C15.0399 7.0227 15.2 6.71748 15.2 6.39922C15.2 6.08096 15.0399 5.77573 14.7548 5.55069C14.4697 5.32565 14.0831 5.19922 13.68 5.19922Z"
                fill="#F9B000"
              />
              <path
                d="M13.6667 10H7.53333C7.12667 10 6.73666 10.1264 6.4491 10.3515C6.16155 10.5765 6 10.8817 6 11.2C6 11.5183 6.16155 11.8235 6.4491 12.0485C6.73666 12.2736 7.12667 12.4 7.53333 12.4H13.6667C14.0733 12.4 14.4633 12.2736 14.7509 12.0485C15.0385 11.8235 15.2 11.5183 15.2 11.2C15.2 10.8817 15.0385 10.5765 14.7509 10.3515C14.4633 10.1264 14.0733 10 13.6667 10Z"
                fill="#F9B000"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto navbarmenu">
              <li className="nav-item">
                <a href="" className="nav-link main-links active">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link main-links active">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link main-links active">
                  Portfolio
                </a>
              </li>
              <button className="btn contactbtn ms-4">Contact Us</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
