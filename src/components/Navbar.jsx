import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark text-center shadow-sm ${styles.navbar}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <Image
              src={Logo}
              alt="ParrotPal Logo"
              className={styles.img1}
              width={65}
              height={50}
            /> */}
          </a>
          <img
            src="/LandingPageAssets/Images/ImageHowToGetStarted.png"
            alt="ParrotPal Logo"
            className={`img-fluid ${styles.img1}`}
            width={65}
            height={50}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* End of Navbar toggler button */}
          <div
            className={`collapse navbar-collapse ${styles.navbarCollapse}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className={`nav-item ${styles.dropLink}`}>
                <a className={`nav-link ${styles.archor}`} href="#about">
                  How it works
                </a>
              </li>
              <li className={`nav-item ${styles.dropLink}`}>
                <a className={`nav-link  ${styles.archor}`} href="#">
                  Pricing
                </a>
              </li>
              <li className={`nav-item ${styles.dropLink}`}>
                <a className={`nav-link  ${styles.archor}`} href="#">
                  About Us
                </a>
              </li>
            </ul>
            <button
              className={`btn btn-light rounded-pill px-4 py-2 ${styles.downloadButton} ${styles.fullWidthButton}`}
              type="button"
            >
              Download App
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
