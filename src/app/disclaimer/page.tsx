import React from 'react'

const disclaimer = () => {
  return (
    <>
    <div className='w-full h-[55vh] px-5 md:px-14 md:h-[70vh] flex items-center  bg-cover bg-center lg:h-[72vh]'  style={{ backgroundImage: "url('/gallery.png')" }}>
                <div className="container max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-serif uppercase">
                        Disclaimer
                    </h1>
                </div>
            </div>
            {/* Section 2 */}
            <div className='bg-white text-sm py-14 px-5 md:px-14 '>
                <div className='max-w-screen-xl container mx-auto '>
                <h1 className='mb-3 text-4xl font-serif'>Disclaimer</h1>
                    <p className='mb-8'>Thank you for choosing our platform, your go-to solution for technical troubleshooting and expert support. Your privacy is of the utmost importance to us, and we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website and services, in compliance with global regulations such as GDPR and CCPA.</p>
                    <h3 className='text-xl mb-3'>Information We Collect:</h3>
                    <ul className='list-decimal ml-4 mb-8' >
                        <li>Personal Information: When you use our services, we may collect details such as your name, email address, phone number, and device information.</li>
                        <li>Technical Data: We collect technical information related to your device and usage, such as IP address, browser type, and operating system.</li>
                        <li>Usage Data: We gather data on how you interact with our services, including the issues you submit and the support you receive.</li>
                        <li>Location Data: With your consent, we may collect location data to optimize our services.</li>
                    </ul>
                    <h3 className='text-xl mb-3' >How We Use Your Information:</h3>
                    <ul className='list-decimal ml-4 mb-8' >
                        <li>Service Delivery: We use your personal data to provide and improve our services, troubleshoot issues, and offer personalized support.</li>
                        <li>Communication: Your contact information allows us to communicate with you about updates, promotional offers, and important service notifications.</li>
                        <li>Compliance: We comply with legal requirements and may process your data in response to legal obligations or regulatory inquiries.</li>
                    </ul>
                    <h3 className='text-xl mb-3' >Data Sharing and Security:</h3>
                    <ul className='list-decimal ml-4 mb-8' >
                        <li>Third-Party Partners: We may share your information with trusted partners who assist in delivering our services, such as payment processors and hosting providers.</li>
                        <li>Legal Requirements: We may disclose your data if required by law, including to comply with GDPR, CCPA, or other applicable regulations.</li>
                        <li>Data Security: We implement industry-standard measures to protect your personal information, but no method of data transmission is entirely secure. We strive to protect your information but cannot guarantee absolute security.</li>                        
                    </ul>
                    <h3 className='text-xl mb-3' >Your Rights (GDPR & CCPA)</h3>
                    <ul className='list-decimal ml-4 mb-8' >
                        <li>Right to Access: You may request access to the personal data we hold about you.</li>
                        <li>Right to Rectification: If your information is inaccurate or incomplete, you have the right to request correction.</li>
                        <li>Right to Deletion: You may request that we delete your personal data, subject to legal and regulatory requirements.</li>
                        <li>Opt-Out of Marketing: You can opt out of receiving marketing communications at any time by following the unsubscribe link in our emails.</li>
                    </ul>
                    <h3 className='text-xl mb-3' >Cookies</h3>
                    <p className='mb-8'>We use cookies to enhance your experience, analyze website traffic, and for marketing purposes. You can control your cookie preferences via your browser settings.</p>
                    <h3 className='text-xl mb-3' >Contact Us</h3>
                    <p>If you have questions about our Privacy Policy or wish to exercise your data protection rights, please contact us at <b>[support@expertshelp.com]</b>.</p>                    
                    
                </div>
            </div>
    </>
  )
}

export default disclaimer