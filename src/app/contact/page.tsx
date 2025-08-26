import ContactForm from "@/Components/ContactUs/ContactForm";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const contactus = () => { 
  return (
    <>
      
      {/* Section 1 */}
      <div
        className="w-full h-[55vh] md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh] mb-5"
        style={{ backgroundImage: "url('/gallery.png')" }}
      >
        {" "}
        <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
            Contact Us
          </h1>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-[#F7F7F7] px-5 py-14 md:px-14">
        <div className="max-w-screen-xl container mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
        Get in Touch with <span className="text-[#B79868]"> Our Experts </span>
          </h1>
          <p className="max-w-3xl mx-auto">
          We’re here to assist you with all your tech support needs. Fill out the form below, and our dedicated team will get back to you promptly with personalized solutions for your issue.
          </p>
        </div>
        <ContactForm></ContactForm>
      </div>

      {/* Section 3 */}
      <div className="">
        <div className="text-sm">
          <div className="flex flex-col md:flex-row text-white ">
            <div className=" basis-1/3">
              <iframe className="min-h-60" style={{ border: "none", width: "100%", height: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3197569610493!2d-0.08626028779893412!3d51.52569477169993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fd67523%3A0x1483f30997bfd8ba!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sin!4v1734087732228!5m2!1sen!2sin" width="600" height="450"  loading="lazy" ></iframe>
            </div>
            <div className="basis-1/3 bg-[#282828] px-5 py-10 md:p-12 lg:p-16 ">
              <h1 className="text-3xl underline underline-offset-8 mb-8 font-heading">
                Reach Us:
              </h1>
              <div className="flex gap-2 mb-3 items-center">
                <Image 
                width={650}
                height={650}
                alt="Contact Image"
                src="/phone.png" className="w-[18px]" />
                <Link href="tel:01241 242660"><p className="">01241 242660</p></Link>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image 
                width={650}
                height={650}
                alt="Contact Image"
                src="/mail.png" className="w-[18px]" />
                <Link href="mailto:info@oceantechies.com"><p className="">info@oceantechies.com</p></Link>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image 
                width={650}
                height={650}
                alt="Contact Image"
                src="/location.png" className="w-[18px]" 
                />
                <p className="">86-90 Paul Street, London, England, United Kingdom, EC2A 4NE</p>
              </div>
            </div>
            <div className="basis-1/3 bg-[#B79868] px-5 py-10 md:p-12 lg:p-16">
              <h1 className="text-3xl underline underline-offset-8 mb-6 font-heading">
                Contact Us
              </h1>
              <p className=" mb-3">
                <span className="text-lg leading-9 font-bold">Hello,</span>
                <br />
                Ready to get started? Click the button below to fill out our
                quick form and let us know how we can assist you!
              </p>
              <button
                type="button"
                className=" bg-black text-white rounded-md px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Click Here !
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
