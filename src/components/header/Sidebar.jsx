import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BnbLogo from "../../images/logos/bnblogo.png";

const serviceLinks = [
  { to: "/services", label: "All Services" },
  { to: "/logodesign", label: "Logo Design" },
  { to: "/websitedesign", label: "Website Design" },
  { to: "/socialmedia", label: "Social Media" },
  { to: "/googlemybusiness", label: "Google My Business" },
  { to: "/printmediadesigns", label: "Print Media Designs" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setServicesOpen(false);
    }
  }, [isOpen]);

  return (
    <div
      className={`sidebar-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-topbar">
          <Link to="/" className="sidebar-brand" onClick={onClose}>
            <img
              src={BnbLogo}
              className="img-fluid bnblogo"
              width="100"
              alt="Logo"
            />
          </Link>

          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-links">
            <Link
              className="nav-link navlinks"
              data-text="Home"
              to="/"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              className="nav-link navlinks"
              data-text="About us"
              to="/about"
              onClick={onClose}
            >
              About Us
            </Link>

            <button
              type="button"
              className="nav-link navlinks sidebar-parent-link"
              data-text="Our Services"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
            >
              <span>Our Services</span>
              <i
                className={`bi ${
                  servicesOpen ? "bi-chevron-up" : "bi-chevron-down"
                } sidebar-parent-icon`}
                aria-hidden="true"
              />
            </button>

            <div className={`sidebar-submenu ${servicesOpen ? "open" : ""}`}>
              {serviceLinks.map((item) => (
                <Link
                  key={item.to}
                  className="sidebar-submenu-link"
                  to={item.to}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>

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
              data-text="Careers"
              to="/careers"
              onClick={onClose}
            >
              Careers
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
            <Link
              className="nav-link navlinks"
              data-text="Software Development"
              to="/best-software-development-services-in-nashik"
              onClick={onClose}
            >
              Software Development
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
