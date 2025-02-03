// import React from 'react'



export const Contact = () => {
  return (
    <div id="Contact" className="bg-[#020617] text-[#6ec4ce] xl:py-[150px] xl:px-[80px]">
      <div className="text-center">
        <h1 className="text-white text-[25px] font-bold">CONTACT <span className="text-[yellow]">ME</span></h1>
        <p className="text-white py-5">Feel free to contact me for any inquiries or collaborations</p>
      </div>
      <div className="flex max-sm:flex-col justify-between xl:pt-[100px]">
        <div className="py-10 text-white">
          <p> <span className="text-[yellow]">Address _ </span> Nairobi, Kenya </p>
          <p className="py-7"> <span className="text-[yellow]">phone _ </span> +254717444530 </p>
          <p> <span className="text-[yellow]">Email _ </span> odionfiona@gmail.com </p>
          <p className="py-7"> <span className="text-[yellow]">website _ </span> odionfiona@gmail.com </p>
        </div>
        {/* forms */}
        <div className=" w-[450px] ">
            <div className="">
              <input type="text" name="" id=""placeholder="Name"
               className="h-10 bg-[#1F2937] px-5" />
            </div>
            <div className="py-5 ">
               <input type="text" name="" id=""placeholder="Message"
               className="w-[400px] h-[150px] bg-[#1F2937] px-5 pt-[-70px]" /> 
            </div>
            <div className=" ">
              <button className="px-4 py-2 text-[#000000] hover:bg-[#3899af] bg-[yellow]">Contact Me</button>
            </div>
        </div>
      </div>
    </div>
  )
}
