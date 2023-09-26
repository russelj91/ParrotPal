import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Review = () => {
  return (
    <section className={`py-3 ${styles.reviewBg}`}>
      <div className="container">
        <div className="row ">
          <div className="col-md">
            <Image
              src="/LandingPageAssets/Images/quote.png"
              alt="Quotation Mark"
              className={`img-fluid pb-5 ${styles.img1}`}
              width={60}
              height={60}
            />
            <br />
            <h2
              className={`text-start pb-2 d-none d-lg-inline d-md-block d-block ${styles.reviewTitle}`}
            >
              What our users 
              <br />
              say  about <br/>
              Parrot
              <span className={styles.titleOrange}>Pal</span>
            </h2>
            <h2
              className={`text-start pb-2 d-block d-md-none ${styles.reviewTitleMobile}`}
            >
              What our users say
              <br />
              about
              <span className={styles.title}> ParrotPal</span>
            </h2>
          </div>
          <div className={`col-md py-5 }`}>
            <div className={`card ${styles.reviewCol}`}>
              <div
                id="testimonialCarousel"
                className={`carousel slide ${styles.carousel}`}
                data-bs-ride="carousel"
              >
                <div className="carousel-inner py-5">
                  <div className="carousel-item active">
                    <div className="row px-lg-5">
                      <div className="col-md-7">
                        <div
                          className={`d-flex flex-column align-items-center  ${styles.imgContainer}`}
                        >
                          <Image
                            src="/LandingPageAssets/Images/person7.png"
                            alt="Client Profile"
                            className={`img-fluid rounded-3 ${styles.img}`}
                            width={250}
                            height={250}
                          />
                        </div>
                      </div>
                      <div className="col-md">
                        <div
                          className={`text-center text-lg-start ${styles.reviewContent}`}
                        >
                          <h4 className={styles.person}>Ioan Jones</h4>
                          <p className={styles.personTitle}>Coach</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          I can&apos;t believe how easy this app is to track
                          your food. It understands Context, It makes it fun to
                          track. I&apos;ve use all the tracking apps and my
                          clients have too. I&apos;m switching all my clients to
                          ParrotPal to track their calories and check-ins from
                          now on. It&apos;s no brainer this is the future.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md-7">
                        <Image
                          src="/LandingPageAssets/Images/person7.png"
                          alt="Client Profile"
                          className={`img-fluid rounded-3 ${styles.img}`}
                          width={250}
                          height={250}
                        />
                      </div>
                      <div className="col-md">
                        <div
                          className={`text-center text-lg-start ${styles.reviewContent}`}
                        >
                          <h4 className={styles.person}>Ioan Jones</h4>
                          <p className={styles.personTitle}>Coach</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          I can&apos;t believe how easy this app is to track
                          your food. It understands Context, It makes it fun to
                          track. I&apos;ve use all the tracking apps and my
                          clients have too. I&apos;m switching all my clients to
                          ParrotPal to track their calories and check-ins from
                          now on. It&apos;s no brainer this is the future.
                        </p>
                      </div>
                    </div>
                  </div>
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
      </div>
    </section>
  );
};

export default Review;
