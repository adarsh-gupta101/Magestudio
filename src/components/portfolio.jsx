import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";
import Work1 from "../assets/Works1.jpg";
import Work2 from "../assets/Works2.jpg";
import Work3 from "../assets/Works3.jpg";
import Work4 from "../assets/Works4.jpg";
import Work5 from "../assets/Works5.jpg";
import Work6 from "../assets/Works6.jpg";

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    centerMode: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          fade: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div
      className='noscrollbar flex-col justify-around'
      style={{ overflowY: "hidden", minHeight: "100vh" }}>
      <>
        <h1
          className='text-center text-4xl font-bold mt-16 xl:text-5xl'
          style={{ color: "#4a4a4a", fontWeight: 800 }}>
          OUR WORKS
        </h1>
      </>
      <>
        <Slider {...settings} className='noscrollbar mt-16'>

         { [Work1,Work2,Work3,Work4,Work5,Work6].map(works=>{
            return(
<div className='p-2 flex items-center justify-center   ' style={{display:"flex !important"}}>
                              <img src={works} alt='nil'className=" w-76 h-76 rounded-2xl p-0 m-auto" style={{height:"250px",objectFit:"cover"}} />

              </div>
            )
          })}
          {/* <div className='p-2'>
            <img src={Work1} alt='nil'className="bg-red-200" />
          </div>
          <div className='p-2'>
            <img src={Work2} alt='nil' />
          </div>
          <div className='p-2'>
            <img src={Work3} alt='nil' />
          </div>
          <div className='p-2'>
            <img src={Work4} alt='nil' />
          </div>
          <div className='p-2'>
            <img src={Work5} alt='nil' />
          </div>
          <div className='p-2'>
            <img src={Work6} alt='nil' />
          </div> */}
        </Slider>
      </>

      {/* <Carousel>
                <div>
                <img src="https://cataas.com/cat/says/hello%20world!" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="https://cataas.com/cat/says/hello%20world!" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cataas.com/cat/says/hello%20world!" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://cataas.com/cat/says/hello%20world!" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
    </div>
  );
}

export default Portfolio;
