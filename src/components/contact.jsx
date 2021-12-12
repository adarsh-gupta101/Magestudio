import React from "react";

function Contact() {
  return (
    <div className='bg-gray-50 mb-12 ' id='new'>
      <p
        style={{ fontWeight: 800, color: "#4a4a4a" }}
        className='text-2xl md:text-4xl  text-center mb-8'>
        START A NEW PROJECT
      </p>
      <div className=' w-full md:w-5/6  m-auto shadow-lg px-4 py-10 '>
        <p
          className=' text-xl md:text-2xl p-4 m-4'
          style={{ fontWeight: 800, color: "#4a4a4a" }}>
          Your Name
        </p>
        <input
          type='text'
          placeholder='Name Surname'
          className='border-2 hover:border-green-300 text-green-300  text-xl font-bold ease-in duration-300 w-5/6 p-4 m-4'
          style={{ outlineWidth: 0 }}
        />
        <p
          className='text-xl md:textp-4 m-4'
          style={{ fontWeight: 800, color: "#4a4a4a" }}>
          Company/Organisation
        </p>
        <input
          type='text'
          placeholder='Name Surname'
          className='border-2 hover:border-green-300 text-green-300  text-xl font-bold ease-in duration-300 w-5/6 p-4 m-4'
          style={{ outlineWidth: 0 }}
        />
        <p
          className='text-xl md:textp-4 m-4'
          style={{ fontWeight: 800, color: "#4a4a4a" }}>
          Your Email
        </p>
        <input
          type='text'
          placeholder='youremail@gmail.com'
          className='border-2 hover:border-green-300  text-green-300  text-xl font-bold ease-in duration-300 w-5/6 p-4 m-4'
          style={{ outlineWidth: 0 }}
        />
        <p
          className='text-xl md:textp-4 m-4'
          style={{ fontWeight: 800, color: "#4a4a4a" }}>
          Phone Number
        </p>
        <input
          type='number'
          placeholder='9995559992'
          className='border-2 hover:border-green-300 text-green-300  text-xl font-bold ease-in duration-300 w-5/6 p-4 m-4'
          style={{ outlineWidth: 0 }}
        />
        <p
          className='text-xl md:textp-4 m-4'
          style={{ fontWeight: 800, color: "#4a4a4a" }}>
          Tell us a bit about your project
        </p>
        <input
          type='adress'
          placeholder='Details are like good news. The more you share,the better'
          className='border-2 hover:border-green-300 text-green-300  text-xl font-bold ease-in duration-300 w-5/6 p-4 h-32 m-4'
          style={{ outlineWidth: 0 }}
        />

        <p className='border-2 flex justify-center items-center border-green-300 md:p-4 h-16  w-4/5 md:w-2/5 m-4 text-green-300 text-xl hover:bg-green-300 hover:text-white ease-linear duration-300'>
          Send Message &nbsp;{" "}
          <svg
            viewBox='0 0 38.62 17.59'
            xmlns='http://www.w3.org/2000/svg'
            width='10%'
            height='50%'
            fill='currentcolor'>
            <path d='m29.82 0-1.42 1.43 6.35 6.35h-34.75v2.02h34.75l-6.35 6.36 1.42 1.43 8.8-8.8z'></path>
          </svg>{" "}
        </p>
      </div>
    </div>
  );
}

export default Contact;
