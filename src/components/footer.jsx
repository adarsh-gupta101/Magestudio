import React from "react";

function footer() {
  return (
    <div className=' flex flex-col md:flex-row justify-between p-16' style={{minHeight:"100vh"}}>
      <div>
        <p className='text-4xl font-extrabold ' style={{ color: "#4a4a4a" }}>
          READY TO TEAM UP ?
        </p>
        <p className='mt-8 text-xl' style={{ color: "#B0b0b0" }}>
          {" "}
          Find us on social,
          <br /> connect with us through this form,
          <br /> or write directly
        </p>

        <span className='flex mt-24  p-4 border-2 border-green-300  w-64 items-center group  hover:bg-green-300 hover:text-white ease-in-out duration-300 '>
          <p className='mr-2 font-bold   text-green-300 group-hover:text-white' style={{ color: "" }}>
            REACH OUT TO US
          </p>
          <svg className="text-green-300 group-hover:text-white"
            viewBox='0 0 38.62 17.59'
            xmlns='http://www.w3.org/2000/svg'
            width='10%'
            height='10%'
            fill='currentcolor'>
            <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
          </svg>{" "}
        </span>
      </div>

      <div>
        <p className='text-2xl hover:text-green-400 text-gray-400'>
          Click{" "}
          <span className='font-bold' style={{ color: "#40eca7" }}>
            here
          </span>{" "}
          to Whatsapp us
        </p>
        <a href='mailto:Hello@mages.studio'>
          {" "}
          <p className=" mt-8 text-lg"style={{color:"#B0b0b0",textAlign:"right"}}> Hello@mages.studio</p>
        </a>
      </div>
    </div>
  );
}

export default footer;
