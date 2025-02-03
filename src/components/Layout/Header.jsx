// import React from 'react'

import Nav from "./Nav"

export const Header = () => {
  return (
    <div>
      <header className= " bg-[#020617] flex justify-between text-white max-sm:py-10 max-sm:px-5 xl:px-40 xl:py-10">
        <h1>My Portfolio</h1>
        <div>
          <Nav/>
        </div>
      </header>
    </div>
  )
}
