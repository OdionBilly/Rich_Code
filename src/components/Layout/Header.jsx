// import React from 'react'
import { FaCode } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link"
import { MdMenu,MdOutlineClose } from "react-icons/md";
import { useState } from "react";



// import Nav from "./Nav"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header
       className="fixed top-0 opacity-50 bg-[#020617] flex justify-between
       text-white max-sm:py-5 max-lg:py-10 max-sm:px-5 max-lg:px-10 xl:px-40 xl:py-10 w-full mb-10 ">
        <div className="text-[30px] w-[100px] my-0 flex gap-2 items-center ">
         <h1 className=" "> Dion</h1>
         <span>{<FaCode/>} </span>
        </div>
        <div className="">
        <ul className=" max-sm:hidden max-lg:hidden flex  justify-between gap-10 text-[20px] ">
          <Link to="#Hero">
             Home
          </Link>
          <Link to="#About"> 
            <li>About</li>
          </Link>
          <Link to="/#Services">
            <li>Services</li>  
          </Link>
          <Link to="/#Portfolio">
            <li>Portfolio</li>
          </Link>
          <Link to="/#Myexperince">
            <li>Experience</li> 
          </Link>
          <Link to="/#Contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div
          onClick={()=> setIsOpen(!isOpen)}
          className="xl:hidden cursor-pointer">
            {isOpen ? <MdOutlineClose className="text-[#f5f6f6] text-[40px]"/> : <MdMenu className="text-[#f5f6f6] text-[40px]"/>}
        </div>
        </div>
      </header>
       {/* mobile menu */}
       {isOpen && (
          <div className=" w-full flex items-center ">
            <ul className="flex max-sm:flex-col max-lg:flex-col gap-2 px-5 text-[15px]  text-[#f5f6f6] max-sm:mt-[80px] max-lg:mt-[120px] pb-5">
              <Link to="/#home">
                Home
              </Link>
              <Link to="#About">
                About
              </Link>
              <Link to="/#Services">
                Services
              </Link>
              <Link to="/#Portfolio">
                Portfolio
              </Link>
              <Link to="/#Myexperince">
                Experience
              </Link>
              <Link to="/#Contact">
                Contact
              </Link>
            </ul>
          </div>
        )}
    </div>
  )
}
