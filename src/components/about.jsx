import React from "react";
import brand from "../assets/brandstra.mp4";
import designsolutions from "../assets/designsolution.mp4";

function About() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className='flex flex-col justify-evenly items-center  relative'>
      <h1
        className='text-center text-4xl font-bold mt-16 text-green-300'
        style={{ color: "#4a4a4a" }}>
        WHAT WE DO{" "}
      </h1>

      <div className='flex-row md:flex justify-center'>
        <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='p-4 m-2 mb-16 md:p-2 md:m-2 content-center shadow-xl hover:shadow-2xl  border-2 py-4 hover:border-green-400 ease-in duration-200 hover:translate-x-4  md:w-1/3'>
          <video
            autoPlay
            muted
            loop
            alt='imger'
            src={brand}
            className='w-full '
          />
          <p className='font-bold text-2xl' style={{ color: "#4a4a4a" }}>
            BRAND STRATEGY
          </p>
          <p style={{ color: "#747474" }} className='p-2 text-lg'>
            We are much more than a branding agency. Our team of professionals
            works with an oath to bring out their best, and make a mark in the
            world with their ideas, creatives and products
          </p>
        </div>
        <div className='p-4 m-2 md:p-2 md:m-2 shadow-xl hover:shadow-2xl  border-2 hover:border-green-400 ease-in duration-200  md:w-1/3'>
          <video autoPlay muted loop alt='imger' src={designsolutions} />
          <p className='font-bold text-2xl mt-3' style={{ color: "#4a4a4a" }}>
            DESIGN SOLUTIONS
          </p>
          <p style={{ color: "#747474" }} className='p-2 text-lg'>
            As an ambitious and extremely curious lot, we make sure to conjure
            up stories of success with innovation and hard work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
