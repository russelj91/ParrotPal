import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "public/landing Page Assets/logo/Footer Logo.png";
import fb from "public/landing Page Assets/Icons/Sosmed Icons/Facebook.svg";
import insta from "public/landing Page Assets/Icons/Sosmed Icons/Instagram.svg";
import tweet from "public/landing Page Assets/Icons/Sosmed Icons/Twitter.svg";
import tube from "public/landing Page Assets/Icons/Sosmed Icons/Youtube.svg";

const Footer = () => {
  return (
    <section className={`py-5 ${styles.footerBg}`}>
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-md text-center">
            <div className="row pb-5">
              <div className="col-md pt-5">
                <a href="#">
                  <Image
                    src={Logo}
                    alt="ParrotPal Logo"
                    className={styles.img1}
                    width={150}
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <a href="">
                  <Image
                    src={fb}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={28}
                  ></Image>
                </a>
                <a href="#">
                  <Image
                    src={insta}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={28}
                  ></Image>
                </a>
                <a href="#">
                  <Image
                    src={tweet}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={30}
                  ></Image>
                </a>
                <a href="#">
                  <Image
                    src={tube}
                    alt="Facebook Logo"
                    className={styles.socIcons}
                    width={30}
                  ></Image>
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
