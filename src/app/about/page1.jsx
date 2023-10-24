import React from "react";
import Image from "next/image";

import styles from "./page.module.css";

const Aboutone = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-3">
            <a href="#">
              <div
                className={`${styles.card} ${styles.serviceCard} ${styles.cardInverse}`}
              >
                <div className={styles.cardBlock}>
                  <span className="fa fa-lightbulb-o fa-3x"></span>
                  <h4 className="card-title">Creative</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#">
              <div
                className={`${styles.card} ${styles.serviceCard} ${styles.cardInverse}`}
              >
                <div className={styles.cardBlock}>
                  <span className="fa fa-bolt fa-3x"></span>
                  <h4 className="card-title">Energetic</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#">
              <div
                className={`${styles.card} ${styles.serviceCard} ${styles.cardInverse}`}
              >
                <div className={styles.cardBlock}>
                  <span className="fa fa-eye fa-3x"></span>
                  <h4 className="card-title">Focused</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutone;
