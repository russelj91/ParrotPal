import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page";
import Benefits from "./benefits/page";
import Tracking from "./tracking/page";
import Started from "./started/page";
import Simplicity from "./simplicity/page";
import Faq from "./faq/page";
import Review from "./revies/page";

export default function Home() {
  const phoneImgUrl = "/landingPageAssets/Images/phoneHero.png";
  const arcImgUrl = "/landingPageAssets/Images/newarc.png";
  const phone1ImageUrl = "/landingPageAssets/Images/phone1Hero.png";
  const appleImgUrl = "/landingPageAssets/Icons/apple.png";

  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <div className="row  pt-5  ">
            <div className="col-md">
              <h1 className="display-4 fw-bold mt-5 text-start text-light">
                <span className={styles.title1}>Revolutionising </span>
                <br />
                Fat Loss & Food
                <br />
                Logging
              </h1>
              <div className="text-center text-lg-start text-light">
                <p className="fw-bold py-3">
                  Talk to Us Like You Talk to Your Best Friend!
                </p>
                <p className="py-2">
                  <span className="d-none d-lg-inline d-md-block d-block d-md-none">
                    No fuss, no countless taps.{" "}
                  </span>
                  Just say or type what
                  <br /> you ate, and we handle the rest.
                </p>
                <button
                  className={`btn btn-light rounded-pill px-5 ${styles.button}`}
                >
                  <div className={styles.buttonContent}>
                    <div className={styles.imageAndText}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={appleImgUrl}
                          alt="Apple Icon"
                          className={styles.img}
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={styles.textContainer}>
                        <span className={styles.download}>
                          Download on the
                          <br />
                          <span className={styles.appleApp}>App Store</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                <p className="text-center ">
                  <small className="d-block d-md-none">3-day Trial</small>
                </p>
              </div>
            </div>
            <div className="col-md text-end">
              <Image
                src={phoneImgUrl}
                alt="Phone Image"
                className={`img-fluid ${styles.img} d-none d-md-block`}
                width={550}
                height={550}
              />
              <Image
                src={phone1ImageUrl}
                alt="Phone Image"
                className={`img-fluid ${styles.img} d-block d-md-none`}
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
        <div className={styles.arc}>
          <Image
            src={arcImgUrl}
            alt="arc"
            className={`img-fluid ${styles.imgArc} `}
            width={1950}
            height={550}
          />
        </div>
      </section>
      <About />
      <Benefits />
      <Tracking />
      <Started />
      <Simplicity />
      <Faq />
      <Review />
    </div>
  );
}
