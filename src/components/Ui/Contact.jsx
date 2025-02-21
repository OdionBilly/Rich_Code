// import React from 'react'



export const Contact = () => {
  return (
    <div id="Contact" className="bg-[#020617] text-[#6ec4ce] xl:py-[150px] max-sm:py-10 max-lg:py-10 xl:px-[80px]">
      <div className="text-center py-10">
        <h1 className="text-white text-[25px] font-bold ">CONTACT <span className="text-[yellow]">ME</span></h1>
        <p className="text-white py-5">Feel free to contact me for any inquiries or collaborations</p>
      </div>
      <div className="flex max-sm:flex-col max-lg:flex-col justify-between max-lg:px-10  xl:pt-[100px]">
        <div className="py-10 text-white max-sm:px-0">
          <p> <span className="text-[yellow]">Address _ </span> Nairobi, Kenya </p>
          <p className="py-7"> <span className="text-[yellow]">phone _ </span> +254717444530 </p>
          <p> <span className="text-[yellow]">Email _ </span> odionfiona@gmail.com </p>
          <p className="py-7"> <span className="text-[yellow]">website _ </span>....</p>
        </div>
        {/* forms */}
        <div className=" w-[450px] max-sm:px-0 ">
            <div className="">
              <input type="text" name="" id=""placeholder="Name"
               className="h-10 bg-[#1F2937] px-2" />
            </div>
            <div className="py-5">
               <textarea  name="" id=""placeholder="Message" className="h-20 bg-[#1F2937] xl:w-[380px] max-sm:w-[328px] px-2 pt-2">

               </textarea>
            </div>
            <div className=" ">
              <button className="px-4 py-1 text-[#000000] hover:bg-[#3899af] bg-[yellow]">Contact Me</button>
            </div>
        </div>
      </div>
    </div>
  )
}
