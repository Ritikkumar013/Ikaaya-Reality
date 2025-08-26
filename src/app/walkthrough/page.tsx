import React from "react";

const Page = () => {
  return (
    <div className="">
      {/* Section 1 */}
      <div
        className="w-full h-[55vh] md:px-14 md:h-[70vh] flex items-center bg-cover bg-center lg:h-[72vh] mb-5"
        style={{ backgroundImage: "url('/gallery.png')" }}
      >
        {" "}
        <div className="container  max-w-screen-xl mx-auto text-white lg:mb-[-20px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-heading uppercase">
            Walkthrough
          </h1>
        </div>
      </div>

      {/* Section 2 */}

      <div className="max-w-screen-xl mx-auto py-20">
        <h1 className="text-5xl mb-5 uppercase text-center font-heading text-[#B79868]">
          {" "}
          <span className="text-black">Property </span> Walkthrough
        </h1>
        <p className="mb-16 uppercase text-[#B79868] text-center">
          Touch of Perfection is here
        </p>
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/JKccS9k56_I?start=4"
          title="YouTube Video"
          allowFullScreen
          className="shadow-lg w-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
