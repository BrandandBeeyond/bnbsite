import React, { useEffect, useState } from "react";
import BnbLogo from "../../images/logos/bnblogo.png";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const totalPageHeight = document.body.scrollHeight; // Full page height
    const viewportHeight = window.innerHeight; // Visible screen height
    const maxScroll = totalPageHeight - viewportHeight; // Max scrollable height

    if (currentScrollY > lastScrollY && currentScrollY > 50 && currentScrollY < maxScroll - 50) {
      // Scrolling Down - Hide Navbar
      setVisible(false);
    } else {
      // Scrolling Up OR near footer - Show Navbar
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar navbar-expand-lg navbar-dark py-2 header-wrapper ${
        visible ? "show-header" : "hide-header"
      }`}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <img src={BnbLogo} className="img-fluid bnblogo" width="100px" alt="Logo" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mob-bar"></button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto navbarmenu">
            <li className="nav-item">
              <a href="" className="nav-link main-links active">About us</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link main-links active">Services</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link main-links active">Portfolio</a>
            </li>
            <button className="btn contactbtn ms-4">Contact Us</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
