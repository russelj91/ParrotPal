import React from "react";
import styles from "./page.module.css";

const Faq = () => {
  return (
    <section className={`pt-3 ${styles.faqBg}`}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2
              className={`text-lg-start text-center d-none d-lg-inline d-md-block d-block ${styles.title}`}
            >
              Frequenty Asked
              <br />
              Questions
            </h2>
            <h2
              className={`text-lg-start text-center d-block d-md-none ${styles.titleMobile}`}
            >
              Frequenty Asked
              <br />
              Questions
            </h2>
          </div>
          <div className="col-md">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className={`accordion-button collapsed  text-light py-4 ${styles.myAccordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Why the name ParrotPal?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className={`accordion-body text-light py-5 ${styles.accordionBody}`}
                  >
                    <p className={`${styles.accordionContent}`}>
                      ParrotPal is the embodiment of two powerful concepts: the
                      Pareto Principle and the symbolism of the parrot.
                    </p>
                    <div className=" py-3">
                      <span className={`${styles.accordionTitle}`}>
                        Understanding The Pareto Principle
                      </span>
                    </div>

                    <p className={`${styles.accordionContent}`}>
                      Often dubbed the &apos;80/20 rule&apos;, the Pareto
                      Principle proposes that 20% of our actions lead to 80% of
                      the outcomes. For Instance: -20% of your wardrobe is won
                      80% of the time.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      -20% of your friends provide 80% of the joy in your life.
                      <br />
                      -20% of your ideas lead to 80% of your success.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Referred to as the &apos;law of the vital few&apos;, this
                      idea highlights that zeroing in on 20% of actions will
                      produce the highest results.
                    </p>
                    <div className=" py-3">
                      <span className={`${styles.accordionTitle}`}>
                        The Nature of the Parrot
                      </span>
                    </div>
                    <p className={`${styles.accordionContent}`}>
                      Parrots are friendly, attentive and known for their
                      mimicry. After absorbing the main parts of a coversation,
                      thet communicate only key information back to their owner.
                      Just as a parrot selectively chooses which phrases to
                      mimic, ParrotPal empowers users to focus only on the
                      crucial aspects of their health journey, reflecting what
                      truly matters.
                    </p>
                    <div className=" py-3">
                      <span className={`${styles.accordionTitle}`}>
                        How This Shapes ParrotPal&apos;s Approach to Fat Loss
                      </span>
                    </div>
                    <p className={`${styles.accordionContent}`}>
                      In the realm if fat loss, you could be swamped by
                      countless considerations. But, impactful results rest
                      mainly on three pillas: calories, protein and steps. This
                      trio, if adhered to, can lead to transformative fat loss
                      outcomes.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      ParrotPal, embracing both the 80/20 rule and the
                      parrot&apos;s selective mimicry, focuses only on these
                      three elements. Our app is designed to champion essential
                      trio, and eliminate distractions to further drive fat loss
                      results. While other platforms may offer myriad tracking
                      metrics, our philosophy is aobut focusing on what
                      genuinely counts, ensuring you spend less time on the app
                      and more time living vibrantly, just like our feathery
                      mascot.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className={`accordion-button collapsed  text-light py-4 ${styles.myAccordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Do I need to go to the gym for this to work?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className={`accordion-body text-light fw-bold py-5 ${styles.accordionBody}`}
                  >
                    <p className={`${styles.accordionContent}`}>
                      Absolutely not. If fat loss is your main concern, you
                      don&apos;t need to worry about workouts.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Let me show you why workouts are not that powerful for fat
                      loss when we look at a full week view.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      You have 168 hours per week in total.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      56 hours per week you&apos;ll be asleep (roughly) and 112
                      hours awake.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      If you did 5 x 1 hour workouts, that&apos;s 5 hours per
                      week of workout time.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      If you did 5 x 1 hour workouts, that&apos;s 5 hours per
                      week of workout time.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      As a percentage, that&apos;s just 4.4% of your hours
                      awake, and 2.9% of total hours per week.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      What you do during the other 95.6% of your hours awake is
                      far more important than the hour at the gym for fat loss.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      That&apos;s why with ParrotPal we&apos;re focusing on
                      daily movement as a lifestyle.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Hit your step target, take the stairs, stand up more, take
                      the long way home, pick up things, tidy up, embrace all of
                      these little movements as they add up to create the
                      biggest results.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      So for now, don&apos;t stress about workouts.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Hit your steps, protein and calories and watch the magic
                      happen.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Note: we are not advocating for you to not workout.
                      Working out with weights has many health benefits. But you
                      should not workout just to burn calories. You should do it
                      to become stronger, faster and more resilient. However, we
                      are realistic and for many of you time is limited so we
                      want to focus on what really matters for fat loss. You can
                      use ParrotPal alongside a workout plan but if your main
                      goal is fat loss and you&apos;re stressed about the 100
                      things you can do, just focus on the ParrotPal big 3:
                      calories, protein and steps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className={`accordion-button collapsed  text-light py-4 ${styles.myAccordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How accurate is the the food logging of ParrotPal?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className={`accordion-body text-light fw-bold py-5 ${styles.accordionBody}`}
                  >
                    <p className={`${styles.accordionContent}`}>
                      ParrotPal is designed with precision in mind. We leverage
                      extensive, verified food databases—akin to those used by
                      platforms like Nutracheck. On top of this, we harness the
                      power of AI technology.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      When you log complex or unique foods, especially from
                      dining out experiences, ParrotPal doesn&apos;t merely
                      guess. Recognizing the variability in restaurant dishes
                      due to different chefs, ingredients, and preparations,
                      ParrotPal calculates an average based on similar items and
                      meals. This method offers a more realistic estimate
                      compared to relying on a single data point, as restaurant
                      calorie count can often be inconsistent.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      If we have verified information for a food item,
                      that&apos;s what you&apos;ll see. If not, our system
                      provides averages, ensuring you get the best possible
                      estimate. Additionally, our expansive barcode scanning
                      database facilitates quick and accurate logging.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      If we have verified information for a food item,
                      that&apos;s what you&apos;ll see. If not, our system
                      provides averages, ensuring you get the best possible
                      estimate. Additionally, our expansive barcode scanning
                      database facilitates quick and accurate logging.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      So overall, not only does ParrotPal rival the bigger apps
                      with verified foods databases, it uses a completely new
                      way of finding and tracking food for you which is instant.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className={`accordion-button collapsed  text-light py-4 ${styles.myAccordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    How are you quicker than MFP by 260%?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className={`accordion-body text-light fw-bold py-5 ${styles.accordionBody}`}
                  >
                    <p className={`${styles.accordionContent}`}>
                      We&apos;ve conducted side-by-side tests comparing the
                      speed of meal logging in ParrotPal versus MFP &
                      Nutracheck, utilising experienced users of each platform.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Our results revealed that, even among seasoned MFP and
                      Nutracheck users, ParrotPal outpaced them, logging
                      individual foods and comprehensive meals a whopping 260%
                      faster.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      For newcomers to the realm of food tracking,
                      ParrotPal&apos;s interface is refreshingly straightforward
                      - providing the same action as sending a text message. In
                      contrast, other apps are laden with multiple screens and a
                      plethora of items to sift through, select, and edit, and
                      can be very daunting to use. We believe ParrotPal offers a
                      speedier, easier and more intuitive experience, especially
                      for those who aren&apos;t familiar with typical food
                      tracking apps.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Now that we&apos;ve shared the secret to fat loss and
                      built you the best tool possible to help you implement it
                      (you&apos;re welcome), we&apos;ll answer your next
                      question…
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className={`accordion-button collapsed text-light py-4 ${styles.myAccordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    How much does it cost?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className={`accordion-body text-light fw-bold py-5 ${styles.accordionBody}`}
                  >
                    <p className={`${styles.accordionContent}`}>
                      You start with a 3-day free trial and then onto
                      straightforward pricing.
                    </p>
                    <div className=" py-3">
                      <span className={`${styles.accordionTitle}`}>
                        Choose between:
                      </span>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        {" "}
                        <p className={`${styles.accordionContent}`}>
                          Monthly £9.99
                        </p>
                      </li>
                      <li>
                        {" "}
                        <p className={`${styles.accordionContent}`}>
                          Annually £99 (Saving £21)
                        </p>
                      </li>
                    </ul>
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

export default Faq;
