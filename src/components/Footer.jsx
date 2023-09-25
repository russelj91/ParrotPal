import React from "react";
import Image from "next/image";
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
                <a href="#" className={`${styles.list}`}>
                  <span className={`${styles.primaryLink}`}>About</span>
                </a>
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
                <a href="#" className={`fw-bold ${styles.list}`}>
                  <span className={`${styles.footerTitle}`}>Support</span>
                </a>
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
                <a href="#" className={`fw-bold ${styles.list}`}>
                  <span className={`${styles.footerTitle}`}>Legal</span>
                </a>
              </li>
              <li className="py-3">
                <a href="#" className={`${styles.list}`}>
                  <span className={`${styles.secondaryLink}`}>
                    Terms of Use
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={` ${styles.list}`}>
                  <span className={`${styles.secondaryLink}`}>
                    Privacy Policy
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-5">
          <p className="text-center text-light">
            Follow us on our Social Media Acounts
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
              a<Image
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
