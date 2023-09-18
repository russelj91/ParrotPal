import React from "react";
import styles from "./page.module.css";
import About from "./about/page";
import Benefits from "./benefits/page";
import TrackVideo from "./trackVideo/page";
import Tracking from "./tracking/page";
import Started from "./started/page";
import Simplicity from "./simplicity/page";
import Faq from "./faq/page";
import Review from "./revies/page";

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <div className="row  pt-5  ">
            <div className="col-md">
              <h1
                className={`display-4  mt-5 text-center text-lg-start text-light ${styles.title2}`}
              >
                <span className={styles.title1}>Revolutionising </span>
                <br />
                Fat Loss & Food
                <br />
                Logging
              </h1>
              <div className="text-center text-lg-start text-light">
                <p className=" py-2 fw-bold">
                  No more time wasted counting calories.
                </p>
                <p className=" py-5 d-none d-lg-inline d-md-block d-block d-md-none">
                  Using AI powered technology, It&apos;s never been
                  <br /> quicker to log your food.
                </p>
                <p className="py-3">
                  <span className="fw-bold ">No fuss, no countless taps. </span>
                  Just say, type or scan
                  <br /> what you ate, and we handle the rest.
                </p>
                <button className={`btn btn-dark  px-4  ${styles.button}`}>
                  <div className={styles.buttonContent}>
                    <div className={styles.imageAndText}>
                      <div className={styles.imageContainer}>
                        <img
                          src="/LandingPageAssets/Images/whiteapple.png"
                          alt="Apple Icon"
                          className={`img-fluid ${styles.img}`}
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
                  <small className={`d-block d-md-none mt-2 ${styles.trial}`}>
                    3-day Free Trial
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md text-end">
              <img
                src="/LandingPageAssets/Images/phoneHero.png"
                alt="Phone Hero "
                className={`img-fluid ${styles.img} d-none d-md-block`}
                width={550}
                height={550}
              />
              <img
                src="/LandingPageAssets/Images/phone1Hero.png"
                alt="Phone 1"
                className={`img-fluid ${styles.img} d-block d-md-none`}
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
        <div className={styles.arc}>
          <img
            src="/LandingPageAssets/Images/arc1.png"
            alt="My Image"
            className={`img-fluid ${styles.imgArc} `}
            width={1950}
            height={550}
          />
        </div>
      </section>
      <About />
      <Benefits />
      <TrackVideo />
      <Tracking />
      <Started />
      <Simplicity />
      <Faq />
      <Review />
    </div>
  );
}
