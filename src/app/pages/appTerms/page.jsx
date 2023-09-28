import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const AppTerms = () => {
  return (
    <section className={styles.app}>
      <div className={`container ${styles.appContainer}`}>
        <div className="row">
          <h2 className={`py-2 pt-5 ${styles.title}`}>Terms and Conditions</h2>
          <h2 className={`py-2 ${styles.subTitle}`}>
            Terms and Conditions of ParrotPal:{" "}
            <span className="fw-bold">Instant Calorie Tracker</span>
          </h2>
          <div className="col">
            <p className={styles.content}>
              These Terms govern the use of this Application, and, any other
              related Agreement or legal relationship with the Owner in a
              legally binding way. Capitalised words are defined in the relevant
              dedicated section of this document. The User must read this
              document carefully. Although the entire contractual relationship
              relating to these Products is entered into solely by the Owner and
              Users, Users acknowledge and agree that, where this Application
              has been provided to them via the Apple App Store, Apple may
              enforce these Terms as a third-party beneficiary.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              This Application is provided by:
            </p>
            <p className={styles.content}>ParrotPal</p>
            <p className={styles.content}>Unit 2 Acer Court</p>
            <p className={styles.content}>Cross Hands</p>
            <p className={styles.content}>Carmarthenshire</p>
            <p className={styles.content}>SA146RE</p>
            <p className={styles.content}>
              <span className="fw-bold">Owner contact email:</span>{" "}
              scott@scottflear.com
            </p>
            <p className={styles.content}>
              This Application refers to this website, including its subdomains
              and any other website through which the Owner makes its Service
              available; applications for mobile, tablet and other smart device
              systems; the Application Program Interfaces (API); the Service;
              any applications, sample and content files, source code, scripts,
              instruction sets or software included as part of the Service, as
              well as any related documentation.
            </p>
            <h2 className={`py-2 ${styles.title}`}>
              What the User should know at a glance.
            </h2>
            <p className={styles.content}>
              This Application uses automatic renewal for Product subscriptions.
              Information about the (a. renewal period, b. termination details
              and c. termination notice can be found in the relevant section of
              these Terms). The right of withdrawal only applies to European
              Consumers. The right of withdrawal, also commonly called the right
              of cancellation in the UK, is consistently referred to as the
              right of withdrawal within this document. Usage of this
              Application and the Service is age restricted: to access and use
              this Application and its Service the User must be an adult under
              applicable law. The Service/this Application is only intended for
              Consumers.
            </p>
            <h2 className={`py-2 ${styles.title}`}>Terms of Use</h2>
            <p className={styles.content}>
              Unless otherwise specified, the terms of use detailed in this
              section apply generally when using this Application. Single or
              additional conditions of use or access may apply in specific
              scenarios and in such cases are additionally indicated within this
              document.
            </p>

            <h2 className={`py-2 ${styles.subTitle}`}>
              By using this Application, Users confirm to meet the following
              requirements:
            </h2>

            <ul className={`list-unstyled ${styles.ul}`}>
              <li className={styles.list}>Users must qualify as Consumers</li>
              <li className={styles.list}>
                Users must be recognised as adult by applicable law
              </li>
              <li className={styles.list}>
                Users aren&apos;t located in a country that is subject to a U.S.
                Government embargo, or that has been designated by the U.S.
                Government as a terrorist-supporting country
              </li>
              <li>
                Users aren&apos;t listed on any U.S. Government list of
                prohibited or restricted parties
              </li>
            </ul>

            <h2 className={`py-2 ${styles.subTitle}`}>Account Registration</h2>
            <ul className={`list-unstyled ${styles.ul}`}>
              <li className={styles.list}>
                To use the Service Users must register or create a User account,
                providing all required data or information in a complete and
                truthful manner.
              </li>
              <li className={styles.list}>
                Failure to do so will cause unavailability of the Service.
              </li>
              <li className={styles.list}>
                Users are responsible for keeping their login credentials
                confidential and safe. For this reason, Users are also required
                to choose passwords that meet the highest standards of strength
                permitted by this Application.
              </li>
              <li className={styles.list}>
                By registering, Users agree to be fully responsible for all
                activities that occur under their username and password.
              </li>
              <li className={styles.list}>
                Users are required to immediately and unambiguously inform the
                Owner via the contact details indicated in this document, if
                they think their personal information, including but not limited
                to User accounts, access credentials or personal data, have been
                violated, unduly disclosed or stolen.
              </li>
            </ul>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Conditions for account registration
            </h2>
            <p className={styles.content}>
              Registration of User accounts on this Application is subject to
              the conditions outlined below. By registering, Users agree to meet
              such conditions.
            </p>
            <ul className={`list-unstyled ${styles.ul}`}>
              <li className={styles.list}>
                Accounts registered by bots or any other automated methods are
                not permitted.
              </li>
              <li className={styles.list}>
                Unless otherwise specified, each User must register only one
                account.
              </li>
              <li className={styles.list}>
                Unless explicitly permitted, a User account may not be shared
                with other persons.
              </li>
            </ul>
            <h2 className={`py-2 ${styles.subTitle}`}>Account termination</h2>
            <p className={styles.content}>
              Users can terminate their account and stop using the Service at
              any time by doing the following:
            </p>
            <p className={styles.content}>
              By using the tools provided for account termination on this
              Application.
            </p>
            <p className={styles.content}>
              By directly contacting the Owner at the contact details provided
              in this document.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Account suspension and deletion
            </h2>
            <p className={styles.content}>
              The Owner reserves the right, at its sole discretion, to suspend
              or delete at any time and without notice, User accounts which it
              deems inappropriate, offensive or in violation of these Terms.
            </p>
            <p className={styles.content}>
              The suspension or deletion of User accounts shall not entitle
              Users to any claims for compensation, damages or reimbursement.
            </p>
            <p className={styles.content}>
              The suspension or deletion of accounts due to causes attributable
              to the User does not exempt the User from paying any applicable
              fees or prices.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Content on this Application
            </h2>
            <p className={styles.content}>
              Unless where otherwise specified or clearly recognizable, all
              content available on this Application is owned or provided by the
              Owner or its licensors. The Owner undertakes its utmost effort to
              ensure that the content provided on this Application infringes no
              applicable legal provisions or third-party rights. However, it may
              not always be possible to achieve such a result. In such cases,
              without prejudice to any legal prerogatives of Users to enforce
              their rights, Users are kindly asked to preferably report related
              complaints using the contact details provided in this document.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Rights regarding content on this Application â€“ All rights
              reserved
            </h2>
            <p className={styles.content}>
              The Owner holds and reserves all intellectual property rights for
              any such content. Users may not, therefore, use such content in
              any way that is not necessary or implicit in the proper use of the
              Service. In particular, but without limitation, Users may not
              copy, download, share (beyond the limits set forth below), modify,
              translate, transform, publish, transmit, sell, sublicense, edit,
              transfer/assign to third parties or create derivative works from
              the content available on this Application, nor allow any third
              party to do so through the User or their device, even without the
              User&apos;s knowledge. Where explicitly stated on this
              Application, the User may download, copy and/or share some content
              available through this Application for its sole personal and
              non-commercial use and provided that the copyright attributions
              and all the other attributions requested by the Owner are
              correctly implemented. Any applicable statutory limitation or
              exception to copyright shall stay unaffected.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Access to external resources
            </h2>
            <p className={styles.content}>
              Through this Application, Users may have access to external
              resources provided by third parties. Users acknowledge and accept
              that the Owner has no control over such resources and is therefore
              not responsible for their content and availability. Conditions
              applicable to any resources provided by third parties, including
              those applicable to any possible grant of rights in content,
              result from each such third parties terms and conditions or, in
              the absence of those, applicable statutory law.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Acceptable use</h2>
            <p className={styles.content}>
              This Application and the Service may only be used within the scope
              of what they are provided for, under these Terms and applicable
              law. Users are solely responsible for making sure that their use
              of this Application and/or the Service violates no applicable law,
              regulations or third-party rights. Therefore, the Owner reserves
              the right to take any appropriate measure to protect its
              legitimate interests including by denying Users access to this
              Application or the Service, terminating contracts, reporting any
              misconduct performed through this Application or the Service to
              the competent authorities and such as judicial or administrative
              authorities â€“ whenever Users engage or are suspected to engage
              in any of the following activities:
            </p>
            <ul className={`list-unstyled ${styles.ul}`}>
              <li className={styles.list}>
                Violate laws, regulations and/or these Terms
              </li>
              <li className={styles.list}>Infringe any third-party rights</li>
              <li className={styles.list}>
                Considerably impair the Ownerâ€™s legitimate interests
              </li>
              <li className={styles.list}>
                Offend the Owner or any third party.
              </li>
            </ul>
            <h2 className={`py-2 ${styles.subTitle}`}>Software license</h2>
            <p className={styles.content}>
              Any intellectual or industrial property rights, and any other
              exclusive rights on software or technical applications embedded in
              or related to this Application are held by the Owner and/or its
              licensors. Subject to Users compliance with and notwithstanding
              any divergent provision of these Terms, the Owner merely grants
              Users a revocable, non-exclusive, non-sublicensable and
              non-transferable license to use the software and/or any other
              technical means embedded in the Service within the scope and for
              the purposes of this Application and the Service offered. This
              license does not grant Users any rights to access, usage or
              disclosure of the original source code. All techniques,
              algorithms, and procedures contained in the software and any
              documentation thereto related is the Owner&apos; or its licensore
              sole property. All rights and license grants to Users shall
              immediately terminate upon any termination or expiration of the
              Agreement.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>API usage terms</h2>
            <p className={styles.content}>
              Users may access their data relating to this Application via the
              Application Program Interface (API). Any use of the API, including
              use of the API through a third-party product/service that accesses
              this Application, is bound by these Terms and, in addition, by the
              following specific terms:
            </p>
            <ul className={`list-unstyled ${styles.ul}`}>
              <li className={styles.list}>
                The User expressly understands and agrees that the Owner bears
                no responsibility and shall not be held liable for any damages
                or losses resulting from the Userâ€™s use of the API or their
                use of any third-party products/services that access data
                through the API.
              </li>
            </ul>
            <h2 className={`py-2 ${styles.title}`}>
              TERMS AND CONDITIONS OF SALE
            </h2>
            <h2 className={`py-2 ${styles.subTitle}`}>Paid Products</h2>
            <p className={styles.content}>
              Some of the Products provided on this Application, as part of the
              Service, are provided on the basis of payment. The fees, duration
              and conditions applicable to the purchase of such Products are
              described below and in the dedicated sections of this Application.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Product description</h2>
            <p className={styles.content}>
              Prices, descriptions or availability of Products are outlined in
              the respective sections of this Application and are subject to
              change without notice. While Products on this Application are
              presented with the greatest accuracy technically possible,
              representation on this Application through any means (including,
              as the case may be, graphic material, images, colors, sounds) is
              for reference only and implies no warranty as to the
              characteristics of the purchased Product. The characteristics of
              the chosen Product will be outlined during the purchasing process.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Purchasing process</h2>
            <p className={styles.content}>
              Any steps taken from choosing a Product to order submission form
              part of the purchasing process. The purchasing process includes
              these steps:
            </p>
            <p className={styles.content}>
              Users must choose the desired Product and verify their purchase
              selection. After having reviewed the information displayed in the
              purchase selection, Users may place the order by submitting it.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Order submission</h2>
            <p className={styles.content}>
              When the User submits an order, the following applies:
            </p>
            <p className={styles.content}>
              The submission of an order determines contract conclusion and
              therefore creates for the User the obligation to pay the price,
              taxes and possible further fees and expenses, as specified on the
              order page.
            </p>
            <p className={styles.content}>
              In case the purchased Product requires active input from the User,
              such as the provision of personal information or data,
              specifications or special wishes, the order submission creates an
              obligation for the User to cooperate accordingly. Upon submission
              of the order, Users will receive a receipt confirming that the
              order has been received.
            </p>
            <p className={styles.content}>
              All notifications related to the described purchasing process
              shall be sent to the email address provided by the User for such
              purposes.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Prices</h2>
            <p className={styles.content}>
              Users are informed during the purchasing process and before order
              submission, about any fees, taxes and costs (including, if any,
              delivery costs) that they will be charged. Prices on this
              Application are displayed:
            </p>
            <p className={styles.content}>
              either exclusive or inclusive of any applicable fees, taxes and
              costs, depending on the section the User is browsing.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Methods of payment</h2>
            <p className={styles.content}>
              Information related to accepted payment methods are made available
              during the purchasing process.
            </p>
            <p className={styles.content}>
              Some payment methods may only be available subject to additional
              conditions or fees.{" "}
            </p>
            <p className={styles.content}>
              In such cases related information can be found in the dedicated
              section of this Application.
            </p>
            <p className={styles.content}>
              All payments are independently processed through third-party
              services. Therefore, this Application does not collect any payment
              information â€“ such as credit card details â€“ but only receives
              a notification once the payment has been successfully completed.
            </p>
            <p className={styles.content}>
              If payment through the available methods fail or is refused by the
              payment service provider, the Owner shall be under no obligation
              to fulfil the purchase order. Any possible costs or fees resulting
              from the failed or refused payment shall be borne by the User.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Purchase via app store
            </h2>
            <p className={styles.content}>
              This Application or specific Products available for sale on this
              Application must be purchased via a third-party app store. To
              access such purchases, Users must follow the instructions provided
              on the relevant online store (such as Apple App Store or Google
              Play), which may vary depending on the particular device in use.
              Unless otherwise specified, purchases done via third-party online
              stores are also subject to such third-parties terms and
              conditions, which, in case of any inconsistency or conflict, shall
              always prevail upon these Terms. Users purchasing through such
              third-party online stores must therefore read such terms and
              conditions of sale carefully and accept them.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Retention of usage rights
            </h2>
            <p className={styles.content}>
              Users do not acquire any rights to use the purchased Product until
              the total purchase price is received by the Owner.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Delivery</h2>
            <p className={`fw-bold ${styles.content}`}>
              Performance of services
            </p>
            <p className={styles.content}>
              The purchased service shall be performed or made available within
              the timeframe specified on this Application or as communicated
              before the order submission.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Contract duration</h2>
            <p className={`fw-bold ${styles.content}`}>Subscriptions</p>
            <p className={styles.content}>
              Subscriptions allow Users to receive a Product continuously or
              regularly over a determined period of time.
            </p>
            <p className={styles.content}>
              Paid subscriptions begin on the day the payment is received by the
              Owner.
            </p>
            <p className={styles.content}>
              In order to maintain subscriptions, Users must pay the required
              recurring fee in a timely manner. Failure to do so may cause
              service interruptions.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Fixed-term subscriptions
            </p>
            <p className={styles.content}>
              Paid fixed-term subscriptions start on the day the payment is
              received by the Owner and last for the subscription period chosen
              by the User or otherwise specified during the purchasing process.
            </p>
            <p className={styles.content}>
              Once the subscription period expires, the Product shall no longer
              be accessible, unless the User renews the subscription by paying
              the relevant fee.
            </p>
            <p className={styles.content}>
              Fixed-term subscriptions may not be terminated prematurely and
              shall run out upon expiration of the subscription term.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Subscriptions handled via Apple ID / or our website
            </p>
            <p className={styles.content}>
              Users may subscribe to a Product using the Apple ID associated
              with their Apple App Store account by using the relevant process
              on this Application. When doing so, Users acknowledge and accept
              that
            </p>
            <p className={styles.content}>
              any payment due shall be charged to their Apple ID account;
              subscriptions are automatically renewed for the same duration
              unless the User cancels at least 24 hours before the current
              period expires; any and all fees or payments due for renewal will
              be charged within 24-hours before the end of the current period;
              subscriptions can be managed or cancelled in the Users Apple App
              Store account settings or at app.turtlemethod.com/login (if
              subscription is paid via our website and now Apple directly)
            </p>
            <p className={styles.content}>
              The above shall prevail upon any conflicting or diverging
              provision of these Terms.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Automatic renewal Subscriptions are automatically renewed through
              the payment method that the User chose during purchase, unless the
              User cancels the subscription within the deadlines for termination
              specified in the relevant section of these Terms and/or this
              Application. The renewed subscription will last for a period equal
              to the original term. The User shall receive a reminder of the
              upcoming renewal with reasonable advance, outlining the procedure
              to be followed in order to cancel the automatic renewal.
              Termination Recurring subscriptions may be terminated at any time
              by sending a clear and unambiguous termination notice to the Owner
              using the contact details provided in this document, or if
              applicable by using the corresponding controls inside this
              Application. Users can cancel their subsription at any time by
              going to app.turtlemethod.com/login to cancel (if subscription
              isn&apos;t with Apple directly). Termination notice If the notice
              of termination is received by the Owner before the subscription
              renews, the termination shall take effect as soon as the current
              period is completed.
            </p>
            <h2 className={`py-2 ${styles.title}`}>User rights</h2>
            <h2 className={`py-2 ${styles.subTitle}`}>Right of withdrawal</h2>
            <p className={styles.content}>
              Unless exceptions apply, the User may be eligible to withdraw from
              the contract within the period specified below (generally 14
              days), for any reason and without justification. Users can learn
              more about the withdrawal conditions within this section.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Who the right of withdrawal applies to
            </p>
            <p className={styles.content}>
              Unless any applicable exception is mentioned below, Users who are
              European Consumers are granted a statutory cancellation right
              under EU rules, to withdraw from contracts entered into online
              (distance contracts) within the specified period applicable to
              their case, for any reason and without justification. Users that
              do not fit this qualification, cannot benefit from the rights
              described in this section.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Exercising the right of withdrawal
            </p>
            <p className={styles.content}>
              To exercise their right of withdrawal, Users must send to the
              Owner an unequivocal statement of their intention to withdraw from
              the contract. To this end, Users may use the model withdrawal form
              available from within the definition section of this document.
              Users are, however, free to express their intention to withdraw
              from the contract by making an unequivocal statement in any other
              suitable way. In order to meet the deadline within which they can
              exercise such right, Users must send the withdrawal notice before
              the withdrawal period expires. When does the withdrawal period
              expire?
            </p>
            <p className={styles.content}>
              <span className="fw-bold">
                Regarding the purchase of a service,
              </span>{" "}
              the withdrawal period expires 14 days after the day that the
              contract is entered into, unless the User has waived the
              withdrawal right.
            </p>
            <p className={`fw-bold ${styles.content}`}>Effects of withdrawal</p>
            <p className={styles.content}>
              Users who correctly withdraw from a contract will be reimbursed by
              the Owner for all payments made to the Owner, including, if any,
              those covering the costs of delivery. However, any additional
              costs resulting from the choice of a particular delivery method
              other than the least expensive type of standard delivery offered
              by the Owner, will not be reimbursed. Such reimbursement shall be
              made without undue delay and, in any event, no later than 14 days
              from the day on which the Owner is informed of the User&apos;
              decision to withdraw from the contract. Unless otherwise agreed
              with the User, reimbursements will be made using the same means of
              payment as used to process the initial transaction. In any event,
              the User shall not incur any costs or fees as a result of such
              reimbursement.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              App on the purchase of Service
            </p>
            <p className={styles.content}>
              Where a User exercises the right of withdrawal after having
              requested that the service be performed before the withdrawal
              period expires, the User shall pay to the Owner an amount which is
              in proportion to the part of service provided. Such payment shall
              be calculated based on the fee contractually agreed upon, and be
              proportional to the part of service provided until the time the
              User withdraws, compared with the full coverage of the contract.
            </p>
            <h2 className={`py-2 ${styles.title}`}>
              Liability and indemnification
            </h2>
            <h2 className={`py-2 ${styles.subTitle}`}>Australian Users</h2>
            <p className={`fw-bold ${styles.content}`}>
              Limitation of liability
            </p>
            <p className={styles.content}>
              Nothing in these Terms excludes, restricts or modifies any
              guarantee, condition, warranty, right or remedy which the User may
              have under the Competition and Consumer Act 2010 (Cth) or any
              similar State and Territory legislation and which cannot be
              excluded, restricted or modified (non-excludable right). To the
              fullest extent permitted by law, our liability to the User,
              including liability for a breach of a non-excludable right and
              liability which is not otherwise excluded under these Terms of
              Use, is limited, at the Ownerâ€™s sole discretion, to the
              re-performance of the services or the payment of the cost of
              having the services supplied again.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>US Users</h2>
            <p className={`fw-bold ${styles.content}`}>
              Disclaimer of Warranties This Application is provided strictly on
              an â€œas isâ€ and â€œas availableâ€ basis. Use of the Service is
              at Usersâ€™ own risk. To the maximum extent permitted by
              applicable law, the Owner expressly disclaims all conditions,
              representations, and warranties â€” whether express, implied,
              statutory or otherwise, including, but not limited to, any implied
              warranty of merchantability, fitness for a particular purpose, or
              non-infringement of third-party rights. No advice or information,
              whether oral or written, obtained by user from owner or through
              the Service will create any warranty not expressly stated herein.
              Without limiting the foregoing, the Owner, its subsidiaries,
              affiliates, licensors, officers, directors, agents, co-branders,
              partners, suppliers and employees do not warrant that the content
              is accurate, reliable or correct; that the Service will meet
              Usersâ€™ requirements; that the Service will be available at any
              particular time or location, uninterrupted or secure; that any
              defects or errors will be corrected; or that the Service is free
              of viruses or other harmful components. Any content downloaded or
              otherwise obtained through the use of the Service is downloaded at
              users own risk and users shall be solely responsible for any
              damage to Usersâ€™ computer system or mobile device or loss of
              data that results from such download or Usersâ€™ use of the
              Service. The Owner does not warrant, endorse, guarantee, or assume
              responsibility for any product or service advertised or offered by
              a third party through the Service or any hyperlinked website or
              service, and the Owner shall not be a party to or in any way
              monitor any transaction between Users and third-party providers of
              products or services. The Service may become inaccessible or it
              may not function properly with Usersâ€™ web browser, mobile
              device, and/or operating system. The owner cannot be held liable
              for any perceived or actual damages arising from Service content,
              operation, or use of this Service. Federal law, some states, and
              other jurisdictions, do not allow the exclusion and limitations of
              certain implied warranties. The above exclusions may not apply to
              Users. This Agreement gives Users specific legal rights, and Users
              may also have other rights which vary from state to state. The
              disclaimers and exclusions under this agreement shall not apply to
              the extent prohibited by applicable law.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Limitations of liability
            </p>
            <p className={`fw-bold ${styles.content}`}>
              To the maximum extent permitted by applicable law, in no event
              shall the Owner, and its subsidiaries, affiliates, officers,
              directors, agents, co-branders, partners, suppliers and employees
              be liable for any indirect, punitive, incidental, special,
              consequential or exemplary damages, including without limitation
              damages for loss of profits, goodwill, use, data or other
              intangible losses, arising out of or relating to the use of, or
              inability to use, the Service; and any damage, loss or injury
              resulting from hacking, tampering or other unauthorized access or
              use of the Service or User account or the information contained
              therein; any errors, mistakes, or inaccuracies of content;
              personal injury or property damage, of any nature whatsoever,
              resulting from User access to or use of the Service; any
              unauthorized access to or use of the Ownerâ€™s secure servers
              and/or any and all personal information stored therein; any
              interruption or cessation of transmission to or from the Service;
              any bugs, viruses, trojan horses, or the like that may be
              transmitted to or through the Service; any errors or omissions in
              any content or for any loss or damage incurred as a result of the
              use of any content posted, emailed, transmitted, or otherwise made
              available through the Service; and/or the defamatory, offensive,
              or illegal conduct of any User or third party. In no event shall
              the Owner, and its subsidiaries, affiliates, officers, directors,
              agents, co-branders, partners, suppliers and employees be liable
              for any claims, proceedings, liabilities, obligations, damages,
              losses or costs in an amount exceeding the amount paid by User to
              the Owner hereunder in the preceding 12 months, or the period of
              duration of this agreement between the Owner and User, whichever
              is shorter.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              This limitation of liability section shall apply to the fullest
              extent permitted by law in the applicable jurisdiction whether the
              alleged liability is based on contract, tort, negligence, strict
              liability, or any other basis, even if company has been advised of
              the possibility of such damage. Some jurisdictions do not allow
              the exclusion or limitation of incidental or consequential
              damages, therefore the above limitations or exclusions may not
              apply to User. The terms give User specific legal rights, and User
              may also have other rights which vary from jurisdiction to
              jurisdiction. The disclaimers, exclusions, and limitations of
              liability under the terms shall not apply to the extent prohibited
              by applicable law.
            </p>
            <p className={`fw-bold ${styles.content}`}>
              Indemnification The User agrees to defend, indemnify and hold the
              Owner and its subsidiaries, affiliates, officers, directors,
              agents, co-branders, partners, suppliers and employees harmless
              from and against any and all claims or demands, damages,
              obligations, losses, liabilities, costs or debt, and expenses,
              including, but not limited to, legal fees and expenses, arising
              from Users use of and access to the Service, including any data or
              content transmitted or received by User; Users violation of these
              terms, including, but not limited to, Userâ€™s breach of any of
              the representations and warranties set forth in these terms; Users
              violation of any third-party rights, including, but not limited
              to, any right of privacy or intellectual property rights; Users
              violation of any statutory law, rule, or regulation; any content
              that is submitted from Userâ€™s account, including third party
              access with Userâ€™s unique username, password or other security
              measure, if applicable, including, but not limited to, misleading,
              false, or inaccurate information; Users wilful misconduct; or
              statutory provision by User or its affiliates, officers,
              directors, agents, co-branders, partners, suppliers and employees
              to the extent allowed by applicable law.
            </p>
            <h2 className={`py-2 ${styles.title}`}>Common provisions</h2>
            <h2 className={`py-2 ${styles.subTitle}`}>No Waiver</h2>
            <p className={styles.content}>
              The Owners failure to assert any right or provision under these
              Terms shall not constitute a waiver of any such right or
              provision. No waiver shall be considered a further or continuing
              waiver of such term or any other term.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Service interruption</h2>
            <p className={styles.content}>
              To ensure the best possible service level, the Owner reserves the
              right to interrupt the Service for maintenance, system updates or
              any other changes, informing the Users appropriately. Within the
              limits of law, the Owner may also decide to suspend or terminate
              the Service altogether. If the Service is terminated, the Owner
              will cooperate with Users to enable them to withdraw Personal Data
              or information in accordance with applicable law. Additionally,
              the Service might not be available due to reasons outside the
              Ownerâ€™s reasonable control, such as â€œforce majeureâ€ (eg.
              labor actions, infrastructural breakdowns or blackouts etc).
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Service reselling</h2>
            <p className={styles.content}>
              Users may not reproduce, duplicate, copy, sell, resell or exploit
              any portion of this Application and of its Service without the
              Owner&apos; express prior written permission, granted either
              directly or through a legitimate reselling programme.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Privacy policy</h2>
            <p className={styles.content}>
              To learn more about the use of their Personal Data, Users may
              refer to the privacy policy of this Application.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Intellectual property rights
            </h2>
            <p className={styles.content}>
              Without prejudice to any more specific provision of these Terms,
              any intellectual property rights, such as copyrights, trademark
              rights, patent rights and design rights related to this
              Application are the exclusive property of the Owner or its
              licensors and are subject to the protection granted by applicable
              laws or international treaties relating to intellectual property.
              All trademarks â€” nominal or figurative â€” and all other marks,
              trade names, service marks, word marks, illustrations, images, or
              logos appearing in connection with this Application are, and
              remain, the exclusive property of the Owner or its licensors and
              are subject to the protection granted by applicable laws or
              international treaties related to intellectual property.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Changes to these Terms
            </h2>
            <p className={styles.content}>
              The Owner reserves the right to amend or otherwise modify these
              Terms at any time. In such cases, the Owner will appropriately
              inform the User of these changes. Such changes will only affect
              the relationship with the User for the future. The continued use
              of the Service will signify the Userâ€™s acceptance of the revised
              Terms. If Users do not wish to be bound by the changes, they must
              stop using the Service. Failure to accept the revised Terms, may
              entitle either party to terminate the Agreement. The applicable
              previous version will govern the relationship prior to the
              Userâ€™s acceptance. The User can obtain any previous version from
              the Owner. If required by applicable law, the Owner will specify
              the date by which the modified Terms will enter into force.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Assignment of contract
            </h2>
            <p className={styles.content}>
              The Owner reserves the right to transfer, assign, dispose of by
              novation, or subcontract any or all rights or obligations under
              these Terms, taking the Userâ€™s legitimate interests into
              account. Provisions regarding changes of these Terms will apply
              accordingly. Users may not assign or transfer their rights or
              obligations under these Terms in any way, without the written
              permission of the Owner.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Contacts</h2>
            <p className={styles.content}>
              All communications relating to the use of this Application must be
              sent using the contact information stated in this document.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Severability</h2>
            <p className={styles.content}>
              Should any provision of these Terms be deemed or become invalid or
              unenforceable under applicable law, the invalidity or
              unenforceability of such provision shall not affect the validity
              of the remaining provisions, which shall remain in full force and
              effect.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>US Users</h2>
            <p className={styles.content}>
              Any such invalid or unenforceable provision will be interpreted,
              construed and reformed to the extent reasonably required to render
              it valid, enforceable and consistent with its original intent.
              These Terms constitute the entire Agreement between Users and the
              Owner with respect to the subject matter hereof, and supersede all
              other communications, including but not limited to all prior
              agreements, between the parties with respect to such subject
              matter. These Terms will be enforced to the fullest extent
              permitted by law.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>EU Users</h2>
            <p className={styles.content}>
              Should any provision of these Terms be or be deemed void, invalid
              or unenforceable, the parties shall do their best to find, in an
              amicable way, an agreement on valid and enforceable provisions
              thereby substituting the void, invalid or unenforceable parts. In
              case of failure to do so, the void, invalid or unenforceable
              provisions shall be replaced by the applicable statutory
              provisions, if so permitted or stated under the applicable law.
              Without prejudice to the above, the nullity, invalidity or the
              impossibility to enforce a particular provision of these Terms
              shall not nullify the entire Agreement, unless the severed
              provisions are essential to the Agreement, or of such importance
              that the parties would not have entered into the contract if they
              had known that the provision would not be valid, or in cases where
              the remaining provisions would translate into an unacceptable
              hardship on any of the parties.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Governing law</h2>
            <p className={styles.content}>
              These Terms are governed by the law of the place where the Owner
              is based, as disclosed in the relevant section of this document,
              without regard to conflict of laws principles.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Exception for European Consumers
            </h2>
            <p className={styles.content}>
              However, regardless of the above, if the User qualifies as a
              European Consumer and has their habitual residence in a country
              where the law provides for a higher consumer protection standard,
              such higher standards shall prevail.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>Venue of jurisdiction</h2>
            <p className={styles.content}>
              The exclusive competence to decide on any controversy resulting
              from or connected to these Terms lies with the courts of the place
              where the Owner is based, as displayed in the relevant section of
              this document.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Exception for European Consumers
            </h2>
            <p className={styles.content}>
              The above does not apply to any Users that qualify as European
              Consumers, nor to Consumers based in Switzerland, Norway or
              Iceland.
            </p>
            <h2 className={`py-2 ${styles.title}`}>Dispute resolution</h2>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Amicable dispute resolution
            </h2>
            <p className={styles.content}>
              Users may bring any disputes to the Owner who will try to resolve
              them amicably. While User&apos; right to take legal action shall
              always remain unaffected, in the event of any controversy
              regarding the use of this Application or the Service, Users are
              kindly asked to contact the Owner at the contact details provided
              in this document. The User may submit the complaint including a
              brief description and if applicable, the details of the related
              order, purchase, or account, to the Ownerâ€™s email address
              specified in this document. The Owner will process the complaint
              without undue delay and within 21 days of receiving it.
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Online dispute resolution for Consumers
            </h2>
            <p className={styles.content}>
              The European Commission has established an online platform for
              alternative dispute resolutions that facilitates an out-of-court
              method for solving any dispute related to and stemming from online
              sale and service contracts. As a result, any European Consumer can
              use such platform for resolving any dispute stemming from
              contracts which have been entered into online. The platform is
              available at the following link
            </p>
            <h2 className={`py-2 ${styles.subTitle}`}>
              Definitions and legal references
            </h2>
            <p className={`fw-bold ${styles.content}`}>
              This Application (or this Application)
            </p>
            <p className={styles.content}>
              The property that enables the provision of the Service.
            </p>
            <p className={`fw-bold ${styles.content}`}>Agreement</p>
            <p className={styles.content}>
              Any legally binding or contractual relationship between the Owner
              and the User, governed by these Terms.
            </p>
            <p className={`fw-bold ${styles.content}`}>European (or Europe)</p>
            <p className={styles.content}>
              Applies where a User is physically present or has their registered
              offices within the EU, regardless of nationality.
            </p>
            <div className="d-flex justify-content-center">
              <Image
                src="/LandingPageAssets/Images/form.png"
                alt="Tiktok Icon"
                className="rounded"
                width={700}
                height={700}
              />
            </div>
            <p className={`fw-bold ${styles.content}`}>Owner (or We)</p>
            <p className={styles.content}>
              Indicates the natural person(s) or legal entity that provides this
              Application and/or the Service to Users.
            </p>
            <p className={`fw-bold ${styles.content}`}>Product</p>
            <p className={styles.content}>
              A good or service available for purchase through this Application,
              such as e.g. physical goods, digital files, software, booking
              services etc. The sale of Products may be part of the Service.
            </p>
            <p className={`fw-bold ${styles.content}`}>Service</p>
            <p className={styles.content}>
              The service provided by this Application as described in these
              Terms and on this Application.
            </p>
            <p className={`fw-bold ${styles.content}`}>Terms</p>
            <p className={styles.content}>
              All provisions applicable to the use of this Application and/or
              the Service as described in this document, including any other
              related documents or agreements, and as updated from time to time.
            </p>
            <p className={`fw-bold ${styles.content}`}>User (or You)</p>
            <p className={styles.content}>
              Indicates any natural person or legal entity using this
              Application.
            </p>
            <p className={`fw-bold ${styles.content}`}>Consumer</p>
            <p className={styles.content}>
              Any User qualifying as a natural person who accesses goods or
              services for personal use, or more generally, acts for purposes
              outside their trade, business, craft or profession.
            </p>
            <p className={styles.content}>Latest update: June 09, 2021</p>
            <h2 className={`py-2 ${styles.title}`}>Disclaimer</h2>
            <p className={styles.content}>
              Turtle Method: Nutrition & Mindset Coach is providing this app and
              its contents on an â€œas isâ€ basis and makes no representations
              or warranties of any kind with respect to this app or its
              contents. The User understands that Turtle Method: Nutrition &
              Mindset Coach is providing information and recommendations. The
              User understands that these recommendations are provided without a
              health examination and without prior discussion of health
              conditions. The User understands that in no way will Turtle
              Method: Nutrition & Mindset Coach provide medical advice, and that
              no medical advice is contained within this app or the
              recommendations provided.
            </p>
            <p className={`pb-5 ${styles.content}`}>
              The information on this app is not intended as medical advice or
              medical nutrition therapy. This app does not claim to cure,
              prevent, diagnose, or treat any disease or health condition.
              Always consult a qualified healthcare professional before changing
              diet, medications, or beginning any exercise program. Use of this
              app implies User acceptance of the terms described herein. The
              nutrition recommendations and information provided on this app are
              provided for personal and informational purposes only. The
              recommendations and nutrition information contained in the app are
              not to be construed as any attempt to either prescribe or practice
              medicine. The recommendations and nutrition information provided
              are not intended to cure or treat any type of acute or chronic
              health problem. The User should always consult with a competent,
              fully licensed medical professional when making any decisions
              regarding health. The owners of this app (ParrotPal / Scott Flear)
              shall not be liable for any damages or injury resulting from
              access to, or inability to access, this app or from User reliance
              upon any information provided in this app. The User understands
              that this app is not intended as a substitute for consultation
              with a licensed healthcare practitioner or physician. Before the
              User begins any weight loss or fitness program, or change in
              nutritional regimen, the User should consult with their physician
              or other licensed healthcare practitioner to ensure that they are
              in good health and that these recommendations will not harm them.
              The User understands that the information and recommendation of
              these services should not be used to diagnose a health problem or
              disease, or to determine any health-related treatment program,
              including weight loss, diet, or exercise. The User understands
              that there are risks associated with the use of this app. Use of
              these services implies that the User assumes all risks, known and
              unknown, inherent to nutrition programs, and physical changes
              and/or injuries which may result from the use of this app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppTerms;
