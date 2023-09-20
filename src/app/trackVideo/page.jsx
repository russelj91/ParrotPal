import React from "react";
import styles from "./page.module.css";

const TrackVideo = () => {
  return (
    <section className={styles.trackBg}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2
              className={`fw-bold  py-3 text-light text-lg-start text-center fw-bold d-none d-lg-inline d-md-block d-block d-md-none ${styles.title}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              How to track a brunch/dinner out
              <br /> and a weekend day when you forget.
            </h2>
            <p
              className={`fw-bold  text-light text-lg-start text-center d-block d-md-none  ${styles.title}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              How to track a brunch/dinner out
              <br />
              and a weekend day when you
              <br />
              forget
            </p>
            <img
              src="/LandingPageAssets/Images/phone1Hero.png"
              alt="Phone 1"
              className={`img-fluid ${styles.img} `}
              width={550}
              height={550}
            />
          </div>
          <div className="col-md pt-3">
            <div className="col-md">
              <div className="row align-items-center">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon6.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`my-3 ${styles.title1}`}>
                        Fat Loss Experts&#129309;AI Technology
                      </h6>
                      <p className={styles.content}>
                        With the combined might of 10 years of
                        <br />
                        fat loss & nutrition experts with
                        <br />
                        advanced AI, ParrotPal is the most
                        <br />
                        powerful fat loss tool in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon7.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`mb-3 ${styles.title1}`}>
                        Daily Podcasts
                      </h6>
                      <p className={styles.content}>
                        10 minute motivational and
                        <br />
                        educational podcasts to start your
                        <br />
                        day. Optional but powerful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon9.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`mb-3 ${styles.title1}`}>
                        Got calories but don&apos;t
                        <br />
                        know what to eat?
                      </h6>
                      <p className={styles.content}>
                        Use our food ideas generator. It will give
                        <br />
                        you a list of 8 food items to chose from
                        <br />
                        to hit your remaining calorie and
                        <br />
                        protein target.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon10.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`mb-3 ${styles.title1}`}>
                        Support Eating Out
                      </h6>
                      <p className={styles.content}>
                        Most people stop food logging when
                        <br />
                        they eat out and take weeks to get
                        <br />
                        back on track. Not here! Just tell
                        <br />
                        ParrotPal what you&apos;ve eatin from the
                        <br />
                        menu, and it will be logged instantly.
                        <br />
                        It works like magic!
                      </p>
                    </div>
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

export default TrackVideo;