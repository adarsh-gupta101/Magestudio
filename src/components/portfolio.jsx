import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import "../App.css"
function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{breakpoint:480 , settings: {slidesToShow: 1, slidesToScroll: 1}},]
      };
  return (
    <div className="noscrollbar flex-col justify-around" style={{overflowY:"hidden",minHeight:"100vh"}}>
      <>
      <h1
        className='text-center text-4xl font-bold'
        style={{ color: "#4a4a4a" }}>
        OUR WORKS 
      </h1>
      </>
      <>
      <Slider {...settings} className="noscrollbar mt-16">
          <div className="p-2">
          <img alt="nil" class="" src="https://cataas.com/cat/says/hello%20world!" />

            
          </div>
          <div className="p-2">
          <img alt="nil" src="https://cataas.com/cat/says/hello%20world!" />

            
          </div>
          <div className="p-2">
          <img alt="nil" src="https://cataas.com/cat/says/hello%20world!" />

            
          </div>
          <div className="p-2">
          <img alt="nil" src="https://cataas.com/cat/says/hello%20world!" />

            
          </div>
          <div className="p-2">
          <img alt="nil" src="https://cataas.com/cat/says/hello%20world!" />

            
          </div>
          <div className="p-2">
          <img alt="nil" src="https://cataas.com/cat/says/hello%20world!" />

            
          </div>
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
