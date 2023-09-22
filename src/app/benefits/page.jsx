import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Benefits = () => {
  return (
    <section className={styles.benefitsBg}>
      <div className="container py-5">
        <div className="row">
          <p
            className={`fw-bold display-5  text-center py-3 pb-5 text-light  text-center d-none d-lg-inline d-md-block d-block  ${styles.benefitsTitle}`}
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
        <div className="row px-lg-5 mx-lg-5 ">
          <div className="col-md mx-auto ml-lg-auto mr-lg-auto">
            <div className="row align-items-center">
              <div className="col-3 col-md-2 text-center">
                <Image
                  src="/LandingPageAssets/Images/Icon1.png"
                  alt="Analytics"
                  className={`img-fluid ${styles.img}`}
                  width={50}
                  height={50}
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
                      Log your food 260% faster than
                      <br /> other leading apps. It&apos;s like texting <br />
                      or voice noting your best friend on
                      <br />
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
                  width={50}
                  height={50}
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
                      Concentrate on the essential
                      <br />
                      trio for weight loss:
                      <br /> Protein, Calories, Steps.
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
                  width={50}
                  height={50}
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
                      Stay consistent on your fat loss
                      <br />
                      journey, with simple weekly check-
                      <br />
                      ins. Tweak your targets and keep
                      <br /> those pounds dropping!
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
                  width={50}
                  height={50}
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
                      Fill out a short questionaire and
                      <br /> get your own custom meal plan
                      <br /> tailored to your calorie and protein
                      <br /> targets in seconds! (And if you
                      <br /> don&apos;t like it you can generate
                      <br />
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
                  width={50}
                  height={50}
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
                      Wondering what to eat? Get
                      <br /> inspired by our database of 16,000
                      <br /> recipe with ingredient lists &<br /> methods. Got
                      chicken? Search
                      <br /> &apos;chicken&apos; and we will return a list
                      <br /> of recipes based on chicken in
                      <br /> order of lowest calories per portion
                      <br /> to higher. So easy!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="col-md">
              <div className="row align-items-center">
                <div className="col-3 col-md-2 text-center">
                  <Image
                    src="/LandingPageAssets/Images/Icon6.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`my-3 ${styles.title1}`}>
                        Fat Loss Experts&#129309;AI Technology
                      </h6>
                      <p
                        className={`d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                      >
                        With the combined might of 10
                        <br /> years of fat loss & nutrition experts
                        <br /> with advanced AI, ParrotPal is the
                        <br />
                        most powerful fat loss tool in the
                        <br /> world.
                      </p>
                      <p className={`d-block d-md-none ${styles.content}`}>
                        With the combined might of 10 years of
                        <br />
                        fat loss & nutrition experts with
                        <br />
                        advanced AI, ParrotPal is the most
                        <br />
                        powerful fat loss tool in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <Image
                    src="/LandingPageAssets/Images/Icon7.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`mb-3 ${styles.title1}`}>
                        Daily Podcasts
                      </h6>
                      <p
                        className={`d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                      >
                        10 minute motivational and
                        <br /> educational podcasts to start
                        <br />
                        your day. Optional but powerful.
                      </p>
                      <p className={`d-block d-md-none ${styles.content}`}>
                        10 minute motivational and
                        <br />
                        educational podcasts to start your
                        <br />
                        day. Optional but powerful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <Image
                    src="/LandingPageAssets/Images/Icon9.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`mb-3 ${styles.title1}`}>
                        Got calories but don&apos;t
                        <br />
                        know what to eat?
                      </h6>
                      <p
                        className={`d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                      >
                        Use our food ideas generator. It
                        <br /> will give you a list of 8 food items
                        <br /> to chose from to hit your
                        <br /> remaining calorie and protein
                        <br /> target.
                      </p>
                      <p className={`d-block d-md-none ${styles.content}`}>
                        Use our food ideas generator. It will give
                        <br />
                        you a list of 8 food items to chose from
                        <br />
                        to hit your remaining calorie and
                        <br />
                        protein target.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-2">
                <div className="col-3 col-md-2 text-center">
                  <Image
                    src="/LandingPageAssets/Images/Icon10.png"
                    alt="Analytics"
                    className={`img-fluid ${styles.img}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-9 col-md-10">
                  <div className="row">
                    <div className={`col-md-12 ${styles.contentWrapper}`}>
                      <h6 className={`mb-3 ${styles.title1}`}>
                        Support Eating Out
                      </h6>
                      <p
                        className={`d-none d-lg-inline d-md-block d-block  ${styles.content}`}
                      >
                        Most people stop food logging
                        <br /> when they eat out and take weeks
                        <br /> to get back on track. Not here! Just
                        <br /> tell ParrotPal what you&apos;ve eatin
                        <br /> from the menu, and it will be
                        <br /> logged instantly.
                        <br /> It works like magic!
                      </p>
                      <p className={`d-block d-md-none ${styles.content}`}>
                        Most people stop food logging when
                        <br />
                        they eat out and take weeks to get
                        <br />
                        back on track. Not here! Just tell
                        <br />
                        ParrotPal what you&apos;ve eatin from the
                        <br />
                        menu, and it will be logged instantly.
                        <br />
                        It works like magic!
                      </p>
                    </div>
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
