import React from "react";
import video from "../assets/firstvideo.mp4";
import videobannner from "../assets/bannernow1.jpg";
import "../App.css"
function Banner() {
  return (
    <div
      className='relative '
      style={{
        height: "100vh",
        borderBottomRightRadius: "7%",
        borderBottomLeftRadius: "7%",
        overflow: "hidden",
      }}>
      <div
        className='flex justify-between absolute z-10 w-full'
        style={{ width: "100%" }}>
        <div>
          <p
            className='text-3xl p-4 md:p-8 md:px-16'
            style={{ fontFamily: "poppins", color: "#44b2e5" ,fontWeight:700}}>
            Mages<span className='text-green-300'></span>
          </p>
        </div>

        <div className=' p-8 px-12 hidden lg:flex group'>
          <a href='/'>
            {" "}
            <p
              className='text-xl font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins" }}>
              Home{" "}
            </p>
          </a>
          <a href='mailto:Hello@mages.studio'>
            {" "}
            <p
              className='text-xl font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins" }}>
              Contact
            </p>
          </a> <a href='https://medium.com'>
            {" "}
            <p
              className='text-xl font-bold p-2 px-6 ease-in duration-100 text-white hover:text-blue-300'
              style={{ fontFamily: "poppins" }}>
              Blog
            </p>
          </a>
        </div>
      </div>
      <div className='absolute top-0 ' style={{ height: "100%" }}>
        <video
          src={video}
          autoPlay
          loop
          muted
          className='w-full h-full '
          style={{
            objectFit: "cover",
            width: "100vw",
            opacity: 1,
            filter: "brightness(0.5)",
            borderBottomRightRadius: "7%",
            borderBottomLeftRadius: "7%",
            backgroundImage: `url(${videobannner})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className='top-40 p-4 md:px-16 absolute font-bold text-4xl md:text-6xl '>
          <p className='text-white' style={{fontFamily:"poppins"}}>WE </p>
          <span className='text-white'  style={{fontFamily:"poppins"}}>RISE BY </span>
          <p style={{ color: "#44b2e5" ,fontFamily:"poppins"}}>LIFTING OTHERS.</p>
          <span
            className='reachout text-2xl p-2 py-4 flex  justify-center items-center mt-4 ease-in duration-300	'
            style={{
              border: " 1px solid #44b2e5 ",
              width: "fit-content",
            }}>
            <a href='#new'>
              {" "}
              <p className='mr-2'  style={{fontFamily:"poppins"}}> REACH OUT TO US </p>
            </a>
            <svg
              viewBox='0 0 38.62 17.59'
              xmlns='http://www.w3.org/2000/svg'
              width='10%'
              height='10%'
              fill='currentcolor'>
              <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
            </svg>{" "}
          </span>
        </div>
        {/* <p>hi</p> */}
        <svg
          fill='white'
          className='absolute '
          style={{ height: "fit-content", top: "92%" }}
          width='100%'
          height='fit-content'
          viewBox='0 0 1289 186.38'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='m644.5 45.86c-258.99 0-490.56-17.86-644.5-45.86v186.38h1289v-186.38c-153.94 28-385.51 45.86-644.5 45.86z'></path>
        </svg>
      </div>
    </div>
  );
}

export default Banner;
