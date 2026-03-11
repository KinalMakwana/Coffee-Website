import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="page-main">
      <div className="header-main">
        <h3>KOPPEE</h3>

        {/* MENU TOGGLE */}
        <div
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setPagesOpen(false); 
          }}
        >
          <FaBars />
        </div>

        <div className="container">
          <div className="header-inner">
            <div className={`header-menu ${menuOpen ? "open" : ""}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Service</Link></li>
                <li><Link to="/Menus">Menu</Link></li>

                {/* PAGES DROPDOWN */}
                <li className={`dropdown ${pagesOpen ? "open" : ""}`}>
                  <span
                    className="dropdown-toggle"
                    onClick={() => setPagesOpen(!pagesOpen)}
                  >
                    Pages ▾
                  </span>

                  <ul>
                    <li>
                      <Link
                        to="/Reservation"
                        onClick={() => setPagesOpen(false)}
                      >
                        Reservation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Testimonial"
                        onClick={() => setPagesOpen(false)}
                      >
                        Testimonial
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="contact-item">
                  <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;

