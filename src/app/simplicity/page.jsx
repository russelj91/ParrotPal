import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Simplicity = () => {
  return (
    <section className={`py-3 py-lg-5 ${styles.simpBg}`}>
      <div className={`container  `}>
        <div className="row">
          <div className="col-md">
            <div className={`card  ${styles.simp}`}>
              <div className={styles.gridContainer}>
                <div className={styles.content}>
                  <div className="container mx-lg-5 px-lg-5">
                    <div className="text-start">
                      <p
                        className={`text-start   pt-4 pt-lg-5 d-none  d-md-block d-block ${styles.title}`}
                      >
                        {'"The Fastest Fat Loss Tool"'}
                      </p>
                      <p
                        className={`text-center   pt-4 pt-lg-5 d-block d-md-none ${styles.mobileTitle}`}
                      >
                        {'"The Fastest Fat Loss Tool"'}
                      </p>

                      <p className={` d-none d-lg-inline d-md-block d-block `}>
                        All the features you need, nothing you don&apos;t.{" "}
                        <br />
                        Say hello to a healthier, more condident you!
                      </p>
                      <p
                        className={`d-block d-md-none pb-3 text-start mx-4 ${styles.mobileContent}`}
                      >
                        All the features you need, nothing
                        <br />
                        you don&apos;t. Say hello to a healthier,
                        <br />
                        more condident you!
                      </p>
                      <br />
                      <div
                        className={`d-none d-lg-inline  d-md-block d-block ${styles.desktopButton}`}
                      >
                        {/* <button
                          className={`btn btn-light py-2 px-5  rounded-pill fw-bold ${styles.buttonDesktop}`}
                        >
                          Download on the App Store
                        </button> */}
                        <div className="pt-lg-5 mt-lg-3">
                          <a href="https://apps.apple.com/app/parrotpal-calorie-tracker/id6462694790">
                            <button
                              className={`btn btn-light rounded-pill px-4 d-flex align-items-center ${styles.button}`}
                            >
                              <Image
                                src="/LandingPageAssets/Images/apple.png"
                                alt="Apple Icon"
                                className={`img-fluid mx-2 ${styles.appleImg}`}
                                width={30}
                                height={30}
                              />
                              <div className="d-flex flex-column ml-2">
                                <span className={`${styles.desktopDownload}`}>
                                  Download on the
                                </span>
                                <span className={`${styles.desktopApp}`}>
                                  App Store
                                </span>
                              </div>
                            </button>
                          </a>
                        </div>
                      </div>

                      <div className="text-center d-block d-md-none">
                        <button
                          className={`btn btn-light py-3 px-3  rounded-pill fw-bold ${styles.buttonMobile}`}
                        >
                          Start a FREE 3 day trial
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
