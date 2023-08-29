import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Footer = () => {
  return (
    <section className={`py-5 ${styles.footerBg}`}>
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-md text-center">
            <div className="row pb-5">
              <div className="col-md pt-5">
                <a href="#">
                  {/* <Image
                    src={Logo}
                    alt="ParrotPal Logo"
                    className={styles.img1}
                    width={150}
                    height={30}
                  /> */}
                  <img
                    src="/LandingPageAssets/Images/ParrotPalLogo.png"
                    alt="ParrotPal Logo"
                    className={`img-fluid ${styles.img1}`}
                    width={65}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <a href="">
                  {/* <Image
                    src={fb}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={28}
                    height={28}
                  ></Image> */}
                  <img
                    src="/Facebook.svg"
                    alt="Facebook Icon"
                    className={styles.socIcons}
                    width={28}
                    height={28}
                  />
                </a>
                <a href="#">
                  {/* <Image
                    src={insta}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={28}
                    height={28}
                  ></Image> */}
                  <img
                    src="/Instagram.svg"
                    alt="Instagram Icon"
                    className={styles.socIcons}
                    width={28}
                    height={28}
                  />
                </a>
                <a href="#">
                  {/* <Image
                    src={tweet}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={30}
                    height={30}
                  ></Image> */}
                  <img
                    src="/Twitter.svg"
                    alt="Twitter Icon"
                    className={styles.socIcons}
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#">
                  {/* <Image
                    src={tube}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={30}
                    height={30}
                  ></Image> */}
                  <img
                    src="/Youtube.svg"
                    alt="Youtube Icon"
                    className={styles.socIcons}
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md"></div>
          <div className="col-md pt-5">
            <ul className="list-unstyled">
              <li>
                <a href="#" className={`fw-bold ${styles.list}`}>
                  About
                </a>
              </li>
              <li className="py-3">
                <a href="#" className={` ${styles.list}`}>
                  How to get started
                </a>
              </li>
              <li>
                <a href="#" className={` ${styles.list}`}>
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md text-center pt-5">
            <ul className="list-unstyled">
              <li>
                <a href="#" className={`fw-bold ${styles.list}`}>
                  Support
                </a>
              </li>
              <li className="py-3">
                <a href="#" className={` ${styles.list}`}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={` ${styles.list}`}>
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md text-center pt-5">
            <ul className="list-unstyled">
              <li>
                <a href="#" className={`fw-bold ${styles.list}`}>
                  Legal
                </a>
              </li>
              <li className="py-3">
                <a href="#" className={`${styles.list}`}>
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className={` ${styles.list}`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
