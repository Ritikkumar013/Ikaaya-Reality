import React from "react";

const termsofservice = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh]"   style={{ backgroundImage: "url('/gallery.png')" }}>
        <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-serif uppercase">
            Terms of Service
          </h1>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-white text-sm py-14 md:text-base">
        <div className="max-w-screen-xl mx-auto">
        <h1 className='mb-3 text-4xl font-serif'>Terms of Service</h1>
          <p className="mb-8">
            Welcome to <b>Experts Help</b> (referred to as “we,” “us,” or
            “our”). By using our website and services, you agree to these Terms
            and Conditions. If you do not agree to any part of these terms,
            please refrain from using our services.
          </p>
          <h3 className="text-xl mb-3">1. Account Registration</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              To access our services, you may need to create an account. By
              registering, you agree to provide accurate, complete information
              and maintain the security of your login credentials. You are
              responsible for all activity under your account.
            </li>
          </ul>
          <h3 className="text-xl mb-3">2. User Conduct</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              You agree to use our services in compliance with all applicable
              laws and these terms. You will not misuse our platform, engage in
              unlawful activity, or disrupt the services provided to other
              users.
            </li>
          </ul>
          <h3 className="text-xl mb-3">3. Intellectual Property</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              All content on our platform, including text, graphics, logos, and
              software, is the property of <b>Experts Help</b> and is protected
              by copyright and trademark laws. You may not use, reproduce, or
              distribute any content without our express permission.
            </li>
          </ul>
          <h3 className="text-xl mb-3">4. Privacy Policy</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              Your use of our services is also governed by our Privacy Policy.
              By using our platform, you acknowledge that you have read and
              understood our privacy practices.
            </li>
          </ul>
          <h3 className="text-xl mb-3">5. Payment and Services</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              Our platform offers services starting at £1. By using our paid
              services, you agree to the pricing and payment terms outlined
              during the purchase process. We may use third-party payment
              processors, and you agree to their terms and conditions as well.
            </li>
          </ul>
          <h3 className="text-xl mb-3">6. Limitation of Liability</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              We provide our services “as is” and make no guarantees regarding
              the outcomes of your troubleshooting sessions. <b>Experts Help</b>{" "}
              is not liable for any indirect, incidental, or consequential
              damages arising from your use of the platform.
            </li>
          </ul>
          <h3 className="text-xl mb-3">7. User Content</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              You are solely responsible for the content you share or upload
              through our services. You must ensure that your content complies
              with our content guidelines and does not infringe on any
              third-party rights.
            </li>
          </ul>
          <h3 className="text-xl mb-3">8. Termination of Services</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              We reserve the right to suspend or terminate your account if you
              violate these terms or engage in activities that disrupt our
              services.
            </li>
          </ul>
          <h3 className="text-xl mb-3">9. Governing Law</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the United States, with specific
              compliance to regulations such as GDPR (for European users) and
              CCPA (for Californian users). Any disputes will be resolved in the
              applicable jurisdiction.
            </li>
          </ul>
          <h3 className="text-xl mb-3">10. Amendments</h3>
          <ul className="list-disc ml-4 mb-8">
            <li>
              We reserve the right to modify or update these Terms and
              Conditions at any time. Continued use of our services after such
              modifications will constitute your acceptance of the new terms.
            </li>
          </ul>
          <h3 className="text-xl mb-3">Contact Us</h3>
          <p>
            For any questions or concerns regarding these terms, please reach
            out to us at [support@expertshelp.com].
          </p>
        </div>
      </div>
    </>
  );
};

export default termsofservice;
