// import React from 'react'
import { HashLink as Link } from "react-router-hash-link"
import { MdMenu,MdOutlineClose } from "react-icons/md";
import { useState } from "react";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div> 
    <div> 
        <ul className=" max-sm:hidden max-lg:hidden flex  justify-between align-baseline items-center gap-10 text-[20px] ">
          <Link to="/#home">
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
     {/* mobile menu */}
     {/* {isOpen && (
          <div className="bg-[#232b10]  top-[50px] left-0 w-full flex items-center">
            <ul className="flex px-1 text-[15px] text-[#f5f6f6] mt-[50px]">
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
        )} */}
    </div>
  )
}

export default Nav
