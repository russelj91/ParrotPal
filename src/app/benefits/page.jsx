import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Benefits = () => {
  return (
    <section className={styles.benefitsBg}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md">
            <p
              className={`fw-bold display-5 py-3 text-light text-lg-start text-center d-none d-lg-inline d-md-block d-block  ${styles.benefitsTitle}`}
            >
              The Benefits of <br />
              Parrot<span className={styles.pal}>Pal</span> At A Glance
            </p>
            <p
              className={`fw-bold display-5 py-3 text-light text-lg-start text-center  d-block d-md-none  ${styles.benefitsTitleMobile}`}
            >
              The Benefits of <br />
              Parrot<span className={styles.pal}>Pal</span> At A Glance
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <Image
              src="/LandingPageAssets/Images/Image23.png"
              alt="Analytics"
              className={`img-fluid mb-5  d-none d-lg-inline d-md-block d-block  ${styles.img}`}
              width={550}
              height={550}
            />
          </div>
          <div className="col-md">
            <div className="row align-items-center">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/Icon1.png"
                  alt="Analytics"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`my-3 ${styles.title1}`}>
                      Swift and Simple to Use
                    </h6>
                    <p className={`  d-block d-md-none ${styles.content}`}>
                      Log your food 260% faster than other
                      <br />
                      leading apps. It&apos;s like talking or voice <br />
                      noting your best friend on WhatsApp. <br />
                      That easy!
                    </p>
                    <p
                      className={` d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                    >
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
                  src="/LandingPageAssets/Images/Icon2.png"
                  alt="Analytics"
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
                    <p className={` d-block d-md-none ${styles.content}`}>
                      Concentrate only on the essential
                      <br />
                      goals for weight loss:
                      <br />
                      calories, protein and steps.
                    </p>
                    <p
                      className={` d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                    >
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
                  src="/LandingPageAssets/Images/Icon3.png"
                  alt="Analytics"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>
                      Weekly Check-ins
                    </h6>

                    <p className={` d-block d-md-none ${styles.content}`}>
                      Stay consistent on your fat loss journey
                      <br />
                      with simple weekly check-ins. Your
                      <br />
                      targets will be tweaked based on
                      <br />
                      changes to your metabolism to keep
                      <br />
                      those pounds dropping!
                    </p>
                    <p
                      className={` d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                    >
                      Stay consistent on your fat loss journey, with simple
                      weekly check-ins.
                      <br />
                      Tweak your targets and keep those pounds dropping!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-2">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/Icon4.png"
                  alt="Analytics"
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
                    <p className={` d-block d-md-none ${styles.content}`}>
                      Fill out a short questionaire and get
                      <br />
                      your own custom meal plan tailored
                      <br />
                      to your calorie and protein targets in <br />
                      seconds! (And if you don&apos;t like it you
                      <br />
                      can generate more variations) .
                    </p>
                    <p
                      className={`d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                    >
                      Fill out a short questionaire and get your own custom meal
                      plan tailored to your calorie and protein targets in
                      seconds! (And if you don&apos;t like it you can generate
                      more variations) .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-2">
              <div className="col-3 col-md-2 text-center">
                <img
                  src="/LandingPageAssets/Images/Icon2.png"
                  alt="Analytics"
                  className={`img-fluid ${styles.img}`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="col-9 col-md-10">
                <div className="row">
                  <div className={`col-md-12 ${styles.contentWrapper}`}>
                    <h6 className={`mb-3 ${styles.title1}`}>16,000 Recipes</h6>
                    <p className={` d-block d-md-none ${styles.content}`}>
                      Wondering what to eat? Get inspired by
                      <br />
                      our database of 16,000 recipe with
                      <br />
                      ingredient lists & methods. Got
                      <br />
                      chicken? Search {'"chicken"'} and we will
                      <br />
                      return a list of recipes based on
                      <br />
                      chicken in order of lowest calories per
                      <br />
                      portion to higher. So easy!
                    </p>
                    <p
                      className={`d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                    >
                      Wondering what to eat? Get inspired by our database of
                      16,000 recipe with ingredient lists & methods. Got
                      chicken? Search &apos;chicken&apos; and we will return a
                      list of recipes based on chicken in order of lowest
                      calories per portion to higher. So easy!
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
