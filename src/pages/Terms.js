import "./terms.css"
import { motion } from "framer-motion";

import React, { useContext } from "react";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Terms = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="pt-8 pb-14 lg:pt-0  z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">Terms & Conditions</h1>

            <div className="mb-12">
              <p>
                <strong>Effective Date: 1st January 2024</strong>
              </p>
              <p>
                Welcome to Visuals By Heritage (“we,” “our,” “us,” or “Visuals
                By Heritage”). These Terms and Conditions (“Terms”) govern your
                use of our website, our services, and any transactions or
                interactions with our business. By accessing or using our
                website, engaging our services, or entering into any
                transactions/bookings with us, you agree to be bound by these
                Terms. If you do not agree with these Terms, please do not use
                our website, services, or engage in any transactions/bookings
                with us.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                1. Use of the Website and Services
              </h2>
              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                1.1 Eligibility:
              </h3>
              <p>
                You must be at least 18 years old to use our website and
                services. By using our website or engaging our services, you
                represent and warrant that you meet this age requirement.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                1.2 License to Use:
              </h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and
                revocable license to access and use our website for personal,
                non-commercial purposes.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                1.3 Prohibited Activities:
              </h3>
              <p>
                You agree not to:
                <ul>
                  <li>Violate any applicable laws or regulations.</li>
                  <li>
                    Infringe upon or violate our intellectual property rights or
                    the intellectual property rights of others.
                  </li>
                  <li>
                    Engage in any activity that could harm or disrupt our
                    website, services, or business operations.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of our
                    website, services, or business operations.
                  </li>
                </ul>
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                2. Intellectual Property
              </h2>
              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                2.1 Ownership:
              </h3>
              <p>
                All content on our website, including text, graphics, logos,
                images, and software, as well as any photographs and materials
                produced through our services, is the property of Visuals By
                Heritage and is protected by copyright, trademark, and other
                intellectual property laws.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                2.2 Limited License:
              </h3>
              <p>
                You may view, download, and print content from our website for
                your personal, non-commercial use only. Any other use, including
                reproduction, distribution, or modification of the content, is
                prohibited without our prior written consent.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                2.3 Rights to Photographs:
              </h3>
              <p>
                All photographs taken by Visuals By Heritage are our sole
                property. By engaging our services, you grant us the right to
                use, reproduce, modify, distribute, and publicly display these
                images in any form, for any purpose, and in any medium, whether
                now known or hereafter developed, including but not limited to
                advertising, marketing, portfolio display, and social media. You
                acknowledge that you do not have any rights to these images, and
                we are under no obligation to provide you with any credit or
                compensation for their use.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                3. Services and Products
              </h2>
              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                3.1 Photography Services:
              </h3>
              <p>
                We offer professional photography services as described on our
                website and in our service agreements. The terms of each service
                will be outlined in the service description on the website .
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                3.2 Digital Products:
              </h3>
              <p>
                Digital images or other products purchased from our website or
                through our services are for personal use only and may not be
                resold or used for commercial purposes without our prior written
                consent.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                4. Booking and Payment
              </h2>
              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                4.1 Booking:
              </h3>
              <p>
                To book our services, you must complete the booking process on
                our website or through direct communication with us, providing
                accurate and complete information.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                4.2 Payment:
              </h3>
              <p>
                Payment for services or products must be made in two
                installments: a 50% deposit at the time of booking and the
                remaining 50% before the final images are delivered. Payments
                can be made through the payment portal on our website. Alternatively,
                Zelle, CashApp, or Apple Pay can be used upon mutual agreement.
                Checks are not accepted. Payment of the deposit signifies
                agreement to all Visuals by Heritge policies. An additional $20
                surcharge will be added for all sessions where the client is
                more than 15 minutes late.{" "}
                <strong>
                  {" "}
                  Session end times will not be extended to accommodate client
                  lateness{" "}
                </strong>
                . For collaborations or creative endeavors with no monetary
                gain, Visuals by Heritage retains all rights to the photos taken
                and may use them however and whenever desired.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                4.3 Rescheduling & cancellations:
              </h3>
              <p>
                If you are unable to make your photo session all deposits will
                act as a cancellation fee. 72 hours of advance notice of
                cancellation is required in order to credit the deposit towards
                a future session or a half refund. If not notified within 24
                hours of the session the half deposit rule is cleared and there
                will be no refund BUT the client can reschedule for FREE on a
                day that fits the photographers schedule within 3 months. The
                photographer reserves the right to deny service to any client(s)
                who repeatedly have a history of cancellations. If Visuals by
                Heritage cannot perform this contract due to fire or other
                casualty, strike, act of God, or other cause beyond the control
                of the parties, or due to illness or emergency, then the
                Videographer/Photographer shall return the retainer fee to the
                client, but shall have no further liability with respect to the
                contract. This shall also apply in the event that photographic
                materials are damaged in processing, lost through camera or
                other media malfunction, lost in mail or otherwise lost or
                damaged without fault on the part of the Photographer. In the
                event Visuals by Heritage fails for any other reason, Visuals by
                Heritage shall not be liable for any amount in excess of all
                monies paid.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                5. Late Payment Charges
              </h2>
              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                5.1 Late Payment:
              </h3>
              <p>
                If the remaining 50% of the payment is not received before the
                final images are delivered, a late payment charge of $50 will be
                applied. The final images will not be delivered until full
                payment, including any late fees, is received, and if full
                payment is not received after 10 days of the invoice being sent
                your pictures could be permanently deleted.
              </p>


              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                6. Limitation of Liability
              </h2>
              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                6.1 Disclaimer:
              </h3>
              <p>
                Our website, services, and products are provided “as is” and “as
                available” without any warranties, express or implied. We do not
                guarantee that our website or services will be error-free,
                secure, or uninterrupted.
              </p>

              <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                6.2 Limitation:
              </h3>
              <p>
                To the maximum extent permitted by law, we shall not be liable
                for any indirect, incidental, special, or consequential damages
                arising out of or in connection with your use of our website,
                services, or products.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                7. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Visuals By
                Heritage, its officers, directors, employees, and agents from
                and against any claims, liabilities, damages, losses, or
                expenses arising out of or in any way connected with your use of
                our website, services, or products, your breach of these Terms,
                or your violation of any law or the rights of a third party.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                8. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Maryland, United States, without regard to its
                conflict of laws principles.
              </p>

              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                9. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Any
                changes will be effective immediately upon posting on our
                website. Your continued use of our website, services, or
                engagement in transactions with us after any changes constitutes
                your acceptance of the new Terms.
              </p>
              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                10. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about these Terms, please
                contact us at: Visuals By Heritage <strong>4439292178</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Terms;
