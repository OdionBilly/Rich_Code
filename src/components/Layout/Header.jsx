// import React from 'react'
// import { FaCode } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link"
// import {Link,} from "react-scroll"
import { MdMenu,MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import logoimage from '../../assets/rich code services Logo (1).png'



// import Nav from "./Nav"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header
       className="fixed top-0 opacity-50 bg-[#020617] flex justify-between items-center
       text-white max-sm:py-5 max-lg:py-7 max-sm:px-5 max-lg:px-10 xl:px-40 xl:py-10 w-full mb-10 ">
        <div className="text-[30px] w-[100px] my-0 flex gap-2 items-center ">
         <h1 className=" ">
          <img src={logoimage} alt="" className="max-sm:w-[50px] rounded-[50px] max-lg:w-[60px]" />
         </h1>
         {/* <span>{<FaCode/>} </span> */}
        </div>
        <div className="group">
        <ul 
           className=" max-sm:hidden max-lg:hidden flex  justify-between gap-10 text-[20px] ">
          <Link 
             to="#Home" spy={true} smooth={true} offset={50} duration={500}>
             Home
          </Link>
          <Link 
            to="#About" spy={true} smooth={true} offset={50} duration={500}> 
            <li>About</li>
          </Link>
          <Link to="/#Services" spy={true} smooth={true} offset={50} duration={500}>
            <li>Services</li>  
          </Link>
          <Link to="/#Portfolio" spy={true} smooth={true} offset={50} duration={500}>
            <li>Portfolio</li>
          </Link>
          <Link to="/#Myexperince" spy={true} smooth={true} offset={50} duration={500}>
            <li className="">Experience</li> 
          </Link>
          <Link to="/#Contact" spy={true} smooth={true} offset={50} duration={500}>
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
          <div className=" w-full flex items-center px-[70%] ">
            <ul className="flex max-sm:flex-col max-lg:flex-col gap-2 px-5 text-[15px]  text-[#f5f6f6] max-sm:mt-[80px] max-lg:mt-[120px]">
              <Link to="/#home" spy={true} smooth={true} offset={50} duration={500}>
                Home
              </Link>
              <Link to="#About" spy={true} smooth={true} offset={50} duration={500}>
                About
              </Link>
              <Link to="/#Services" spy={true} smooth={true} offset={50} duration={500}>
                Services
              </Link>
              <Link to="/#Portfolio" spy={true} smooth={true} offset={50} duration={500}>
                Portfolio
              </Link>
              <Link to="/#Myexperince" spy={true} smooth={true} offset={50} duration={500}>
                Experience
              </Link>
              <Link to="/#Contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </ul>
          </div>
        )}
    </div>
  )
}
