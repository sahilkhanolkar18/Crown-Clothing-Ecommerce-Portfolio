import React from "react";
import "./Footer.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "Twitter", url: "https://www.twitter.com" },
    { name: "Instagram", url: "https://www.instagram.com" },
  ];

  const footerLinks = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "Hat", url: "/shop/hats" },
    { name: "Jacket", url: "/shop/jackets" },
    { name: "Sneakers", url: "/shop/sneakers" },
    { name: "Mens", url: "/shop/mens" },
    { name: "Womens", url: "/shop/womens" },
  ];

  return (
    <footer>
      <div className="footer-content">
        <div className="logo-container">
          <CrwnLogo className="logo" />
          <span className="company-title">Crown Clothing</span>
        </div>
        <div className="links-container">
          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Crown Clothing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
