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
            <img
              src="/LandingPageAssets/Images/ParrotPal.png"
              alt="ParrotPal Logo"
              className={`img-fluid text-center ${styles.img1}`}
              width={65}
              height={50}
            />
          </a>
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

          <div
            className={`collapse navbar-collapse ${styles.navbarCollapse}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto ">
              <li className={`nav-item ${styles.dropLink}`}>
                <a
                  className={`nav-link fw-bold ${styles.archor}`}
                  href="#about"
                >
                  How it works
                </a>
              </li>
              <li className={`nav-item ${styles.dropLink}`}>
                <a className={`nav-link fw-bold ${styles.archor}`} href="#">
                  Pricing
                </a>
              </li>
              <li className={`nav-item ${styles.dropLink}`}>
                <a className={`nav-link  fw-bold ${styles.archor}`} href="#">
                  About Us
                </a>
              </li>
            </ul>
            <button
              className={`btn btn-light rounded-pill px-4 py-2 fw-bold ${styles.downloadButton} ${styles.fullWidthButton}`}
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
