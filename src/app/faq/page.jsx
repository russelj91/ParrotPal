import React from "react";
import styles from "./page.module.css";

const Faq = () => {
  return (
    <section className={`py-5 ${styles.faqBg}`}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2 className={`text-lg-start text-center ${styles.title}`}>
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
                      Often dubbed the {'"80/20 rule"'}, the Pareto Principle
                      proposes that 20% of our actions lead to 80% of the
                      outcomes. For Instance: -20% of your wardrobe is won 80%
                      of the time.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      -20% of your friends provide 80% of the joy in your life.
                      <br />
                      -20% of your ideas lead to 80% of your success.
                    </p>
                    <p className={`${styles.accordionContent}`}>
                      Referred to as the {'"law of the vital few"'}, this idea
                      highlights that zeroing in on 20% of actions will produce
                      the highest results.
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
                    Do I need workout?
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quidem necessitatibus mollitia cumque aliquid
                    consequuntur omnis repellat eum quaerat doloribus.
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur eum possimus commodi dolores illum quo
                    doloremque dignissimos assumenda asperiores sint?
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
                    How are you 260% quicker than the market leader?
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio officiis quidem error. Earum harum quidem veritatis ad
                    quasi? Modi, aperiam.
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
                    How much is it?
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ratione maiores quod aliquid praesentium possimus
                    placeat ut repellat illum dignissimos!
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
