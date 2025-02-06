// import React from 'react'
import { Link } from "react-router-dom"
import port3img from "../../assets/AudioPhile.png"
import port2img from "../../assets/port2.jpg"
import portimg1 from "../../assets/port1.jpg"

export const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-[#020617] xl:py-[200px] max-sm:py-10">
      <div className="px-[80px]">
        <h1 className="text-white text-[25px] font-bold py-5 text-center">MY  <span className="text-[yellow]"> PORTFOLIO</span></h1>
        <p className="text-[#6B7280] xl:w-[400px] text-center xl:mx-[450px] xl:mb-[80px]">Below are some of my projects that have worked on, And project i have collaborated on.
        </p>
      </div>
      {/* portfolio image  sections */}
      <div className="text-[#6ec4ce] flex max-sm:flex-col max-lg:flex-col max-sm:gap-10 max-lg:gap-10 xl:gap-10 xl:px-[80px] max-lg:px-10 xl:my-10 max-lg:py-10 max-sm:px-5">
        <div>
          <img src={port3img} alt="" className="xl:w-[450px] xl:h-[250px]" /> 
          <div className="flex  gap-10 py-4 text-[white]">
           <p className="">AudioPhile E-commerce  </p>
           <Link to="/https://audiophiles-e-commerce.vercel.app/" className="pointer">Link</Link>
          </div>
        </div>
        <div>
          <img src={port2img} alt=""className="xl:w-[450px] xl:h-[250px]" />
          <div className="text-[white] flex gap-10 py-4">
            <p className="">Streamer Agency </p>  
            <p className="">Link</p>
          </div>
        </div>
        <div>
          <img src={portimg1} alt=""className="xl:w-[450px] xl:h-[250px]" />
          <div className="text-[white] flex gap-10 py-4">
            <p className="">Designo Agency </p>
            <p className="pointer">Link</p>
          </div>
        </div>
      </div>
    </div>
  )
}
