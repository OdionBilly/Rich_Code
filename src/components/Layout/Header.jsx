// import React from 'react'
import { FaCode } from "react-icons/fa";

import Nav from "./Nav"

export const Header = () => {
  return (
    <div>
      <header className="fixed bg-[#020617] flex justify-between text-white max-sm:py-10 max-sm:px-5 xl:px-40 xl:py-10 w-full">
        <h1 className="text-[40px]">{<FaCode/>}</h1>
        <div>
          <Nav/>
        </div>
      </header>
    </div>
  )
}
