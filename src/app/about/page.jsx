import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const About = () => {
  return (
    <section className={` ${styles.aboutSection}`}>
      <div className="container py-5">
        <div className="row text-center d-flex align-items-center justify-content-center">
          <h2 className="fw-bold display-5 py-3 text-light" id="about">
            Simplify to Amplify
          </h2>
          <div className="col-md-3 mb-4">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div
                className={`card-body d-flex flex-column align-items-center justify-content-center ${styles.customCard}`}
              >
                <div className={styles.circleBackground}>
                  <img
                    src="/LandingPageAssets/Images/focus.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h5 className={`card-title py-4 ${styles.cardTitle}`}>
                  Focus on What Matters
                </h5>
                <p className={`card-text text-light pb-5 ${styles.content}`}>
                  Chat or voice note your food, like texting a friend.
                  <br />
                  Focus on the big 3 of fat loss: calories, protein, steps.
                </p>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for the other cards */}
          <div className="col-md-3 mb-4 mx-5">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div
                className={`card-body d-flex flex-column align-items-center justify-content-center ${styles.customCard}`}
              >
                <div className={styles.circleBackground}>
                  <img
                    src="/LandingPageAssets/Images/speed.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h5 className={`card-title py-4 ${styles.cardTitle}`}>
                  260% faster than MFP
                </h5>
                <p className={`card-text text-light pb-3 ${styles.content}`}>
                  Log your food 260% faster than other leading apps!
                  <br />
                  (And it&apos;s way more fun)
                  <br />
                  <br />
                  It&apos;s like talking or voice noting your best friend on
                  <br />
                  WhatsApp. That easy!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div
                className={`card-body d-flex flex-column align-items-center justify-content-center ${styles.customCard}`}
              >
                <div className={styles.circleBackground}>
                  <img
                    src="/LandingPageAssets/Images/PersonalisedCheckIns.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h5 className={`card-title py-4 ${styles.cardTitle}`}>
                  Personalized Check-ins
                </h5>
                <p className={`card-text text-light pb-3 ${styles.content}`}>
                  Stay on track. Simple weekly check-ins to tweak
                  <br />
                  your target to
                  <br />
                  <br />
                  <br />
                  keep those pounds dropping!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
