import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 1234 Main St, Anytown,
              USA
            </p>
            <p>
              <i className="fas fa-phone"></i> (123) 456-7890
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@constructioncompany.com
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#projects">Our Projects</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>
              Sign up for our newsletter to stay updated on our latest projects
              and services.
            </p>
            <form>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Construction Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
