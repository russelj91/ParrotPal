import React from "react";

import styles from "./page.module.css";

const Started = () => {
  return (
    <section className={styles.start}>
      <div className="container">
        <div className="row">
          <p
            className={`display-5 py-5 text-center text-light d-none d-lg-inline d-md-block d-block d-md-none ${styles.startedTitle}`}
          >
            How to get started
          </p>
          <div className="col-md">
            <p
              className={`  py-3 text-light text-lg-start text-center  d-none d-lg-inline d-md-block d-block d-md-none ${styles.title}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              <span className={styles.second}>
                How to create a recipes & meals and use our <br />
                16,000 strong recipes database and a weekend
                <br /> day when you forget.
              </span>
            </p>
            <p
              className={`  py-3 text-light text-lg-start text-center d-block d-md-none ${styles.title}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              <span className={styles.second}>
                How to create recipes & meals
                <br />
                and use our 16,000 strong recipes
                <br />
                datasbase
              </span>
            </p>

            <Image
              src="/LandingPageAssets/Images/phone1Hero.png"
              alt="Phone 1"
              className={`img-fluid ${styles.img} `}
              width={550}
              height={550}
            />
            <p
              className={`display-5  text-center text-light d-block d-md-none ${styles.startedTitle}`}
            >
              How to get started
            </p>
          </div>
          <div className="col-md">
            <div className="row align-items-center py-3 pt-5">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/one.png"
                  alt="My Image"
                  className="img-fluid"
                  width={70}
                  height={70}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h4 className={`mb-3 ${styles.title1}`}>
                      Setup in Seconds
                    </h4>
                    <p
                      className={`d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                    >
                      Download ParrotPal, complete a brief questionaire, and get
                      your personalised health targets.
                    </p>
                    <p className={`d-block d-md-none ${styles.content}`}>
                      Download ParrotPal, complete a<br />
                      brief questionaire, and get your
                      <br />
                      personalised health targets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/two.png"
                  alt="My Image"
                  className="img-fluid"
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h4 className={`mb-3 ${styles.title1}`}>
                      Hassle-Free Logging
                    </h4>
                    <p
                      className={`d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                    >
                      Eat out or enjoy home-cooked meal - just speak, type or
                      scan. No second-guessing, just accurate, easy tracking.
                      Leveraging data from various restaurants, ParrotPal offers
                      the best average to minimize errors.
                    </p>
                    <p className={`d-block d-md-none ${styles.content}`}>
                      Eat out or enjoy home-cooked
                      <br />
                      meals - just speak, type or scan.
                      <br />
                      Leveraging data from thousands
                      <br />
                      of restaurants, ParrotPal offers a<br />
                      meal&apos;s average nutrients to
                      <br />
                      minimise logging errors and
                      <br />
                      provide accurate, easy tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/three.png"
                  alt="My Image"
                  className="img-fluid"
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>Weekly Insights</h6>
                    <p
                      className={`d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                    >
                      Get a broader view of your habits with weekly summaries.
                      As your metabolism changes, ParrotPal adapts, ensuring
                      you&apos;re always on the right track for fat loss.
                    </p>
                    <p className={`d-block d-md-none ${styles.content}`}>
                      Get a broader view of your eating
                      <br />
                      habits with weekly summaries.
                      <br />
                      ParrotPal adapts to you, ensuring
                      <br />
                      you&apos;re always on the right track for
                      <br />
                      fat loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/four.png"
                  alt="My Image"
                  className="img-fluid"
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Custom meal plans
                    </h6>
                    <p
                      className={`d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                    >
                      Dive into tailored meal plans or get inspired with our
                      unique food idea generator.
                    </p>
                    <p className={`d-block d-md-none ${styles.content}`}>
                      Dive into made for you meal plans
                      <br />
                      or get inspired with our unique
                      <br />
                      food idea generator.
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
