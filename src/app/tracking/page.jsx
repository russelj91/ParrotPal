import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Tracking = () => {
  return (
    <section className={`${styles.tracking}`}>
      <div className="container py-5 ">
        <div class="row ">
          <div className="col-md-6 order-2 order-md-1">
            <div className="row align-items-center py-3">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/Icon6.png"
                  alt="Analytics"
                  className="img-fluid"
                  width={60}
                  height={60}
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
                  src="/LandingPageAssets/Images/Icon7.png"
                  alt="Analytics"
                  className="img-fluid"
                  width={60}
                  height={60}
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
                  src="/LandingPageAssets/Images/Icon8.png"
                  alt="Analytics"
                  className="img-fluid"
                  width={60}
                  height={60}
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
                  src="/LandingPageAssets/Images/Icon9.png"
                  alt="Analytics"
                  className="img-fluid"
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Stuck on What to Eat?&apos;
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
                  src="/LandingPageAssets/Images/Icon10.png"
                  alt="Analytics"
                  className="img-fluid"
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Eating Out?&apos;
                    </h6>
                    <p className={styles.content}>
                      Most people stop tracking when they eat out and take weeks
                      to get back into it. Just type it out or voice note
                      ParrotPal what you&rsquo;ve eaten from the menu, and it
                      will be logged instantly. It works like magic!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md order-1 order-md-2">
            <Image
              src="/LandingPageAssets/Images/Analytics.png"
              alt="Analytics"
              className="img-fluid mb-5"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
