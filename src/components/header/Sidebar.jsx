import React from "react";
import { Link } from "react-router-dom";
import BnbLogo from "../../images/logos/bnblogo.png";

const Sidebar = ({isOpen,onClose}) => {
  return (
    <div
      className={`sidebar-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i class="bi bi-x-circle"></i>
        </button>

        <nav className="sidebar-nav">
          <div className="logo">
            <Link className="nav-link navlinks" to="/">
              <img
                src={BnbLogo}
                className="img-fluid bnblogo"
                width="100"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mt-4 ps-5 d-flex flex-column">
            <Link className="nav-link navlinks" data-text="Home"  to="/" onClick={onClose}>
              Home
            </Link>
            <Link
              className="nav-link navlinks" data-text="About us"
              to="/about"
              onClick={onClose}
            >
              About Us
            </Link>
            <Link
              className="nav-link navlinks"
              data-text="Our Services"
              to="/services"
              onClick={onClose}
            >
              Our Services
            </Link>
            <Link
              className="nav-link navlinks"
              data-text="Portfolio"
              to="/portfolio"
              onClick={onClose}
            >
              Portfolio
            </Link>
            <Link
              className="nav-link navlinks"
              data-text="Blogs"
              to="/blogs"
              onClick={onClose}
            >
              Blogs
            </Link>
            <Link
              className="nav-link navlinks"
              data-text="Contact"
              to="/contact"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
