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
        <div className="container">
          <div className="row  pt-3  ">
            <div className="col-md">
              <div className="py-5">
                <h1
                  className={`mt-5 text-center text-lg-start text-light d-none d-lg-inline d-md-block d-block d-md-none ${styles.title2}`}
                >
                  <span className={styles.title1}>Revolutionising </span>
                  <br />
                  Fat Loss & Food
                  <br />
                  Tracking
                </h1>
              </div>

              <h1
                className={` d-block pt-2 d-md-none text-center  text-lg-start text-light ${styles.title2Mobile}`}
              >
                <span className={styles.title1}>The Revolution in</span>
                <br />
                Fat Loss & Food
                <br />
                Tracking
              </h1>
              <div className="text-center text-lg-start text-light">
                <p
                  className={`mt-5 d-none d-lg-inline d-md-block d-block d-md-none ${styles.desktopSub}`}
                >
                  No more time wasted counting calories the old way. <br />
                </p>
                <div className="py-3">
                  <p
                    className={`py-5 d-none d-lg-inline d-md-block d-block d-md-none ${styles.desktopSub1}`}
                  >
                    Using AI powered technology, It&apos;s never been
                    <br /> quicker to log your food.
                  </p>
                </div>

                <p className={`d-block d-md-none mt-4 ${styles.secondary}`}>
                  No more time wasted counting calories the old way.
                </p>
                <p className={`py-3 ${styles.noFuss}`}>
                  <span className={`${styles.noFuss1}`}>
                    No fuss, no countless taps.{" "}
                  </span>
                  Just say, type or scan
                  <br /> what you ate, and we handle the rest.
                </p>
                <button className={`btn btn-dark  ${styles.button}`}>
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
