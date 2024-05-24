import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__container">
          <a href="#" className="footer__logo">Tradering</a>
        </div>
        <div className="footer__container">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Company</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">E-mail</a></li>
          </ul>
        </div>
        <div className="footer__container">
          <h3>Get Help</h3>
          <ul>
            <li><a href="#">Trading</a></li>
            <li><a href="#">Options</a></li>
            <li><a href="#">Nifty</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer__container">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Trade</a></li>
            <li><a href="#">Buy Crypto</a></li>
            <li><a href="#">Clans</a></li>
            <li><a href="#">Information</a></li>
          </ul>
        </div>
        <div className="footer__container">
          <h3>Account</h3>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Credit note</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
