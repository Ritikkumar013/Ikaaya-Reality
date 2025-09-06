"use client"; 
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Clubhouse from "../../Components/Clubhouse";

const AboutPage = () => {
  const [selected] = useState(null);


  const Ceomessage = {
    backgroundImage:
      "url('https://www.uber-assets.com/image/upload/v1590112350/assets/ba/e2d6c0-0335-4c4c-ad45-04097c24e819/original/dara-desktop.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "140px 0px 90px 0px",
  };

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
            About Us
          </h1>
        </div>
      </div>

      {/* Section 2*/}
      <div className="py-14">
        <div className="max-w-screen-xl container mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row mb-8 gap-8">
            <div className="basis-3/4 md:pr-14">
              <h2 className="text-4xl mb-4 leading-10 font-heading">
                We reimagine the way the world moves for the better
              </h2>
              <p className="text-sm">
                Movement is what we power. It’s our lifeblood. It runs through
                our veins. It’s what gets us out of bed each morning. It pushes
                us to constantly reimagine how we can move better. For you. For
                all the places you want to go. For all the things you want to
                get. For all the ways you want to earn. Across the entire world.
                In real time. At the incredible speed of now.
              </p>
            </div>
            <div className="basis-1/4">
              <Image
                src="/home-2nd-sec.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              {/* <img
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
                className="bg-transparent"
              /> */}
            </div>
          </div>
          <div className=" p-3 rounded-md border-b text-black bg-white">
            <div className=" flex justify-between">
              <h2 className="text-base">1.) This is Accordion 1</h2>
              {/* <i className={selected === 1 ? 'fa-solid fa-angle-down w-[10%] rotate-180' : 'fa-solid fa-angle-down w-[10%]'}></i> */}
              <i
                className={`fa-solid fa-angle-down flex items-center ${
                  selected === 1 ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={
                selected === 1
                  ? "text-sm py-2 text-[#ABA3A3] duration-1000 ease-in-out "
                  : "hidden"
              }
            >
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s. Lorem Ipsum is simply dummy
                text of the printing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3*/}
      <div style={Ceomessage} className="py-14">
        <div className="max-w-screen-xl container mx-auto px-5 md:px-10">
          <div className="">
            <div className="">
              <h1 className="text-white text-4xl mb-2 font-heading">
                A letter from our CEO
              </h1>
              <p className="text-white mb-4 max-w-[600px] text-sm">
                Read about our team’s commitment to provide everyone on our
                global platform with the technology that can help them move
                ahead.
              </p>
              <button
                type="button"
                className="text-white underline underline-offset-4"
              >
                Read More!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-6 lg:py-14 mt-10">
        <div className="max-w-screen-xl container mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="basis-1/2">
              {/* <img
                src="./Images/9.jpg"
                className="w-full md:max-w-[500px] rounded-lg"
              /> */}
              <Image
                src="/home-2nd-sec.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="basis-1/2">
              <h3 className=" text-3xl font-heading">Sustainability</h3>
              <p className="text-md mb-3">
                Ikaaya Reality is committing to becoming a fully electric,
                zero-emission platform by 2040, with 100% of rides taking place
                in zero-emission vehicles, on public transit, or with
                micromobility. It is our responsibility as the largest mobility
                platform in the world to more aggressively tackle the challenge
                of climate change. We will do this by offering riders more ways
                to ride green, helping drivers go electric, making transparency
                a priority and partnering with NGOs and the private sector to
                help expedite a clean and just energy transition.
              </p>
              <p className="underline underline-offset-4 text-sm font-bold">
                <a className="text-black" href="#">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="py-8 pb-14 md:py-14">
        <div className="max-w-screen-xl container mx-auto px-5 md:px-10">
          <div className="flex flex-col-reverse md:flex-row gap-5">
            <div className="basis-1/2 pr-4">
              <h3 className="text-3xl font-heading">Sustainability</h3>
              <p className="text-md mb-3">
                Ikaaya Reality is committing to becoming a fully electric,
                zero-emission platform by 2040, with 100% of rides taking place
                in zero-emission vehicles, on public transit, or with
                micromobility. It is our responsibility as the largest mobility
                platform in the world to more aggressively tackle the challenge
                of climate change. We will do this by offering riders more ways
                to ride green, helping drivers go electric, making transparency
                a priority and partnering with NGOs and the private sector to
                help expedite a clean and just energy transition.
              </p>
              <p className="underline underline-offset-4 text-sm font-bold">
                <a className="text-black" href="#">
                  Learn More
                </a>
              </p>
            </div>
            <div className="basis-1/2">
              
              <Image
                src="/home-2nd-sec.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>

<Clubhouse />
           
    </>
  );
};

export default AboutPage;
