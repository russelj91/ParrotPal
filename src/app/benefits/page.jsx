import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Benefits = () => {
  const Food1URL = "/landingPageAssets/Images/Image23.png";
  const icon1URL = "/landingPageAssets/Icons/Icon1.png";
  const icon2URL = "/landingPageAssets/Icons/Icon2.png";
  const icon3URL = "/landingPageAssets/Icons/Icon3.png";
  const icon4URL = "/landingPageAssets/Icons/Icon4.png";

  return (
    <section className={styles.benefitsBg}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md">
            <h2 className="fw-bold display-5 py-3 text-light">
              The Benefits of <br />
              ParrotPal At A Glance
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <Image
              src={Food1URL}
              alt="home"
              className={`img-fluid ${styles.img}`}
              width={550}
              height={550}
            />
          </div>
          <div className="col-md">
            <div className="row align-items-center">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon1URL}
                  alt="icon1"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Swift and Simple
                    </h6>
                    <p className={styles.content}>
                      Log your food 260% faster than other leading apps.
                      It&apos;s like talking or voice noting your best friend on
                      WhatsApp. That easy!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-2">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon2URL}
                  alt="icon2"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Focus on What Matters
                    </h6>
                    <p className={styles.content}>
                      Concentrate on the essential trio for weight loss -
                      Protein, Calories, Steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-2">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon3URL}
                  alt="icon3"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Culinary Inspiration
                    </h6>
                    <p className={styles.content}>
                      Wondering what to eat? Let our bespoke meal plans guide
                      you, and you&apos;ll get your custom plan and food ideas
                      in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-2">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon4URL}
                  alt="icon4"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Generate Custom Meal Plans
                    </h6>
                    <p className={styles.content}>
                      Fill out a short questionaire and get your own custom meal
                      plan tailored to your calories and protein target in
                      seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-2">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src={icon2URL}
                  alt="icon2"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>16,000 Recipes</h6>
                    <p className={styles.content}>
                      If you need recipe inspiration, search our 16,000 verified
                      recipies databases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
