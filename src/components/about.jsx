import React from "react";

function About() {
  return (
    <div style={{minHeight:"100vh"}} className="flex flex-col justify-evenly items-center  relative">
      <p className='font-bold text-center text-xl' style={{ color: "#40ECA7",}}>
        WHAT WE DO
      </p>

      <div className="flex-row md:flex justify-center">
        <div className="p-0 m-0 md:p-2 md:m-2 content-center shadow-2xl  border-2 py-4 hover:border-green-400 ease-in duration-200 hover:translate-x-4 w-full md:w-1/3" >
          <img
            alt='imger'
            src='https://uploads-ssl.webflow.com/609374cb30dd30b8755c317d/61a480d8444a216492740f63_Google-girl.gif'
           
          />
          <p className='font-bold text-2xl' style={{ color: "#4a4a4a" }}>
            BRAND STRATEGY
          </p>
          <p>
            We are much more than a branding agency. Our team of professionals
            works with an oath to bring out their best, and make a mark in the
            world with their ideas, creatives and products
          </p>
        </div>
        <div className="p-4 m-0 md:p-2 md:m-2 shadow-2xl border-2 hover:border-green-400 ease-in duration-200 w-full md:w-1/3"  >
          <img
            alt='imger'
            src='https://uploads-ssl.webflow.com/609374cb30dd30b8755c317d/6197692f36cf9f87359efd05_ziggs%202mb.gif'
            
          />
          <p className='font-bold text-2xl' style={{ color: "#4a4a4a" }}>
           DESIGN SOLUTIONS
          </p>
          <p>
          As an ambitious and extremely curious lot, we make sure to conjure up stories of success with innovation and hard work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
