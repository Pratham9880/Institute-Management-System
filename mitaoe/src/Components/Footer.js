import React from "react";
import "../Components/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <h3>About Us</h3>
        <p>
        The MIT Group of Institutions was founded with the goal of creating an exceptional setting for academics and research combined with a lively environment to face the challenges of a fiercely competitive world.
        </p>
      </div>
      <div className="footer-box">
        <h3>Contact Us</h3>
        <p>123 Main Street</p>
        <p>City, State 12345</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@educationalsite.com</p>
      </div>
      <div className="footer-box">
        <h3>Follow Us</h3>
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
