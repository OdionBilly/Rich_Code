// import React from 'react'
import { FaWebAwesome } from "react-icons/fa6"
import { MdWebAsset } from "react-icons/md"
import { IoLogoAndroid } from "react-icons/io"
// import { FaMobileAlt } from "react-icons/fa"

export const Services = () => {
  return (
    <div className="bg-[#111827] max-w-full xl:py-[100px] ">
      <div>
        <div className="xl:px-[80px] max-sm:px-5 py-10 ">
          <h1 className="text-4xl font-bold text-white pb-[20px]">MY  <span className="text-[yellow]">SERVICES </span></h1>
          <p className="xl:w-[400px] text-[#6B7280]">
             
          </p>
        </div>

        {/* services flex sections */}
        <div className="flex max-sm:flex-col gap-[50px]  xl:px-[80px] max-sm:px-5">
          <div className=" bg-[#020617] ">
              <p className="text-[yellow] xl:text-[50px] xl:mx-[180px] pt-4"><IoLogoAndroid/></p>
              <h1 className="text-white  mt-5 text-center"> MOBILE APPS</h1>
              <p className="text-[#6B7280] px-10 py-10">
                Focuses on the user interface (UI) and user experience (UX).
                Works with technologies like, react Native,
              </p>
          </div>
          <div className="bg-[#020617] ">
              <p className="text-[yellow] xl:text-[50px] xl:mx-[180px] pt-4"><MdWebAsset/></p>
              <h1 className="text-white mt-5 text-center">SOFTWARE DEVELOPEMENT</h1>
              <p className="text-[#6B7280] px-10 py-10">
                Focuses on the user interface (UI) and user experience (UX).
                Works with technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.
              </p>
          </div>
          <div className="bg-[#020617] ">
              <p className="text-[yellow] xl:text-[50px] xl:mx-[180px] xl:pt-4"><FaWebAwesome/></p>
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
