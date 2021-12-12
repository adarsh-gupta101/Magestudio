import React from "react";
import brand from "../assets/brandstra.mp4";
import designsolutions from "../assets/designsolution.mp4";

function About() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className='flex flex-col justify-evenly items-center  relative'>
      <h1
        className='text-center text-4xl font-bold mt-16 mb-16 text-green-300'
        style={{ color: "#4a4a4a", fontWeight: 800 }}>
        WHAT WE DO{" "}
      </h1>

      <div className='flex-row md:flex justify-center'>
        <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='p-4 m-2   mb-16 md:px-2 md:py-24 md:m-2 content-center shadow-xl hover:shadow-2xl  border-2 border-white md:border-gray-100 hover:border-green-400 ease-in duration-200 hover:translate-x-4  md:w-1/3'>
          <video
            autoPlay
            muted
            loop
            alt='imger'
            src={brand}
            style={{ objectFit: "cover" }}
            className='w-full h-1/2'
          />
          <p
            className='font-bold text-2xl mt-3'
            style={{ color: "#4a4a4a", fontWeight: 800, fontSize: "1.55em" }}>
            BRAND STRATEGY
          </p>
          <p
            style={{
              color: "#747474",
              lineHeight: 1.78,
              fontFamily: "poppins",
              fontWeight:400
            }}
            className='p-2 text-xl'>
            We are much more than a branding agency. Our team of professionals
            works with an oath to bring out their best, and make a mark in the
            world with their ideas, creatives and products
          </p>
        </div>
        <div className='p-4 m-2 md:px-2 md:py-24  md:m-2 shadow-xl hover:shadow-2xl  border-2 border-white md:border-gray-100 hover:border-green-400 ease-in duration-200  md:w-1/3'>
          <video
            autoPlay
            muted
            loop
            alt='imger'
            src={designsolutions}
            style={{ objectFit: "cover" }}
            className='h-1/2 w-full'
          />
          <p
            className='font-bold text-2xl mt-3'
            style={{ color: "#4a4a4a", fontWeight: 800, fontSize: "1.55em" }}>
            DESIGN SOLUTIONS
          </p>
          <p
            style={{ color: "#747474", lineHeight: 1.78 , fontFamily: "poppins",
            fontWeight:400}}
            className='p-2 text-xl'>
            As an ambitious and extremely curious lot, we make sure to conjure
            up stories of success with innovation and hard work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
