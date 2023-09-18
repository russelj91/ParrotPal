import React from "react";
import styles from "./page.module.css";

const TrackVideo = () => {
  return (
    <section className={styles.trackBg}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2
              className={`fw-bold  py-3 text-light text-lg-start text-center ${styles.title}`}
            >
              <span className={styles.vid}>Video:</span>
              <br />
              How to track a brunch/dinner out
              <br /> and a weekend day when you forget.
            </h2>
            <img
              src="/LandingPageAssets/Images/phone1Hero.png"
              alt="Phone 1"
              className={`img-fluid ${styles.img} `}
              width={550}
              height={550}
            />
          </div>
          <div className="col-md pt-5 mt-3">
            <div className="col-md">
              <div className="row align-items-center">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon1.png"
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
                        Fat Loss Experts AI Technology
                      </h6>
                      <p className={styles.content}>
                        With the combined might of 10 years of fat loss &
                        nutrition experts With advanced AI, ParrotPal is the
                        most powerful fat loss tool in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon2.png"
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
                        10 minute motivational and educational podcasts to start
                        your day. Optional but powerful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon3.png"
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
                        Got calories but don&apos;t know what to eat?
                      </h6>
                      <p className={styles.content}>
                        Use our food ideas generator. It will give you a list of
                        8 food items to chose from to hit your remaining calorie
                        and protein target.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <img
                    src="/LandingPageAssets/Images/Icon4.png"
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
                        Most people stop food logging when they eat out and take
                        weeks to get back on track. Not here! Just tell
                        ParrotPal what you&apos;ve eatin from the menu, and it
                        will be logged instantly. It works like magic!
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
