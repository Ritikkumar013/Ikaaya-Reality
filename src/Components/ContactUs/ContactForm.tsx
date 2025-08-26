"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Send form data to the API route
      const response = await fetch("/api/contactus/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          service: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseMessage(`Error: ${result.error}`);
      }
    } catch {
      setResponseMessage("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 lg:p-12 bg-white shadow-md rounded-md mb-4"
    >
      {/* Form Fields */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Name Input */}
        <div className="basis-1/2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Enter your Fullname*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="basis-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Enter your Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=" block w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Mobile Number Input */}
        <div className="basis-1/2">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Enter your Mobile Number*
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="block mt-2 w-full border-b border-gray-300 p-2 focus:outline-none"
          />
        </div>

        {/* Choose Your Service Select */}
        {/* <div className="basis-1/2">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Select your Service*
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
          >
            <option value="No Service Selected">Select a service</option>
            <option value="Printer Troubleshooting">Printer Troubleshooting</option>
            <option value="Windows Issues">Windows Issues</option>
            <option value="Outlook PST File Support">Outlook PST File Support</option>
            <option value="Television Support">Television Support</option>
            <option value="Email Support">Email Support</option>
          </select>
        </div> */}
      </div>

      {/* Subject Input */}
      <div className="mb-8">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Enter your Subject*
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="block w-full border-b border-gray-300 p-2 focus:outline-none"
        />
      </div>

      {/* Your Message Textarea */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Enter your Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="block w-full border-b border-gray-300 p-2 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md focus:outline-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>

      {/* Response Message */}
      {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;
