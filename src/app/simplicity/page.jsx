import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Simplicity = () => {
  return (
    <section className={`py-3 ${styles.simpBg}`}>
      <div className={`container  `}>
        <div className="row">
          <div className="col-md">
            <div className={`card  ${styles.simp}`}>
              <div className={styles.gridContainer}>
                <div className={styles.content}>
                  <div className="container mx-lg-5 px-lg-5">
                    <div className="text-start">
                      <p
                        className={`text-start   pt-5 d-none  d-md-block d-block ${styles.title}`}
                      >
                        {'"The Fastest Fat Loss Tool"'}
                      </p>
                      <p
                        className={`text-center   pt-5 d-block d-md-none ${styles.mobileTitle}`}
                      >
                        {'"The Fastest Fat Loss Tool"'}
                      </p>

                      <p
                        className={` d-none d-lg-inline d-md-block d-block mb-5`}
                      >
                        All the features you need, nothing you don&apos;t.{" "}
                        <br />
                        Say hello to a healthier, more condident you!
                      </p>
                      <p
                        className={`d-block d-md-none pb-3 text-center ${styles.mobileContent}`}
                      >
                        All the features you need, nothing
                        <br />
                        you don&apos;t. Say hello to a healthier,
                        <br />
                        more condident you!
                      </p>
                      <div
                        className={`d-none d-lg-inline d-md-block d-block mb-5 ${styles.desktopButton}`}
                      >
                        <button
                          className={`btn btn-light py-2 px-5  rounded-pill fw-bold ${styles.buttonDesktop}`}
                        >
                          Start free 3 days trial
                        </button>
                      </div>

                      <div className="text-center d-block d-md-none">
                        <button
                          className={`btn btn-light py-2 px-5  rounded-pill fw-bold ${styles.buttonMobile}`}
                        >
                          Start free 3 days trial
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/LandingPageAssets/Images/meal.png"
                    alt="My Image"
                    className={`img-fluid ${styles.img}`}
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplicity;
