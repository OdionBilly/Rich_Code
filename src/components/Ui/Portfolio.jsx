// import React from 'react'
import port3img from "../../assets/AudioPhile.png"
import ngoimage from "../../assets/ngo.png"
import foodimage from "../../assets/port4.png"

export const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-[#020617] xl:py-[200px] max-sm:py-[60px]">
      <div className="px-[80px]">
        <h1 className="text-white text-[25px] font-bold py-5 text-center">MY  <span className="text-[yellow]"> PORTFOLIO</span></h1>
        <p className="text-[#6B7280] xl:w-[400px] text-center xl:mx-[450px] xl:mb-[80px]">Below are some of my projects that have Done.
        </p>
      </div>
      {/* portfolio image  sections */}
      <div className="text-[#6ec4ce] flex max-sm:flex-col max-lg:flex-col max-sm:gap-10 max-lg:gap-10 xl:gap-10 xl:px-[80px] max-lg:px-10 xl:my-10 max-lg:py-10 max-sm:px-5">
        <div>
          <img src={port3img} alt="" className="xl:w-[450px] xl:h-[250px]" /> 
          <div className="flex  gap-10 py-4 text-[white]">
           <p className="">AudioPhile E-commerce  </p>
           <a href="https://audiophiles-e-commerce-git-main-odion-efionayis-projects.vercel.app/"target="-blank">Link</a>
          </div>
        </div>
        <div>
          <img src={foodimage} alt=""className="xl:w-[450px] xl:h-[250px]" />
          <div className="text-[white] flex gap-10 py-4">
            <p className="">G-Cousines food</p> 
            <a href="https://dee-app-gold.vercel.app/"target="-blank">Link</a>
          </div>
        </div>
        <div>
          <img src={ngoimage} alt=""className="xl:w-[450px] xl:h-[250px]" />
          <div className="text-[white] flex gap-10 py-4">
            <p className="">Light Your Nation .NGO</p>
            <a href="https://light-your-nation-xry292frj-odion-efionayis-projects.vercel.app/"target="-blank">Link</a>
          </div>
        </div>
      </div>
    </div>
  )
}
