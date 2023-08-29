import React from "react";
import Image from "next/image";
import meal from "public/landing Page Assets/Images/meal.png";
import styles from "./page.module.css";

const Simplicity = () => {
  return (
    <section className={`py-5 ${styles.simpBg}`}>
      <div className={`container py-5 ${styles.simp}`}>
        <div className={styles.gridContainer}>
          <div className={styles.content}>
            <h2 className={`display-4 ${styles.title}`}>
              Empowering Simplicity
            </h2>
            <p className="fw-bold text-light">
              All the features you need, nothing you don&apos;t. Say
              <br /> good goodbye to information overload.
            </p>
            <button
              className={`btn btn-light py-2 px-5 rounded-pill fw-bold ${styles.button}`}
            >
              Start free 3 days trial
            </button>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={meal}
              alt="home"
              className={`img-fluid ${styles.img}`}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplicity;
