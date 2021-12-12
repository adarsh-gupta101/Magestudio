import React from "react";
import About from "./components/about";
import Banner from "./components/banner";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import Dummyside from "./components/dummyside";
import End from "./components/End";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner />
      <About />
      <Portfolio />
      <Dummyside />
      <Testimonial />
      <Footer />
      <End />
      {/* <About/>
      <Portfolio/>
      <Testimonial/>
      <Footer/> */}
    </div>
  );
}

export default App;
