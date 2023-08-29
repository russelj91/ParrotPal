import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page";
import Benefits from "./benefits/page";
import Tracking from "./tracking/page";
import Started from "./started/page";
import Simplicity from "./simplicity/page";
import Faq from "./faq/page";
import Review from "./revies/page";
import Phone from "public/landing Page Assets/Images/phone hero.png";
import arc from "public/landing Page Assets/Images/newarc.png";
import Phone1 from "public/landing Page Assets/Images/phone1 hero.png";
import apple from "public/landing Page Assets/Icons/apple.png";

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <div className="row  pt-5  ">
            <div className="col-md">
              <h1 className="display-4 fw-bold mt-5 text-start text-light">
                <span className={styles.title1}>Revolutionising</span>
                <br />
                Fat Loss & Food
                <br />
                Logging
              </h1>
              <div className="text-center text-lg-start text-light">
                <p className="fw-bold py-3">
                  Talk to Us Like You Talk to Your Best Friend!
                </p>
                <p className="py-2">
                  <span className="d-none d-lg-inline d-md-block d-block d-md-none">
                    No fuss, no countless taps.{" "}
                  </span>
                  Just say or type what
                  <br /> you ate, and we handle the rest.
                </p>
                <button
                  className={`btn btn-light rounded-pill px-5 ${styles.button}`}
                >
                  <div className={styles.buttonContent}>
                    <div className={styles.imageAndText}>
                      <div className={styles.imageContainer}>
                        <Image src={apple} alt="apple" width={30} />
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
                  <small className="d-block d-md-none">3-day Trial</small>
                </p>
              </div>
            </div>
            <div className="col-md text-end">
              <Image
                src={Phone}
                alt="home"
                className={`img-fluid ${styles.img} d-none d-md-block`}
              />
              <Image
                src={Phone1}
                alt="home"
                className={`img-fluid ${styles.img} d-block d-md-none`}
              />
            </div>
          </div>
        </div>
        <div className={styles.arc}>
          <Image
            src={arc}
            alt="home"
            className={`img-fluid ${styles.imgArc} `}
          />
        </div>
      </section>
      <About />
      <Benefits />
      <Tracking />
      <Started />
      <Simplicity />
      <Faq />
      <Review />
    </div>
  );
}
