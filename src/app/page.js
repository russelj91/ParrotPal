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
                    <span className={styles.title1}>The Revolution in</span>
                    <br />
                    <span className="mx-lg-5 px-lg-3">Fat Loss &</span>
                    <br />
                    <span className="px-lg-4">Food Tracking</span>
                  </h1>
                </div>
              </div>

              <h1
                className={`mt-5 d-block d-md-none text-center  text-lg-start text-light ${styles.title2Mobile}`}
              >
                <span className={styles.title1}>The Revolution in</span>
                <br />
                Fat Loss & Food
                <br />
                Tracking
              </h1>
              <div className="text-center text-lg-start text-light">
                <div
                  className={`mb-lg-4 mx-lg-4 ${styles.desktopWasted} pt-lg-5`}
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
                <div className=" mx-lg-4">
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
                    <button className={`btn btn-dark   ${styles.button}`}>
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
                            <span className={styles.download}>
                              Download on the
                              <br />
                              <span className={styles.appleApp}>App Store</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <p className="text-center ">
                  <small className={`d-block d-md-none mt-2 ${styles.trial}`}>
                    3-day Free Trial
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
      <Simplicity />
      <Faq />
      <Review />
    </div>
  );
}
