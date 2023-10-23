import { FaStar } from "react-icons/fa";
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
              say about <br />
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
                  {/* <div className="carousel-item active">
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
                          className={`text-center  ${styles.reviewContent}`}
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
                  </div> */}

                  <div className="carousel-item active">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@Bellabella1742</h4>
                          <p className={styles.personTitle}>Revolutionary!</p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          Finnaly Solving the frustration of food tracking apps
                          with huge data bases and endless scrolling. After a
                          short survey my calories and protein targets were
                          calculated, on one easy to use screen.
                          <br /> <br />I could see my progress and add the foods
                          I have eaten during the day. Being able to go out for
                          food with friends and easily voice note or text what
                          you have eaten and it is logged immediately is a game
                          changer! A daily podcast and the ultimate trio of
                          steps, calories and protein is an easy way of fat
                          loss!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>LewMojo</h4>
                          <p className={styles.personTitle}>Brilliant!</p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          After using countless tracking apps and trying to find
                          the right apps that adapt to my own goals this is the
                          first that has nailed my expectations. Really please
                          with how easy it is to use. Can&apos;t beleive
                          it&aposl;s taken until now for an app to be spot on
                          with weight loss tracking.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@Ciz1</h4>
                          <p className={styles.personTitle}>Unbelievable app</p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          So much easier to use than other apps, love the fact
                          you can voice record your meals and it tracks it all
                          perfectly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@Salini</h4>
                          <p className={styles.personTitle}>Leaps ahead</p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          This app makes calorie tracking a breeze. No need for
                          scanning, looking up meals or ingredients. Just tell
                          it! You literally talk to the app and say exactly what
                          you had, and it&apo;s all taken care of for you.
                          <br />
                          <br />
                          Best calorie tracker out there.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@Liza L215</h4>
                          <p className={styles.personTitle}>Faulous app!</p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          This app is so esy to set up and use. I really love
                          the voice notes and the way I can just log things so
                          easily when I&apos;m out and aout. Game changer!
                          <br />
                          <br />
                          Dashoard is clear and stats are easy to view.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@Cunliffe94</h4>
                          <p className={styles.personTitle}>
                            Amazing App, lifesaver!
                          </p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          Tried out the app for a week now and it&apos;s changed
                          calorie tracking completely. You can just voice
                          message your days meals and it works out all the magic
                          for you!,
                          <br />
                          <br />
                          Class!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@Shredded sick Kent</h4>
                          <p className={styles.personTitle}>
                            {" "}
                            The solution to tracking for weight loss.
                          </p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          What we are used to = type / search / scroll / edit /
                          quantity confirm / redo this for other food items.
                          <br />
                          <br />
                          Parrotpl is just magic. You type in or voice note what
                          you&pos;ve eaten and it finds the nutritional info of
                          that for you AND tracks it. All from one screen and
                          one entry point.
                          <br />
                          <br />
                          This app is just for weight loss so it&apos;s already
                          figured out the calories and protein I should eat
                          daily to lose 1 pound of fat a week too.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row  px-lg-5">
                      <div className="col-md">
                        <div className={`text-center  ${styles.reviewContent}`}>
                          <h4 className={styles.person}>@deanjl22</h4>
                          <p className={styles.personTitle}>
                            Finally, a simple and brilliant weight loss tracker!
                          </p>
                          <p className={styles.personTitle1}>from: AppStore</p>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col pt-5 px-5">
                        <p className={`text-light ${styles.paragraph}`}>
                          I&apos;ve used countless trackers and I&apos;ve found
                          many of them to be overly-complicated and requires too
                          many clicks. I also know that many of the foods/meals
                          in your typical calorie counter app can be massively
                          inacurrate.
                          <br />
                          <br />
                          The brialliance of Parrot Pal is that mitigates
                          inaccuracies to support a more accurate calculations
                          of calories. And the best bit is it does it in seconds
                          throught text or audio!
                          <br />
                          <br />
                          Brilliant solution. Also - with it being AI - excited
                          for it to learn about me and my preferences to further
                          increase the accuray!
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
