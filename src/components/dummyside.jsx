import React from "react";
import video from "../assets/2video.mp4";
import videobannner2 from "../assets/videobannner2.jpg";

function Dummyside() {
  return (
    <div
      style={{ minHeight: "fit-content", width: "100vw" }}
      className='pt-24 md:pt-0'>
      {/* <p>YOU DREAM IT ,WE DESIGN IT</p> */}
      <div className='relative w-full  md:mt-0'>
        <video
          src={video}
          autoPlay
          loop
          muted
          className='relative  h-screen    w-full'
          style={{
            backgroundImage: videobannner2,
            objectFit: "cover",
            borderBottom: "25%",
            top: "50%",
            //   transform: "translateY(-50%)",
          }}></video>
        <svg
          fill='white'
          width='100%'
          className=' absolute top-0 '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg> <svg
          fill='white'
          width='100%'
          className=' absolute  ' style={{top:"-1%"}}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          style={{ transform: "rotate(180deg)", top: "95%" }}
          className='absolute  hidden md:flex'
          width='100%'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg><svg
          fill='white'
          style={{ transform: "rotate(180deg)", top: "94%" }}
          className='absolute  hidden md:flex'
          width='100%'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg><svg
          fill='white'
          style={{ transform: "rotate(180deg)", top: "92%" }}
          className='absolute  hidden md:flex'
          width='100%'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
        <svg
          fill='white'
          style={{ transform: "rotate(180deg)", top: "93%" }}
          className='absolute  hidden md:flex'
          width='100%'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1289 56.85'>
          <defs>
            <style></style>
          </defs>
          <path
            class='a'
            d='M0,0V10.89c153.8,28.08,385.42,46,644.5,46S1135.2,39,1289,10.89V0Z'></path>
        </svg>
      </div>
    </div>
  );
}

export default Dummyside;
