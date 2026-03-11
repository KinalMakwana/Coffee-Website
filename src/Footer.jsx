
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BsFillEnvelopeFill, BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import ScrollTop from "./ScrollTop";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="container">
          <div className="footer-image">
           <img src={process.env.PUBLIC_URL + "/assets/image/coffee.jpg"} alt="Coffee" />
          </div>
          <div className="footer-inner">
            <div className="footer-iteminner">
              <div className="footer-item">
                <h4 className="footer-title">GET IN TOUCH</h4>
                <ul className="footer-contact">
                  <li>
                    <span className="icon"><BsFillGeoAltFill /></span>
                    <span>123 Street, New York, USA</span>
                  </li>
                  <li>
                    <span className="icon"><BsFillTelephoneFill /></span>
                    <span>+012 345 67890</span>
                  </li>
                  <li>
                    <span className="icon"><BsFillEnvelopeFill /></span>
                    <span>info@example.com</span>
                  </li>
                </ul>
              </div>

              <div className="footer-item">
                <h4 className="footer-title">FOLLOW US</h4>
                <p className="footer-text">
                  Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
                </p>
                <div className="footer-social">
                  <a href="#" aria-label="Twitter"><TiSocialTwitter /></a>
                  <a href="#" aria-label="Facebook"><TiSocialFacebook /></a>
                  <a href="https://www.linkedin.com/in/kinal-makwana/" aria-label="LinkedIn"><TiSocialLinkedin /></a>
                  <a href="#" aria-label="Instagram"><IoLogoInstagram /></a>
                </div>
              </div>

              <div className="footer-item">
                <h4 className="footer-title">OPEN HOURS</h4>
                <div className="footer-hours">
                  <p><strong>MONDAY - FRIDAY</strong></p>
                  <p>8.00 AM - 8.00 PM</p>

                  <p><strong>SATURDAY - SUNDAY</strong></p>
                  <p>2.00 PM - 8.00 PM</p>
                </div>
              </div>

              <div className="footer-item">
                <h4 className="footer-title">NEWSLETTER</h4>
                <p className="footer-text">
                  Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
                </p>
                <form className="footer-newsletter">
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                Copyright © <a href="http://localhost:3000/" className="highlight">Domain</a>
                All Rights Reserved.
              </p>
              <p>
                Designed by<a href="https://htmlcodex.com/" className="highlight">HTML Codex</a>
                Distributed by <a href="https://themewagon.com/" className="highlight">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>

      </div>
      <ScrollTop />
    </>
  )
}
export default Footer

