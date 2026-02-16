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

           <body style="margin:0;padding:0;background:#ffffff;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,Arial,sans-serif;line-height:1.6;">
  <div style="max-width:900px;margin:0 auto;padding:28px 18px 60px;">
    <div style="border:1px solid #e5e7eb;border-radius:14px;padding:22px 18px;">
      <h1 style="margin:0 0 6px 0;font-size:28px;line-height:1.2;letter-spacing:-0.02em;">Terms &amp; Conditions</h1>
      <p style="margin:0;color:#6b7280;font-size:14px;">
        <strong>Effective Date:</strong> January 1, 2024
      </p>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:18px 0;" />

      <p style="margin:0 0 14px 0;">
        Welcome to <strong>Visuals By Heritage</strong> (“Photographer,” “we,” “our,” or “us”). These Terms &amp; Conditions (“Terms”) govern all photography services, bookings, website use, and related interactions with our business. By booking a session, accessing our website, or purchasing services, you agree to these Terms.
      </p>

      <!-- Section 1 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">1. Services &amp; Artistic Style</h2>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">1.1 Photography Services</h3>
      <p style="margin:0 0 10px 0;">
        Visuals By Heritage provides professional photography services as described on our website, booking platform, or written communication.
      </p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">1.2 Artistic Discretion</h3>
      <p style="margin:0 0 10px 0;">
        Client acknowledges that photography is a creative service. The Photographer retains full artistic control over:
      </p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Posing guidance</li>
        <li style="margin:4px 0;">Editing style</li>
        <li style="margin:4px 0;">Image selection</li>
        <li style="margin:4px 0;">Composition and lighting</li>
      </ul>
      <p style="margin:0 0 10px 0;">
        Final delivered images will reflect the Photographer’s professional style and portfolio. Dissatisfaction based solely on artistic preference is not grounds for refunds.
      </p>

      <!-- Section 2 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">2. Eligibility</h2>
      <p style="margin:0 0 10px 0;">
        Clients must be at least 18 years old or have legal guardian consent to book services.
      </p>

      <!-- Section 3 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">3. Booking &amp; Payments</h2>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">3.1 Booking Confirmation</h3>
      <p style="margin:0 0 10px 0;">
        A session is not confirmed until the required deposit is received.
      </p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">3.2 Payment Structure</h3>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">50% non-refundable deposit due at booking</li>
        <li style="margin:4px 0;">Remaining balance due before final image delivery</li>
      </ul>
      <p style="margin:0 0 10px 0;">Payments accepted via:</p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Website payment portal</li>
        <li style="margin:4px 0;">Zelle</li>
        <li style="margin:4px 0;">CashApp</li>
        <li style="margin:4px 0;">Apple Pay (by agreement)</li>
      </ul>
      <p style="margin:0 0 10px 0;">Checks are not accepted.</p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">3.3 Late Arrival</h3>
      <p style="margin:0 0 10px 0;">
        Clients arriving more than 15 minutes late will incur a $20 surcharge. Session times will not be extended to compensate for lateness.
      </p>

      <!-- Section 4 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">4. Cancellation &amp; Rescheduling</h2>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">4.1 Client Cancellation</h3>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">72+ hours notice → deposit may be credited toward future session or partial refund.</li>
        <li style="margin:4px 0;">Less than 72 hours → deposit forfeited.</li>
        <li style="margin:4px 0;">Less than 24 hours → no refund; one free reschedule allowed within 3 months based on Photographer availability.</li>
      </ul>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">4.2 Photographer Cancellation</h3>
      <p style="margin:0 0 10px 0;">
        If Photographer cannot perform due to illness, emergency, act of God, equipment failure, or circumstances beyond control, all monies paid will be refunded. Liability is limited to amounts paid.
      </p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">4.3 Repeated Cancellations</h3>
      <p style="margin:0 0 10px 0;">
        Photographer reserves the right to refuse future service to clients with repeated cancellations.
      </p>

      <!-- Section 5 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">5. Client Responsibilities</h2>
      <p style="margin:0 0 10px 0;">Client agrees to:</p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Arrive on time</li>
        <li style="margin:4px 0;">Communicate requested shots in advance</li>
        <li style="margin:4px 0;">Ensure safe and legal shooting locations</li>
        <li style="margin:4px 0;">Follow Photographer’s posing and safety guidance</li>
      </ul>
      <p style="margin:0 0 10px 0;">
        Photographer is not responsible for missed images due to lack of cooperation, late arrival, or client preparation.
      </p>

      <!-- Section 6 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">6. Image Delivery</h2>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">6.1 Delivery Timeline</h3>
      <p style="margin:0 0 10px 0;">
        Estimated delivery timelines will be communicated at booking. Delays may occur during peak seasons.
      </p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">6.2 Delivery Method</h3>
      <p style="margin:0 0 10px 0;">
        Final images will be delivered via online gallery or digital download.
      </p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">6.3 File Storage</h3>
      <p style="margin:0 0 10px 0;">
        Final galleries are archived for up to <strong>30 days</strong> after delivery. Long-term storage is not guaranteed.
      </p>

      <!-- Section 7 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">7. Copyright &amp; Usage Rights</h2>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">7.1 Ownership</h3>
      <p style="margin:0 0 10px 0;">
        All photographs remain the sole copyright property of Visuals By Heritage.
      </p>

      <h3 style="margin:12px 0 6px 0;font-size:15px;">7.2 Client License</h3>
      <p style="margin:0 0 10px 0;">Clients receive a personal-use license allowing:</p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Personal sharing</li>
        <li style="margin:4px 0;">Printing for personal use</li>
        <li style="margin:4px 0;">Social media posting</li>
      </ul>
      <p style="margin:0 0 10px 0;">
        Commercial use, resale, editing, or redistribution is prohibited without written permission.
      </p>

      <!-- Section 8 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">8. Model Release &amp; Marketing Usage</h2>
      <p style="margin:0 0 10px 0;">
        Client grants Visuals By Heritage unrestricted permission to use images for:
      </p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Portfolio display</li>
        <li style="margin:4px 0;">Website</li>
        <li style="margin:4px 0;">Social media</li>
        <li style="margin:4px 0;">Advertising &amp; marketing campaigns</li>
        <li style="margin:4px 0;">Printed or digital promotional materials</li>
      </ul>
      <p style="margin:0 0 10px 0;">
        No compensation or additional approval is required for such use.
      </p>

      <!-- Section 9 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">9. Collaborations</h2>
      <p style="margin:0 0 10px 0;">
        For unpaid collaborations or creative shoots, Visuals By Heritage retains full ownership and unrestricted usage rights to all images.
      </p>

      <!-- Section 10 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">10. Safety &amp; Conduct</h2>
      <p style="margin:0 0 10px 0;">
        Photographer reserves the right to immediately terminate a session without refund if:
      </p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Unsafe conditions exist</li>
        <li style="margin:4px 0;">Illegal activity occurs</li>
        <li style="margin:4px 0;">Harassment or inappropriate behavior happens</li>
        <li style="margin:4px 0;">Environment risks photographer equipment or personal safety</li>
      </ul>

      <!-- Section 11 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">11. Satisfaction Guarantee (Graduation Sessions)</h2>
      <p style="margin:0 0 10px 0;">
        Visuals By Heritage aims to deliver exceptional results consistent with our artistic style.
      </p>
      <p style="margin:0 0 10px 0;">
        If the Client does not love at least five (5) final edited images, we offer one (1) complimentary reshoot under the following conditions:
      </p>
      <ol style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:6px 0;">Guarantee applies only to final edited images.</li>
        <li style="margin:6px 0;">Client must notify Photographer within 72 hours of gallery delivery.</li>
        <li style="margin:6px 0;">One (1) reshoot maximum; no refunds.</li>
        <li style="margin:6px 0;">Reshoot must occur within 90 days based on availability.</li>
        <li style="margin:6px 0;">Reshoot matches original package scope.</li>
        <li style="margin:6px 0;">Creative style remains at Photographer’s discretion.</li>
        <li style="margin:6px 0;">Guarantee is void if images have been downloaded, posted, or used prior to request.</li>
      </ol>
      <p style="margin:0 0 10px 0;">
        Eligibility is determined by Visuals By Heritage in good faith.
      </p>

      <!-- Section 12 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">12. Limitation of Liability</h2>
      <p style="margin:0 0 10px 0;">
        To the maximum extent permitted by law:
      </p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Photographer is not liable for indirect, incidental, or consequential damages.</li>
        <li style="margin:4px 0;">Liability is limited to total amounts paid by client.</li>
        <li style="margin:4px 0;">Photographer is not responsible for events outside control including weather, location restrictions, or equipment failure.</li>
      </ul>

      <!-- Section 13 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">13. Indemnification</h2>
      <p style="margin:0 0 10px 0;">
        Client agrees to indemnify and hold harmless Visuals By Heritage from any claims, damages, or liabilities arising from participation in photography services.
      </p>

      <!-- Section 14 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">14. Website Use</h2>
      <p style="margin:0 0 10px 0;">Users may not:</p>
      <ul style="margin:0 0 10px 18px;padding:0;">
        <li style="margin:4px 0;">Copy or redistribute website content</li>
        <li style="margin:4px 0;">Attempt unauthorized access</li>
        <li style="margin:4px 0;">Violate intellectual property rights</li>
      </ul>

      <!-- Section 15 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">15. Governing Law</h2>
      <p style="margin:0 0 10px 0;">
        These Terms are governed by the laws of the State of Maryland, USA.
      </p>

      <!-- Section 16 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">16. Changes to Terms</h2>
      <p style="margin:0 0 10px 0;">
        We reserve the right to update these Terms at any time. Continued use of services constitutes acceptance of revisions.
      </p>

      <!-- Section 17 -->
      <h2 style="margin:22px 0 8px 0;font-size:18px;line-height:1.3;">17. Contact Information</h2>
      <p style="margin:0;">
        <strong>Visuals By Heritage</strong><br />
        Phone: <a href="tel:14439292178" style="color:#111827;text-decoration:underline;">443-929-2178</a>
      </p>

      <div style="margin-top:18px;padding:12px 12px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">
        <p style="margin:0;font-size:13px;color:#6b7280;">
          Tip: You can paste this entire HTML into a “Custom HTML” block on most website builders. If your builder strips the <code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;">&lt;html&gt;</code> and <code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;">&lt;head&gt;</code> tags, paste only the content inside the <code style="font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;">&lt;body&gt;</code>.
        </p>
      </div>
    </div>
  </div>
</body>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Terms;
