import React from "react";
import Image from "next/image";
import icon6 from "public/landing Page Assets/Icons/Icon 6.png";
import icon7 from "public/landing Page Assets/Icons/Icon 7.png";
import icon8 from "public/landing Page Assets/Icons/Icon 8.png";
import icon9 from "public/landing Page Assets/Icons/Icon 9.png";
import icon10 from "public/landing Page Assets/Icons/Icon 10.png";
import analytics from "public/landing Page Assets/Images/Analytics Image.png";
import styles from "./page.module.css";

const Tracking = () => {
  return (
    <section className={styles.tracking}>
      <div className="container py-5">
        <div class="row ">
          <div className="col-md-6 order-2 order-md-1">
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon6}
                  alt="check"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Intuitive Tracking
                    </h6>
                    <p className={styles.content}>
                      Speak, type, or scan, Get accurate data, no complications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon7}
                  alt="check"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Personalised Check-ins
                    </h6>
                    <p className={styles.content}>
                      Weekly updates tailored to your progress, guiding you
                      towards your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon8}
                  alt="check"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Creative Meals, Recipes & Foods
                    </h6>
                    <p className={styles.content}>
                      Using our verified databases of foods you can create
                      recipes, meals and foods and add them to your quick-add
                      pop-up menu for 1-tap tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon9}
                  alt="check"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Stuck on What to Eat?
                    </h6>
                    <p className={styles.content}>
                      Got some calories and protein left, but no idea what to
                      eat to hit your goals? Generate 8 food ideas to hit your
                      remaining targets. Easy-peasy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon10}
                  alt="check"
                  className={styles.img1}
                  width={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>Eating Out?</h6>
                    <p className={styles.content}>
                      Most people stop tracking when they eat out and take weeks
                      to get back into it. Just type it out or voice note
                      ParrotPal what you've eaten from the menu, and it will be
                      logged instantly. It works like magic!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md order-1 order-md-2">
            <Image
              src={analytics}
              alt="home"
              className={`img-fluid ${styles.img}`}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
