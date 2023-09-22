import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const TrackVideo = () => {
  return (
    <section className={styles.trackBg}>
      <div className="py-3 py-lg-5 container">
        <div className="row px-lg-5">
          <div className="col-md text-center">
            <div className="container">
              <h2
                className={`fw-bold py-3 text-light text-center fw-bold d-none d-lg-inline d-md-block d-block  ${styles.title}`}
              >
                <span className={styles.vid}>Video #1</span>
                <br />
                Here&apos;s how easy it is to track <br />
                dinner out with ParrotPal.
              </h2>
            </div>
            <p
              className={`fw-bold  text-light text-lg-start text-center d-block d-md-none  ${styles.titleMobile}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              How to track a brunch/dinner out
              <br />
              and a weekend day when you
              <br />
              forget
            </p>
            <Image
              src="/LandingPageAssets/Images/phone1Hero.png"
              alt="Phone 1"
              className={`img-fluid ${styles.img} `}
              width={550}
              height={550}
            />
          </div>
          <div className="col-md text-center">
            <div className="container">
              <h2
                className={`fw-bold py-3 text-light text-center fw-bold d-none d-lg-inline d-md-block d-block  ${styles.title}`}
              >
                <span className={styles.vid}>Video #2</span>
                <br />
                Here&apos;s how easy it is to find <br />
                recipes and create your own
              </h2>
            </div>
            <p
              className={`fw-bold  text-light text-lg-start text-center d-block d-md-none  ${styles.titleMobile}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              How to track a brunch/dinner out
              <br />
              and a weekend day when you
              <br />
              forget
            </p>
            <Image
              src="/LandingPageAssets/Images/phone1Hero.png"
              alt="Phone 1"
              className={`img-fluid ${styles.img} `}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackVideo;
