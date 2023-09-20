import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Simplicity = () => {
  return (
    <section className={`py-5 ${styles.simpBg}`}>
      <div className={`container py-5  `}>
        <div className="row">
          <div className="col-md ">
            <div className={`card  ${styles.simp}`}>
              <div className={styles.gridContainer}>
                <div className={styles.content}>
                  <p
                    className={`text-center text-lg-start pt-5 ${styles.title}`}
                  >
                    {'"The Fastest Fat Loss Tool"'}
                  </p>

                  <p
                    className={`d-none d-lg-inline d-md-block d-block d-md-none ${styles.content}`}
                  >
                    All the features you need, nothing you don&apos;t. <br />
                    Say hello to a healthier, more condident you!
                  </p>
                  <p
                    className={`d-block d-md-none pb-3 text-start ${styles.content}`}
                  >
                    All the features you need, nothing
                    <br />
                    you don&apos;t. Say hello to a healthier,
                    <br />
                    more condident you!
                  </p>
                  <button
                    className={`btn btn-light py-2 px-5 py-3 rounded-pill fw-bold ${styles.button}`}
                  >
                    Start free 3 days trial
                  </button>
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
      <div className="container"></div>
    </section>
  );
};

export default Simplicity;
