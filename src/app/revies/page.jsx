import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Review = () => {
  const Client = "/landingPageAssets/Images/Profile.png";
  const quote = "/landingPageAssets/Icons/quote.png";
  return (
    <section className={`py-5 ${styles.reviewBg}`}>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-md">
            <Image
              src={quote}
              alt="Quotation mark"
              className={`img-fluid pb-5 ${styles.img1}`}
              width={60}
              height={60}
            />
            <h2 className="fw-bold display-5 text-light">
              What our users
              <br />
              say about
              <br />
              <span className={styles.title}>ParrotPal</span>
            </h2>
          </div>
          <div className={`col-md py-5 ${styles.reviewCol}`}>
            <div
              id="testimonialCarousel"
              className={`carousel slide ${styles.carousel}`}
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-7">
                      <div
                        className={`d-flex flex-column align-items-center ${styles.imgContainer}`}
                      >
                        <Image
                          src={Client}
                          alt="client"
                          className={`img-fluid ${styles.img}`}
                          height={250}
                          width={250}
                        />
                      </div>
                    </div>
                    <div className="col-md">
                      <div className={` ${styles.reviewContent}`}>
                        <h4 className={styles.person}>Ariel William</h4>
                        <p className={styles.personTitle}>Fitness Enthusiast</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col pt-5 px-5">
                      <p className={`text-light ${styles.paragraph}`}>
                        As a busy professional, ParrotPal has been a lifesaver.
                        The app&apos;s
                        <br />
                        personalized meal plans and live coaching keep me on
                        track even on the
                        <br />
                        busiest days. Watching my progress unfold through the
                        tracking tools has
                        <br />
                        been incredibly rewarding
                      </p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-7">
                      <Image
                        src={Client}
                        alt="client"
                        className={`img-fluid ${styles.img}`}
                        height={250}
                        width={250}
                      />
                    </div>
                    <div className="col-md">
                      <div className={` ${styles.reviewContent}`}>
                        <h4 className={styles.person}>Ariel William</h4>
                        <p className={styles.personTitle}>Fitness Enthusiast</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col pt-5 px-5">
                      <p className={`text-light ${styles.paragraph}`}>
                        As a busy professional, ParrotPal has been a lifesaver.
                        The app&apos;s
                        <br />
                        personalized meal plans and live coaching keep me on
                        track even on the
                        <br />
                        busiest days. Watching my progress unfold through the
                        tracking tools has
                        <br />
                        been incredibly rewarding
                      </p>
                    </div>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
