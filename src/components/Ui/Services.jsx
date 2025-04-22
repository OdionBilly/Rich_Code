// import React from 'react'
import { FaWebAwesome } from "react-icons/fa6"
import { MdWebAsset } from "react-icons/md"
import { IoLogoAndroid } from "react-icons/io"
// import { FaMobileAlt } from "react-icons/fa"

export const Services = () => {

  return (
    <div id="Services" className="bg-[#111827] max-w-full xl:pt-[150px] xl:py-[100px] max-sm:pt-[70px] max-lg:py-10">
      <div >
        <div className="xl:px-[80px] max-sm:px-5 max-lg:px-10 py-5">
          <h1 className="text-4xl font-bold text-white pb-[20px]">MY  <span className="text-[yellow]">SERVICES </span></h1>
          <p className="xl:w-[400px] text-[#6B7280]"> 
            A web development, UI/UX design coach passionate about solving problems through creative technology ,
            equipping young minds with the skills to thrive in the digital world.
            I specialize in creating user-friendly and visually appealing websites and applications.    
          </p>
        </div>

        {/* services flex sections */}
        <div className="flex max-sm:flex-col max-lg:flex-col gap-[50px]  xl:px-[80px] max-sm:px-5 max-lg:px-10 pb-10 ">
          <div className=" bg-[#020617] ">
              <p className="text-[yellow] text-[50px]  xl:mx-[180px] max-lg:mx-[320px] max-sm:mx-[150px] pt-4"><IoLogoAndroid/></p>
              <h1 className="text-white  mt-5 text-center"> MOBILE APPS</h1>
              <p className="text-[#6B7280] px-10 py-10">
                Focuses on the user interface (UI) and user experience (UX).
                Works with technologies like, react Native,
              </p>
          </div>
          <div className="bg-[#020617] ">
              <p className="text-[yellow] text-[50px] xl:mx-[180px]  max-lg:mx-[320px] max-sm:mx-[150px] pt-4"><MdWebAsset/></p>
              <h1 className="text-white mt-5 text-center">SOFTWARE DEVELOPEMENT</h1>
              <p className="text-[#6B7280] px-10 py-10">
                Focuses on the user interface (UI) and user experience (UX).
                Works with technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.
              </p>
          </div>
          <div className="bg-[#020617] ">
              <p className="text-[yellow] text-[50px] xl:mx-[180px]  max-lg:mx-[320px] max-sm:mx-[150px] max-sm:pt-4 xl:pt-4"><FaWebAwesome/></p>
              <h1 className="text-white mt-5 text-center"> CREATIVE UI/UX DESIGNER</h1>
              <p className="text-[#6B7280] px-10 py-10">
               Designing the layout, colors, typography, icons, and buttons.
               Ensuring consistency in the visual design across all screens and pages.
               Creating interactive elements like buttons, forms, and menus.
               Crafting prototypes to demonstrate how the user will interact with the product.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
