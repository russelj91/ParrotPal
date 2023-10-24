import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const About = () => {
  return (
    <section className={` ${styles.aboutSection}`}>
      <div className="container pt-5">
        <div className="row text-center d-flex align-items-center justify-content-center">
          <h2 className={`py-3 d-block d-md-none ${styles.amplify}`} id="about">
            Simplify to Amplify
          </h2>
          <span
            className={`py-3 text-light d-none d-lg-inline d-md-block d-block d-md-none ${styles.desktopTitle}`}
            id="about"
          >
            Simplify to Amplify
          </span>

          {/* First Card */}
          <div className="col-md mb-4 ">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div className={`card-body pt-5 mt-lg-5 ${styles.customCard}`}>
                <div className={styles.circleBackground}>
                  <Image
                    src="/LandingPageAssets/Images/focus.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className={`card-title py-2 ${styles.cardTitle}`}>
                  Focus on What Matters
                </h2>
                <p className={`card-text px-3 ${styles.content}`}>
                  We focus on the 3 most important things Calories, protein &
                  steps
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md mx-lg-3 mb-4">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div className={`card-body  pt-5 mt-lg-5 ${styles.customCard}`}>
                <div className={styles.circleBackground}>
                  <Image
                    src="/LandingPageAssets/Images/speed.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className={`card-title py-2 ${styles.cardTitle}`}>
                  260% Faster than MFP
                </h2>
                <p className={`card-text px-5 ${styles.content}`}>
                  Log your food 260% quicker than on My Fitness Pal!
                  <br /> <br />
                  It&apos;s like voice noting your best friend on WhatsApp. That
                  quick & easy!
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md mb-4">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div className={`card-body pt-5 mt-lg-5  ${styles.customCard}`}>
                <div className={styles.circleBackground}>
                  <Image
                    src="/LandingPageAssets/Images/PersonalisedCheckIns.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className={`card-title py-2  ${styles.cardTitle}`}>
                  Personalized Check-ins
                </h2>
                <p className={`card-text px-5 ${styles.content}`}>
                  Stay on track with your fat loss with simple weekly check-ins.
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
