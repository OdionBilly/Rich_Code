// import React from 'react'

import { HashLink as Link } from "react-router-hash-link"
import { MdMenu } from "react-icons/md";


const Nav = () => {
  return (
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
        <div>
          <MdMenu className="xl:hidden text-[#f5f6f6] cursor-pointer text-[40px]"/>
        </div>
    </div>
  )
}

export default Nav
