import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const About = () => {
  return (
    <section className={` ${styles.aboutSection}`}>
      <div className="container py-5">
        <div className="row text-center d-flex align-items-center justify-content-center">
          <h2
            className={`py-3  d-block d-md-none ${styles.amplify}`}
            id="about"
          >
            Simplify to Amplify
          </h2>
          <span
            className={`py-3 text-light d-none d-lg-inline d-md-block d-block d-md-none ${styles.desktopTitle}`}
            id="about"
          >
            Less effort, Bigger Results
          </span>
          <div className="col-md-3 mb-4">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div
                className={`card-body d-flex flex-column align-items-center justify-content-center ${styles.customCard}`}
              >
                <div className={styles.circleBackground}>
                  <Image
                    src="/LandingPageAssets/Images/focus.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <p className={`card-title py-2  ${styles.cardTitle}`}>
                  Focus on What Matters
                </p>
                <p
                  className={`card-text text-light  d-block d-md-none ${styles.contentMobile}`}
                >
                  There&apos;s 100s of things you could track for
                  <br />
                  fat loss, most don&apos;t matter.
                </p>
                <p
                  className={`card-text text-light   d-block d-md-none ${styles.contentMobile}`}
                >
                  We only focus on the 3 main goals at fat loss: calories,
                  protein and steps
                </p>
                <p
                  className={`card-text text-light fw-bold d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                >
                  No hours wasted individually tracking
                  <br />
                  each ingredient and movement.
                </p>
                <p
                  className={`card-text text-light fw-bold d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                >
                  We only focus on the 3 main goals at fat loss:
                  <br />
                  calories, protein and steps
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 mx-5">
            <div className={`card ${styles.transparentCard} mt-3`}>
              <div
                className={`card-body d-flex flex-column align-items-center justify-content-center ${styles.customCard}`}
              >
                <div className={styles.circleBackground}>
                  <Image
                    src="/LandingPageAssets/Images/speed.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h5 className={`card-title py-2  ${styles.cardTitle}`}>
                  260% faster than MFP
                </h5>
                <p
                  className={`card-text text-light  d-block d-md-none ${styles.contentMobile}`}
                >
                  Log your food 260% quicker than on
                  <br />
                  My Fitness Pal! It&apos;s like voice noting
                  <br />
                  your best friend on WhatsApp.
                  <br />
                  That quick & easy!
                </p>
                <p
                  className={`card-text text-light fw-bold d-none d-lg-inline d-md-block d-block d-md-none${styles.content}`}
                >
                  Log your food 260% quicker
                  <br />
                  than on my Fitness Pal!
                </p>
                <p
                  className={`card-text text-light fw-bold  d-none d-lg-inline d-md-block d-block d-md-none${styles.content}`}
                >
                  Its like voice noting your best friend
                  <br />
                  on WhatsApp. That quick!
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
                  <Image
                    src="/LandingPageAssets/Images/PersonalisedCheckIns.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={80}
                    height={80}
                  />
                </div>
                <h5 className={`card-title py-2  ${styles.cardTitle}`}>
                  Personalized Check-ins
                </h5>
                <p
                  className={`card-text text-light  d-block d-md-none ${styles.contentMobile}`}
                >
                  Stay on track with your fat loss
                  <br />
                  with simple weekly check-ins.
                </p>
                <p
                  className={`card-text text-light  d-block d-md-none ${styles.contentMobile}`}
                >
                  ParrotPal keeps you accountable and will,
                  <br />
                  tweak your calories, protein & steps based
                  <br />
                  on changes to your metabolism.
                </p>
                <p
                  className={`card-text text-light fw-bold  d-none d-lg-inline d-md-block d-block d-md-none${styles.content}`}
                >
                  Stay on track with your fat loss
                  <br />
                  with simple weekly check-ins.
                </p>
                <p
                  className={`card-text text-light fw-bold  d-none d-lg-inline d-md-block d-block d-md-none${styles.content}`}
                >
                  Tweak your targets and
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
