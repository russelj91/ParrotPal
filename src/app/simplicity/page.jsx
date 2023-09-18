import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Simplicity = () => {
  return (
    <section className={`py-5 ${styles.simpBg}`}>
      <div className={`container py-5 ${styles.simp}`}>
        <div className={styles.gridContainer}>
          <div className={styles.content}>
            <h2 className={`display-6 ${styles.title}`}>
              {'"The Fastest Fat Loss Tool"'}
            </h2>

            <p className="fw-bold text-light">
              All the features you need, nothing you don&apos;t. <br />
              Say hello to a healthier, more condident you!
            </p>
            <button
              className={`btn btn-light py-2 px-5 rounded-pill fw-bold ${styles.button}`}
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
    </section>
  );
};

export default Simplicity;
