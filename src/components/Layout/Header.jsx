// import React from 'react'
import { FaCode } from "react-icons/fa";

import Nav from "./Nav"

export const Header = () => {
  return (
    <div>
      <header 
      className="fixed bg-[#020617] flex justify-between
       text-white max-sm:py-10 max-lg:py-10 max-sm:px-5 max-lg:px-10 xl:px-40 xl:py-10 w-full ">
        <div className="text-[30px] w-[100px] my-0 flex gap-2 items-center ">
         <h1 className=""> Dion</h1>
         <span>{<FaCode/>} </span>
        </div>
        <div className="">
          <Nav/>
        </div>
      </header>
    </div>
  )
}
