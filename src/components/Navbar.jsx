import React from "react";
import Image from "next/image";
import Link from "next/link";
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
              <li className={`nav-item px-lg-3  ${styles.dropLink}`}>
                <a
                  className={`nav-link fw-bold ${styles.archor}`}
                  href="https://www.parrotpal.com/"
                >
                  Home
                </a>
              </li>
              <li className={`nav-item px-lg-3 ${styles.dropLink}`}>
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
              <li className={`nav-item px-lg-3  ${styles.dropLink}`}>
                <div className={`dropdown ${styles.dropdownDiv}`}>
                  <button
                    class={`btn  dropdown-toggle fw-bold ${styles.archor}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    FAQ
                  </button>
                  <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                    <li>
                      <a
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="#"
                      >
                        Menu 1
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="#"
                      >
                        Menu 2
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="#"
                      >
                        Menu 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`nav-item px-lg-3  ${styles.dropLink}`}>
                <a className={`nav-link  fw-bold ${styles.archor}`} href="#">
                  About Us
                </a>
              </li>
            </ul>
            <a href="#">
              <Image
                src="/LandingPageAssets/Images/gift2.png"
                alt="Analytics"
                className={`img-fluid d-none d-lg-inline d-md-block d-block  ${styles.imgGift}`}
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
