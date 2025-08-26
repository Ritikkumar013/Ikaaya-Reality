"use client"; 
import React from "react";
import { useState } from "react";
import Image from "next/image";

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
              {/* <img
                src="./Images/8.jpg"
                className="w-full md:max-w-[500px] ml-auto rounded-lg"
              /> */}
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

      {/* Section 6 */}
      {/* <div className="py-14 bg-white">
        <div className="max-w-screen-xl container mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl text-[#0D0D0D] pb-3 text-center font-heading">
            Our Top Reads
          </h2>
          <p className="text-xs text-[#626262] max-w-[400px] mx-auto text-center mb-10 lg:mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-5 mb-4 text-left">
            <div className="basis-1/3 border bg-gray-100 rounded-lg">
              
              <Image
                src="/home-2nd-sec.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-3 flex flex-col gap-2 pb-4">
                <h5 className="text-lg">Who&apos;s driving Bajrang Motors</h5>
                <p className="text-sm mb-2 text-gray-600">
                  We`&apos;re building a culture within Bajrang Motor that
                  emphasizes doing the right thing, period, for riders, drivers,
                  and employees. Find out more about the team that’s leading the
                  way.
                </p>
                <p className="text-xs">
                  <a
                    className="underline-offset-2 underline text-black font-bold"
                    href="#"
                  >
                    See our leadership
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 border bg-gray-100 rounded-lg">
              
              <Image
                src="/home-2nd-sec.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-3 flex flex-col gap-2 pb-4">
                <h5 className="text-lg">Who&apos;s driving Bajrang Motors</h5>
                <p className="text-sm mb-2 text-gray-600">
                  We`&apos;re building a culture within Bajrang Motor that
                  emphasizes doing the right thing, period, for riders, drivers,
                  and employees. Find out more about the team that’s leading the
                  way.
                </p>
                <p className="text-xs">
                  <a
                    className="underline-offset-2 underline text-black font-bold"
                    href="#"
                  >
                    See our leadership
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 border bg-gray-100 rounded-lg">
              
              <Image
                src="/home-2nd-sec.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-3 flex flex-col gap-2 pb-4">
                <h5 className="text-lg">Who&apos;s driving Bajrang Motors</h5>
                <p className="text-sm mb-2 text-gray-600">
                  We`&apos;re building a culture within Bajrang Motor that
                  emphasizes doing the right thing, period, for riders, drivers,
                  and employees. Find out more about the team that’s leading the
                  way.
                </p>
                <p className="text-xs">
                  <a
                    className="underline-offset-2 underline text-black font-bold"
                    href="#"
                  >
                    See our leadership
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#0D0D0D] text-[#FFFFFF] text-[13px] rounded-[25px] py-[12px] px-5 my-5 mx-auto">
            Read All!
          </button>
        </div>
      </div> */}

      {/* Section 7 */}
      {/* <div>
        <div className='container-md' style={{ padding: '80px 0px' }}>
          <div className='row justify-content-around'>
            <div className='col-5'>
              <h3 className='fw-medium fs-2 mb-3'>Make your brand go where people go</h3>
              <p className='fs-6 '>Bajrang Motor is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Learn More</a></p>
            </div>
            <div className='col-5'>
              <img src="../car.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 8 */}
      {/* <div className="py-14 bg-[#1A1919]">
        <div className="max-w-screen-xl container mx-auto px-5  md:px-10">
          <h2 className="text-3xl text-white pb-3 text-center">Company Info</h2>
          <p className="text-xs text-[#626262] max-w-[500px] mx-auto text-center mb-12 lg:mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been ways to ride green, helping drivers
            go electric, making transparency a priority
          </p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-5 text-white pt-20">
            <div className="basis-1/3">
              
              <Image
                src="/globe.svg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-9 mb-3"
              />
              <h5 className="text-xl mb-2">Newsroom</h5>
              <p className="text-sm mb-3 text-[#626262]">
                Get announcements about partnerships, app updates, initiatives,
                and more near you and around the world.
              </p>
              <a
                className="text-sm text-white underline underline-offset-2"
                href="#"
              >
                Go to Newsroom
              </a>
            </div>
            <div className="basis-1/3">
              
              <Image
                src="/window.svg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-9 mb-3"
              />
              <h5 className="text-xl mb-2">Blog</h5>
              <p className="text-sm mb-3 text-[#626262]">
                Get announcements about partnerships, app updates, initiatives,
                and more near you and around the world.
              </p>
              <a
                className="text-sm text-white underline underline-offset-2"
                href="#"
              >
                Read our Posts
              </a>
            </div>
            <div className="basis-1/3">
              <Image
                src="/file.svg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-9 mb-3"
              />
              <h5 className="text-xl mb-2">Investor Relations</h5>
              <p className="text-sm mb-3 text-[#626262]">
                Download financial reports, see next-quarter plans, and read
                about our corporate responsibility initiatives.
              </p>
              <a
                className="text-sm text-white underline underline-offset-2"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 9 */}
      {/* <div>
        <div className='container-fluid' style={{ background: '#f6f6f6' }}>
          <div className='container-md' style={{ padding: '80px 0px' }}>
            <div className='row justify-content-around'>
              <div className='col-5' style={{ paddingTop: '80px' }}>
                <h1 className='fw-medium fs-1 mb-3 text-black'>Come reimagine<br />with us</h1>
                <button type="button" class="btn btn-dark rounded-pill px-5 py-2">Know More!</button>
              </div>
              <div className='col-5'>
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutPage;
