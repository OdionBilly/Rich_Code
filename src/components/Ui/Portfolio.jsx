// import React from 'react'
import port3img from "../../assets/AudioPhile.png"
import port2img from "../../assets/port2.jpg"
import portimg1 from "../../assets/port1.jpg"

export const Portfolio = () => {
  return (
    <div className="bg-[#020617] py-10">
      <div className="px-[80px]">
        <h1 className="text-white text-[25px] font-bold py-5 text-center">MY  <span className="text-[yellow]"> PORTFOLIO</span></h1>
        <p className="text-[#6B7280] w-[400px] text-center mx-[450px] mb-[80px]">Below are some of my projects that have worked on, And project i have collaborated on.
        </p>
      </div>
      {/* portfolio image  sections */}
      <div className="text-[#6ec4ce] flex xl:gap-10 xl:px-[80px] xl:my-10">
        <div>
          <img src={port3img} alt="" className="w-[450px] xl:h-[250px]" /> 
          <div className="flex  gap-10 py-4 text-[white]">
           <p className="">AudioPhile E-commerce  </p>
           <p className=" pointer">Link</p>
          </div>
        </div>
        <div>
          <img src={port2img} alt=""className="w-[450px] xl:h-[250px]" />
          <div className="text-[white] flex gap-10 py-4">
            <p className="">Streamer Agency </p>  
            <p className="">Link</p>
          </div>
        </div>
        <div>
          <img src={portimg1} alt=""className="w-[450px] xl:h-[250px]" />
          <div className="text-[white] flex gap-10 py-4">
            <p className="">Designo Agency </p>
            <p className="pointer">Link</p>
          </div>
        </div>
      </div>
    </div>
  )
}
