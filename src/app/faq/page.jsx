import React from "react";
import styles from "./page.module.css";

const Faq = () => {
  return (
    <section className={`py-5 ${styles.faqBg}`}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2
              className={`fw-bold display-5 text-lg-start text-center ${styles.title}`}
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
                    className={`accordion-button collapsed fw-bold text-light py-4 ${styles.myAccordion}`}
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
                    className={`accordion-body text-light fw-bold py-5 ${styles.accordionBody}`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta minus, dolore dolor laborum ad est id libero. Aliquid,
                    iste in!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className={`accordion-button collapsed fw-bold text-light py-4 ${styles.myAccordion}`}
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
                    className={`accordion-button collapsed fw-bold text-light py-4 ${styles.myAccordion}`}
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
                    className={`accordion-button collapsed fw-bold text-light py-4 ${styles.myAccordion}`}
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
                    className={`accordion-button collapsed fw-bold text-light py-4 ${styles.myAccordion}`}
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
