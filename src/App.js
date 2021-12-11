import React from 'react'
import About from './components/about'
import Banner from './components/banner'
import Portfolio from './components/portfolio'
import Footer  from './components/footer'
import Testimonial from './components/testimonial'


function App() {
  return (
    <div>
      <Banner/>
      <About/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
      {/* <About/>
      <Portfolio/>
      <Testimonial/>
      <Footer/> */}

    </div>
  )
}

export default App
