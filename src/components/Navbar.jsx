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
          <div className="mx-3">
            {" "}
            <Image
              src="/LandingPageAssets/Images/gift2.png"
              alt="Analytics"
              className={`img-fluid d-block d-md-none ${styles.imgGift}`}
              width={30}
              height={30}
            />
          </div>
          <a className="navbar-brand mx-auto" href="https://www.parrotpal.com/">
            <Image
              src="/LandingPageAssets/Images/NewLogo.png"
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
            <ul className="navbar-nav mx-auto">
              <li className={`nav-item ${styles.dropLink}`}>
                <a
                  className={`nav-link fw-bold ${styles.archor}`}
                  href="#about"
                >
                  How it works
                </a>
              </li>
              <li className={`nav-item px-lg-3 ${styles.dropLink}`}>
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

            <Image
              src="/LandingPageAssets/Images/gift2.png"
              alt="Analytics"
              className={`img-fluid d-none d-lg-inline d-md-block d-block  ${styles.imgGift}`}
              width={50}
              height={50}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
