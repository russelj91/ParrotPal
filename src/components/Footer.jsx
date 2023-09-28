import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const Footer = () => {
  return (
    <section className={`py-3 ${styles.footerBg}`}>
      <div className="container ">
        <div className="row ">
          <div className="col-md ">
            <div className="row pb-5 text-center">
              <div className="col-md pt-5">
                <a
                  href="https://www.parrotpal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Image
                    src={Logo}
                    alt="ParrotPal Logo"
                    className={styles.img1}
                    width={150}
                    height={30}
                  /> */}
                  <Image
                    src="/LandingPageAssets/Images/FooterLogo.png"
                    alt="ParrotPal Logo"
                    className={`img-fluid ${styles.img1}`}
                    width={142}
                    height={26}
                  />
                </a>
              </div>
              <div className="col-md"></div>
            </div>
          </div>
          {/* <div className="col-md"></div> */}
          <div className="col-md col-sm-12 pt-5">
            <ul
              className={`list-unstyled text-lg-start text-center ${styles.customList}`}
            >
              <li>
                <span className={`text-light fw-bold ${styles.footerTitle}`}>
                  About
                </span>
              </li>
              <li className="py-3">
                <a href="#" className={`${styles.list}`}>
                  <span className={`${styles.secondaryLink}`}>
                    How to get started
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.list}`}>
                  <span className={`${styles.secondaryLink}`}>
                    Testimonials
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md text-center pt-5">
            <ul
              className={`list-unstyled text-lg-start text-center ${styles.customList}`}
            >
              <li>
                <span className={`text-light fw-bold ${styles.footerTitle}`}>
                  Support
                </span>
              </li>
              <li className="py-3">
                <a href="#" className={` ${styles.list}`}>
                  <span className={`${styles.secondaryLink}`}>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#" className={` ${styles.list}`}>
                  <span className={`${styles.secondaryLink}`}>Help Center</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md text-center pt-5">
            <ul
              className={`list-unstyled text-lg-start text-center ${styles.customList}`}
            >
              <li>
                <span className={`text-light fw-bold   ${styles.footerTitle}`}>
                  Legal
                </span>
              </li>
              <li className="py-3">
                <span className={`${styles.secondaryLink}`}>
                  <Link href="/appTerm  " className={styles.list}>
                    ParrotPal App Terms & Conditions
                  </Link>
                </span>
              </li>
              <li>
                <span className={`${styles.secondaryLink}`}>
                  <Link href="/appTerm" className={styles.list}>
                    ParrotPal App Privacy Policy
                  </Link>
                </span>
              </li>
              <li className="py-3">
                <span className={`${styles.secondaryLink}`}>
                  <Link href="/websiteTerm" className={styles.list}>
                    Website Terms & Conditions
                  </Link>
                </span>
              </li>
              <li className="">
                <span className={`${styles.secondaryLink}`}>
                  <Link href="/websiteTerm" className={styles.list}>
                    Website Privacy Policy
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-5">
          <p className="text-center text-light">
            Follow us on our Social Media Accounts
          </p>
          <div className="col-md d-flex justify-content-center justify-content-md-center ">
            <a
              href="#"
              className="mx-2 mx-md-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Facebook.svg"
                alt="Facebook Icon"
                className={styles.socIcons}
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://www.instagram.com/parrot.pal/?igshid=MzMyNGUyNmU2YQ=="
              className="mx-2 mx-md-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Instagram.svg"
                alt="Instagram Icon"
                className={styles.socIcons}
                width={28}
                height={28}
              />
            </a>
            <a
              href="#"
              className="mx-2 mx-md-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Twitter.svg"
                alt="Twitter Icon"
                className={styles.socIcons}
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.tiktok.com/@parrot.pal?_t=8fsKgj8JceH&_r=1"
              className="mx-2 mx-md-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/LandingPageAssets/Images/tiktok.svg"
                alt="Tiktok Icon"
                className={styles.socIcons}
                width={30}
                height={30}
              />
            </a>

            <a
              href="#"
              className="mx-2 mx-md-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
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
    </section>
  );
};

export default Footer;
