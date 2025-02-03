// import React from 'react'

import { HashLink as Link } from "react-router-hash-link"


const Nav = () => {
  return (
    <div>
        <ul className=" max-sm:hidden flex  justify-between  gap-10 text-[20px] ">
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
    </div>
  )
}

export default Nav
