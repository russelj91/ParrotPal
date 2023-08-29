import React from "react";
import Image from "next/image";
import how from "public/landing Page Assets/Images/Image How to Get Started.png";
import one from "public/landing Page Assets/Icons/one.png";
import two from "public/landing Page Assets/Icons/two.png";
import three from "public/landing Page Assets/Icons/three.png";
import four from "public/landing Page Assets/Icons/four.png";
import styles from "./page.module.css";

const Started = () => {
  return (
    <section className={styles.start}>
      <div className="container">
        <div className="row">
          <h2 className="fw-bold display-5 py-5 text-center text-light">
            How to get started
          </h2>
          <div className="col-md">
            <Image
              src={how}
              alt="home"
              className={`img-fluid ${styles.img}`}
            ></Image>
          </div>
          <div className="col-md">
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={one}
                  alt="icon1"
                  className={styles.img1}
                  width={70}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Setup in Seconds
                    </h6>
                    <p className={styles.content}>
                      Download ParrotPal, complete a brief questionaire, and get
                      your personalised health targets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={two}
                  alt="icon1"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Hassle-Free Logging
                    </h6>
                    <p className={styles.content}>
                      Eat out or enjoy home-cooked meal - just speak, type or
                      scan. No second-guessing, just accurate, easy tracking.
                      Leveraging data from various restaurants, ParrotPal offers
                      the best average to minimize errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={three}
                  alt="icon1"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>Weekly Insights</h6>
                    <p className={styles.content}>
                      Get a broader view of your habits with weekly summaries.
                      As your metabolism changes, ParrotPal adapts, ensuring
                      you&apos;re always on the right track for fat loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={four}
                  alt="icon1"
                  className={styles.img1}
                  width={65}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Custom meal plans
                    </h6>
                    <p className={styles.content}>
                      Dive into tailored meal plans or get inspired with our
                      unique food idea generator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Started;
