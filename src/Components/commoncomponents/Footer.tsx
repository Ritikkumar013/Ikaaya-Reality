"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <>
    <div className=" bg-black w-full text-white p-6 md:p-7 md:pt-14 md:pb-16 lg:pb-16 lg:pt-20">
        <div className="lg:flex max-w-screen-xl mx-auto gap-14">
          <div className="lg:basis-5/12 text-[#ABA3A3]">
            {/* <h1 className="uppercase text-2xl mb-4 text-white font-heading">LOGO</h1> */}

            <Image
              className="w-24 ml-[-10px] mb-3"  
              src="/ikaaya/beige.png"
              width={400}
              height={400}
              alt="Footer Logo"
            />

            <p className="text-md mb-4">
              Get expert assistance anytime, anywhere. From troubleshooting to
              setup, we’re here to simplify your tech journey with fast,
              reliable support tailored to your needs
            </p>
            <div>
              <div className="flex gap-2 mb-3 items-center">
                <Image
                  width={650}
                  height={650}
                  alt="Contact Image"
                  src="/phone.png"
                  className="w-[18px]"
                />
                <Link href="tel:01241 242660">
                  <p className="">01241 242660</p>
                </Link>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image
                  width={650}
                  height={650}
                  alt="Contact Image"
                  src="/mail.png"
                  className="w-[18px]"
                />
                <Link href="mailto:info@oceantechies.com">
                  <p className="">info@ikaayarealty.com</p>
                </Link>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image
                  width={650}
                  height={650}
                  alt="Contact Image"
                  src="/location.png"
                  className="w-[18px]"
                />
                <p className="">
                  86-90 Paul Street, London, England, United Kingdom, EC2A 4NE
                </p>
              </div>
            </div>
          </div>
          <div className="lg:basis-7/12 flex-col flex py-4 md:flex-row lg:flex-row md:py-5">
            <div className="basis-1/2">
              <h3 className="uppercase underline underline-offset-4 text-base mb-4 font-heading">
                Important Links
              </h3>
              <div className="flex flex-col text-sm gap-2 text-[#ABA3A3]">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/aboutus" className="hover:text-white">About</Link>
                <Link href="/contact" className="hover:text-white">Contact</Link>
                <Link href="/gallery" className="hover:text-white">Gallery</Link>
                <Link href="/location" className="hover:text-white">Location</Link>
                <Link href="/disclaimer" className="hover:text-white">Unit Configuration</Link>
              </div>
            </div>
            <div className="basis-1/2">
              <h3 className="uppercase underline underline-offset-4 pt-5 lg:pt-0 md:pt-0 text-base mb-4 font-heading">
                Policy Pages
              </h3>
              <div className="flex flex-col text-sm gap-2  text-[#ABA3A3]">
                <Link href="/privacypolicy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/termsofservice" className="hover:text-white">Terms of Service</Link>
                <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              </div>
            </div>
            <div className="basis-1/2 py-4 md:py-0 lg:py-0">
              <h4 className="text-lg mb-3 leading-6 font-heading">
                Stay Updated with the Latest Tips and Exclusive Offers from Our
                Experts
              </h4>
              <p className="text-md mb-3 text-gray-400">
                Subscribe to our newsletter to get regular updates, tips, and
                offers that keep your devices running at their best.
              </p>
              <form onSubmit={handleSubmit} className="flex mt-8">
                <div className="basis-5/6">
                  {/* Email Input */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full bg-transparent border-b border-gray-300 p-2  focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Submit Button */}
                <div className="basis-1/6">
                  <button
                    type="submit"
                    className="bg-white px-5 py-2 mb-[-2px] focus:outline-none focus:ring-2 text-black"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    <div className="w-full bg-[#1A1919] py-3 text-white">
        <div className="flex text-center max-w-screen-xl flex-col md:flex-row justify-around mx-auto text-sm">
          <div className="basis-1/3"></div>
          <div className="basis-1/3">
            <p>
              Copyright ©{" "}
              <span className="text-[#B79868]">Crobstacle Ventures LLP</span>{" "}
              2025</p>
          </div>
          <div className="basis-1/3">
              <div className="flex gap-5 justify-end">
                <Image
                  className="max-w-[16px]"
                  src="/facebook.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <Image
                  className="max-w-[16px]"
                  src="/youtube.png"
                  width={90}
                  height={90}
                  alt=""
                />
                <Image
                  className="max-w-[16px]"
                  src="/pinterest.png"
                  width={90}
                  height={90}
                  alt=""
                />
                <Image
                  className="max-w-[16px]"
                  src="/linkedin.png"
                  width={90}
                  height={90}
                  alt=""
                />
              </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Footer;
