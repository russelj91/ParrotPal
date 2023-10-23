import React from "react";
import styles from "./page.module.css";
import About from "./about/page";
import Benefits from "./benefits/page";
import TrackVideo from "./trackVideo/page";
import Image from "next/image";
// import Tracking from "./tracking/page";
import Started from "./started/page";
import Simplicity from "./simplicity/page";
import Faq from "./faq/page";
import Review from "./revies/page";

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className="container pt-lg-5">
          <div className="row  pt-3  ">
            <div className="col-md">
              <div className="mt-5">
                <div className=" px-lg-3 mx-lg-5">
                  <h1
                    className={`mt-5  text-light d-none d-lg-inline d-md-block d-block  ${styles.title2}`}
                  >
                    <span className={styles.title1}>Ai Powered Calorie</span>
                    <br />
                    <span className=" px-lg-2">Tracker & Nutrition</span>
                    <br />
                    <span className="mx-lg-5 px-lg-5">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coach
                    </span>
                  </h1>
                  <a
                    className={` btn btn-outline-info text-light px-lg-3 rounded-full mt-5  d-none  d-md-block d-block ${styles.button}`}
                    href="#video"
                  >
                    Look at this revolutionary app below
                  </a>
                </div>
              </div>

              <h1
                className={`mt-5 d-block d-md-none text-center  text-lg-start text-light ${styles.title2Mobile}`}
              >
                <span className={styles.title1}>Ai Powered Calorie</span>
                <br />
                Tracker & Nutrition
                <br />
                Coach
              </h1>
              <a
                className={` btn btn-outline-info text-light d-block d-md-none  ${styles.button}`}
                href="#video"
              >
                Look at this revolutionary app below
              </a>
              <div className="text-center text-lg-start text-light">
                <div
                  className={`mb-lg-4 mx-lg-5 ${styles.desktopWasted} pt-lg-5`}
                >
                  <p
                    className={`mt-5 d-none d-lg-inline d-md-block d-block d-md-none ${styles.desktopSub}`}
                  >
                    No more time wasted counting calories the old <br />
                    way.
                  </p>
                </div>

                <p className={`d-block pt-3 d-md-none  ${styles.secondary}`}>
                  No more time wasted counting calories the old way.
                </p>
                <div className=" mx-lg-5">
                  <p
                    className={`py-3 d-none  d-lg-inline d-md-block d-block d-md-none ${styles.noFussDesktop}`}
                  >
                    <span className={`${styles.noFuss1Desktop}`}>
                      No fuss, no countless taps.{" "}
                    </span>
                    Just say, type or scan
                    <br /> what you ate, and we handle the rest.
                  </p>
                  <p className={`py-3  d-block d-md-none ${styles.noFuss}`}>
                    <span className={`${styles.noFuss1}`}>
                      No fuss, no countless taps.{" "}
                    </span>
                    Just say, type or scan
                    <br /> what you ate, and we handle the rest.
                  </p>
                  <div className="mx-lg-5 px-lg-5 mt-lg-5">
                    <div className="container px-lg-5">
                      <a href="https://apps.apple.com/app/parrotpal-calorie-tracker/id6462694790">
                        <button
                          className={`btn btn-light rounded-pill px-lg-5 d-none  d-lg-inline d-md-block d-block d-md-none  ${styles.button}`}
                        >
                          <div className={styles.buttonContent}>
                            <div className={styles.imageAndText}>
                              <div className={styles.imageContainer}>
                                <Image
                                  src="/LandingPageAssets/Images/apple.png"
                                  alt="Apple Icon"
                                  className={`img-fluid ${styles.img}`}
                                  width={35}
                                  height={35}
                                />
                              </div>
                              <div className={styles.textContainer}>
                                <span className={styles.download}>
                                  Download on the
                                  <br />
                                  <span className={styles.appleApp}>
                                    App Store
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      </a>
                      <div className="d-flex justify-content-center">
                        <a href="https://apps.apple.com/app/parrotpal-calorie-tracker/id6462694790">
                          <button
                            className={`btn btn-dark px-lg-5 d-block d-md-none  ${styles.button}`}
                          >
                            <div className={styles.buttonContent}>
                              <div className={styles.imageAndText}>
                                <div className={styles.imageContainer}>
                                  <Image
                                    src="/LandingPageAssets/Images/whiteapple.png"
                                    alt="Apple Icon"
                                    className={`img-fluid ${styles.img}`}
                                    width={35}
                                    height={35}
                                  />
                                </div>
                                <div className={styles.textContainer}>
                                  <span className={styles.downloadMobile}>
                                    Download on the
                                    <br />
                                    <span className={styles.appleAppMobile}>
                                      App Store
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center ">
                  <small className={`d-block d-md-none mt-2 ${styles.trial}`}>
                    7-day Free Trial
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md text-end">
              <p
                className={`d-block d-md-none mt-3 text-light  text-center ${styles.magic}`}
              >
                Look at the magic and ease of tracking
                <br />
                with ParrotPal by watching this short video.
              </p>
              <Image
                src="/LandingPageAssets/Images/phoneHero.png"
                alt="Phone Hero "
                className={`img-fluid ${styles.img} d-none d-md-block`}
                width={550}
                height={550}
              />
              <Image
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
          <Image
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
      {/* <Tracking /> */}
      <Started />
      {/* <Simplicity /> */}
      <Faq />
      <Review />
    </div>
  );
}
