import React, { useState } from "react";
import "./ServicePolicy.css";

const ServicePolicy = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const toggleTerms = () => {
    setShowTerms((prev) => !prev);
    if (showRefund) setShowRefund(false); // Hide Refund when Terms is shown
    if (showPrivacy) setShowPrivacy(false); // Hide Privacy when Terms is shown
  };

  const toggleRefund = () => {
    setShowRefund((prev) => !prev);
    if (showTerms) setShowTerms(false); // Hide Terms when Refund is shown
    if (showPrivacy) setShowPrivacy(false); // Hide Privacy when Refund is shown
  };

  const togglePrivacy = () => {
    setShowPrivacy((prev) => !prev);
    if (showTerms) setShowTerms(false); // Hide Terms when Privacy is shown
    if (showRefund) setShowRefund(false); // Hide Refund when Privacy is shown
  };

  return (
    <div className="service-policy-container">
      <button className="toggle-button" onClick={toggleTerms}>
        {showTerms ? "Hide Terms of Service" : "Show Terms of Service"}
      </button>
      <button className="toggle-button" onClick={toggleRefund}>
        {showRefund ? "Hide Refund Policy" : "Show Refund Policy"}
      </button>
      <button className="toggle-button" onClick={togglePrivacy}>
        {showPrivacy ? "Hide Privacy Policy" : "Show Privacy Policy"}
      </button>

      {showTerms && (
        <div className="service-policy">
          
                  <section className="privacy-policy-section">
           <h2 className="privacy-policy-title">TERMS OF SERVICE</h2>
          <p className="last-updated">Last Updated: 9th May, 2025</p>

         <div className="privacy-policy-content">
    
            </div>
           </section>
           <section>
            <p>
              Welcome to Click72. These Terms of
              Service  govern your access to and use of our website,
              services, and products 
              By using or accessing our Services, you agree to be bound by these
              Terms. If you do not agree with any part of these Terms, you must
              refrain from using our Services.
            </p>
          </section>

          <section>
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using our Services, you agree to comply with and be
              bound by these Terms, as well as our Privacy Policy. If you are
              using the Services on behalf of a company or organization, you
              represent and warrant that you have the authority to bind that
              entity to these Terms.
            </p>
          </section>

          <section>
            <h3>2. Modifications to Terms</h3>
            <p>
              We may update or modify these Terms at any time without prior
              notice. When we make changes, we will update the "Last Updated"
              date at the top of these Terms. Your continued use of the Services
              after any changes constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h3>3. Account Registration</h3>
            <p>
              To access certain features of our Services, you may need to create
              an account. You agree to provide accurate, current, and complete
              information during the registration process and to update your
              information as necessary. You are responsible for maintaining the
              confidentiality of your account and password and for all activities
              that occur under your account.
            </p>
          </section>

          <section>
            <h3>4. Use of Services</h3>
            <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You will not:</p>
            <ul>
              <li>Violate any applicable local, state, national, or international law or regulation.</li>
              <li>Attempt to gain unauthorized access to any part of the Services or systems or networks connected to the Services.</li>
              <li>Use the Services for any harmful, fraudulent, or malicious activity.</li>
              <li>Interfere with the proper functioning of the Services or servers.</li>
            </ul>
          </section>

          <section>
            <h3>5. Intellectual Property</h3>
            <p>
              All content, trademarks, logos, graphics, and software on the Services
              are the property of <h1>Click72 </h1>or its licensors. You are granted
              a limited, non-exclusive, non-transferable license to access and use
              the Services for personal or commercial purposes, subject to these
              Terms. You may not reproduce, distribute, or create derivative works of
              any content from the Services without prior written consent.
            </p>
          </section>

          <section>
            <h3>6. Privacy</h3>
            <p>
              We take your privacy seriously. Please refer to our Privacy Policy for
              details on how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h3>7. User-Generated Content</h3>
            <p>
              If you submit or post any content to our Services, including but not
              limited to comments, reviews, or feedback , you grant
              Click72 a worldwide, royalty-free, sublicensable, and
              transferable license to use, copy, modify, distribute, and display the
              User Content in connection with the Services. You are responsible for
              the content you submit, and you represent and warrant that you have all
              necessary rights to grant the above license.
            </p>
          </section>

          <section>
            <h3>8. Third-Party Links</h3>
            <p>
              Our Services may contain links to third-party websites or services that
              are not owned or controlled by  Click72. We are not
              responsible for the content or practices of these third-party sites, and
              we encourage you to review their respective privacy policies and terms.
            </p>
          </section>

          <section>
            <h3>9. Disclaimer of Warranties</h3>
            <p>
              The Services are provided "as is" and "as available" without any
              warranties of any kind, express or implied, including but not limited to
              the implied warranties of merchantability, fitness for a particular
              purpose, or non-infringement. We do not guarantee that the Services will
              be error-free, secure, or uninterrupted.
            </p>
          </section>

          <section>
            <h3>10. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law,  Click72 shall not be
              liable for any indirect, incidental, special, consequential, or punitive
              damages arising out of or in connection with your use of the Services,
              even if we have been advised of the possibility of such damages. Our
              total liability to you for any claim arising out of these Terms shall
              not exceed the amount you have paid for the Services during the 12 months
              preceding the event giving rise to the claim.
            </p>
          </section>

          <section>
            <h3>11. Indemnification</h3>
            <p>
              You agree to indentify, defend, and hold harmless  Click72 and
              its affiliates, and their respective officers, directors, employees, and
              agents from any and all claims, liabilities, damages, losses, and
              expenses (including legal fees) arising out of or in connection with your
              use of the Services, your violation of these Terms, or your infringement
              of any third-party rights.
            </p>
          </section>

          <section>
            <h3>12. Termination</h3>
            <p>
              We reserve the right to suspend or terminate your access to the Services
              at any time, without notice, for any reason, including but not limited to
              violations of these Terms. Upon termination, all provisions of these
              Terms that by their nature should survive termination will remain in
              effect.
            </p>
          </section>

          <section>
            <h3>13. Governing Law</h3>
            <p>
              These Terms will be governed by and construed in accordance with the laws
              of India/West Bengal, without regard to its conflict of law
              principles. Any disputes arising from or in connection with these Terms
              will be resolved exclusively in the courts located in [Kolkata/West Bengal],
              and you consent to the jurisdiction of such courts.
            </p>
          </section>

          <section>
            <h3>14. Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable,
              the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h3>15. Entire Agreement</h3>
            <p>
              These Terms, along with our Privacy Policy and any other legal notices
              published on our Services, constitute the entire agreement between you
              and  Click72 regarding your use of the Services.
            </p>
          </section>

          <section>
            <h3>16. Contact Information</h3>
            <p>
              If you have any questions or concerns about these Terms, please contact us at:<br />
               Click72 <br />
              [Your Contact Information]<br />
              {process.env.REACT_APP_EMAIL} <br />
           
            </p>
          </section>
          
        

           
          {/* Add other sections similarly */}
        </div>
      )}

      {showRefund && (
        <div className="refund-policy">
          
                   <section className="privacy-policy-section">
  <h2 className="privacy-policy-title">Refund Policy</h2>
  <p className="last-updated">Last Updated: 9th May, 2025</p>

  <div className="privacy-policy-content">
    
  </div>
</section>

          <section>
            <h2>1. Refund Eligibility</h2>
            <p>Refunds are eligible only under the following conditions:</p>
            <ul>
              <li>
                <strong>Service-related issues:</strong> If the makeup service is deemed unsatisfactory, please inform us within 24 hours of the appointment.
              </li>
              <li>
                <strong>Product-related issues:</strong> If you experience any issues with products used during your makeup session (e.g., allergic reactions or irritation), please reach out to us within 24 hours for evaluation.
              </li>
            </ul>
            <p>We require photographic evidence or a description of the issue, where applicable.</p>
          </section>

          <section>
            <h2>2. Non-Refundable Services</h2>
            <ul>
              <li><strong>Late Cancellations or No-Shows:</strong> Refunds will not be provided for missed appointments or cancellations made less than 24 hours prior to the scheduled time.</li>
              <li><strong>Promotional or Discounted Services:</strong> Refunds for services purchased with promotions or discounts are subject to the terms of the specific promotion or discount.</li>
            </ul>
          </section>

          <section>
            <h2>3. Refund Process</h2>
            <p>To request a refund, please contact us at  {process.env.REACT_APP_EMAIL} <br />
           <a>{process.env.REACT_APP_CONTACT}</a> within 24 hours of your appointment.</p>
            <p>Upon reviewing your request, we may require additional information such as photos or descriptions of the issue.</p>
            <p>If your refund request is approved, we will process the refund to your original payment method.</p>
          </section>

          <section>
            <h2>4. Refund Timeline</h2>
            <p>Once your refund request is approved, the refund will be processed and credited back to the original payment method within 5-7 business days.</p>
            <p>Please note that depending on your bank or payment provider, the refund may take additional time to reflect in your account.</p>
          </section>

          <section>
            <h2>5. Exceptions</h2>
            <ul>
              <li>Refunds will not be provided for dissatisfaction arising from personal preference or changes in the client's mind regarding the service after the service has been performed.</li>
              <li>Refunds will not be provided for services performed outside of normal working hours unless otherwise agreed upon.</li>
            </ul>
          </section>

          <section>
            <h2>6. Contact Information</h2>
            <p>If you have any questions or concerns about this Refund Policy or wish to request a refund, please contact us at:</p>
            <p>
               Click72 <br />
              [Your Contact Information] <br />
            {process.env.REACT_APP_EMAIL} <br />
           {process.env.REACT_APP_CONTACT} 
            </p>
          </section>
        </div>
      )}

      {showPrivacy && (
        <div className="privacy-policy">
   
                   <section className="privacy-policy-section">
  <h2 className="privacy-policy-title">Privacy Policy</h2>
  <p className="last-updated">Last Updated: 9th May, 2025</p>

  <div className="privacy-policy-content">
    
  </div>
</section>

          <section>
      <h3>1. Information We Collect</h3>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li><strong>Personal Identification Information:</strong> Name, email address, phone number, payment information, and other contact details when you register, subscribe, or interact with us.</li>
        <li><strong>Usage Data:</strong> Information about how you access and use our services, including IP addresses, browser types, pages visited, and other diagnostic data.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to collect data about your browsing activity and preferences.</li>
      </ul>
    </section>

    <section>
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To communicate with you regarding your inquiries, service requests, or feedback.</li>
        <li>To process payments and manage transactions.</li>
        <li>To personalize your experience on our website.</li>
        <li>To send promotional offers or updates (if you have opted in to receive such communications).</li>
        <li>To comply with legal obligations and resolve any disputes.</li>
      </ul>
    </section>

    <section>
      <h3>3. How We Protect Your Information</h3>
      <p>We use appropriate technical, administrative, and physical measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.</p>
    </section>

    <section>
      <h3>4. Sharing Your Information</h3>
      <p>We may share your personal information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Third-party companies who assist us in providing services (e.g., payment processors, email providers) and are bound by confidentiality obligations.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business assets, your information may be transferred.</li>
        <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to valid legal requests, such as a court order or government investigation.</li>
        <li><strong>Consent:</strong> We may share your information with your consent or as you direct.</li>
      </ul>
    </section>

    <section>
      <h3>5. Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. You can choose to disable cookies in your browser settings, but this may affect the functionality of certain parts of our website.</p>
    </section>

    <section>
      <h3>6. Your Rights and Choices</h3>
      <p>Depending on your location and applicable laws, you may have certain rights regarding your personal data, including:</p>
      <ul>
        <li><strong>Access:</strong> You may request access to the personal information we hold about you.</li>
        <li><strong>Correction:</strong> You may update or correct inaccurate information.</li>
        <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
        <li><strong>Opt-Out of Marketing Communications:</strong> You may opt-out of receiving promotional emails by following the unsubscribe link provided in the email or contacting us directly.</li>
      </ul>
    </section>

    <section>
      <h3>7. Third-Party Links</h3>
      <p>Our website or services may contain links to third-party websites that are not operated by us. We are not responsible for the content or privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
    </section>

    <section>
      <h3>8. Children’s Privacy</h3>
      <p>Our services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. If we learn that we have inadvertently collected information from a child under 13, we will take steps to delete that information.</p>
    </section>

    <section>
      <h3>9. International Transfers</h3>
      <p>If you are accessing our website or services from outside of India, please be aware that your information may be transferred to and processed in a country that may have different data protection laws. By using our services, you consent to the transfer of your personal information to countries outside of your own.</p>
    </section>

    <section>
      <h3>10. Changes to This Privacy Policy</h3>
      <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
    </section>

    <section>
      <h3>11. Contact Us</h3>
      <p>If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your privacy rights, please contact us at:</p>
      <p>Click72<br />[Your Contact Address]<br /> {process.env.REACT_APP_EMAIL} <br />
           {process.env.REACT_APP_CONTACT}</p>
    </section>
        </div>
      )}
    </div>
  );
};

export default ServicePolicy;
