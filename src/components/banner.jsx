import React from "react";
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
          <p className='text-2xl font-bold p-2 text-white'>Mages.Studio</p>
        </div>

        <div className='flex p-2 hidden lg:flex'>
          <p className='text-xl font-bold p-2 text-white'>HOME</p>
          <p className='text-xl font-bold p-2 text-white'>CONTACT</p>
        </div>
      </div>
      <div className='absolute top-0 ' style={{ height: "100%" }}>
        <video
          src={
            "https://uploads-ssl.webflow.com/608d2e8c7874983c045fd4e2/60a654e88b21832d5c376360_Pitchday_Header_Loop_Rework_V3-transcode.mp4"
          }
          autoPlay
          loop
          muted
          className='w-full h-full '
          style={{
            borderBottomRightRadius: "5%",
            borderBottomLeftRadius: "5%",
            objectFit: "cover",
            width: "100vw",
            opacity: 1,
            filter: "brightness(0.5)",
            backgroundImage:
              "url('https://uploads-ssl.webflow.com/608d2e8c7874983c045fd4e2/60c34e55a08c010b53b2db26_PD-Home-V1-compress-01-poster-00001.jpg')",
          }}
        />
        <div className='top-40 p-4 absolute font-bold text-6xl '>
          <p className='text-white'>WE RISE BY </p>
          <span style={{ color: "#40eca7" }}>LIFTING OTHERS</span>
          <p
            className='text-2xl p-3 flex w-72 justify-center items-center mt-4 text-green-400 hover:bg-green-400 hover:text-white ease-in duration-300	'
            style={{
              border: " 1px solid #40eca7 ",
              width: "fit-content",
            }}>
            {" "}
            REACH OUT TO US{" "}
            <svg
              viewBox='0 0 38.62 17.59'
              xmlns='http://www.w3.org/2000/svg'
              width='10%'
              height='10%'
              fill='currentcolor'>
              <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
            </svg>{" "}
          </p>
        </div>
        <p>hi</p>
        <svg
          fill='white'
          className='absolute top-80'
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
