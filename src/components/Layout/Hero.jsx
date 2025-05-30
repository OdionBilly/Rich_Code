import myimage from '../../assets/my.jpeg'

export const Hero = () => {
  return (
    <div id='Home' className="bg-[#020617] xl:py-[80px] max-lg:py-[80px]  ">
        <div className='flex max-sm:flex-col mb-[0.5px] xl:mt-[100px] max-sm:py-1 max-lg:py-10'>
            <div className="w-[466px] xl:pt-[150px] text-[#6B7280] xl:mx-[158px] max-sm:mx-10 max-lg:mx-10 xl:py-[50px]">
               <h2 className="text-[16px] font-thin py-2 text-[yellow] max-sm:ml-[100px]">Hello Welcome</h2>
               <h1 className="text-[20px] py-2 text-[#fff] ">I AM ODION BILLY EfIONAYI </h1> 
               <p className="py-2 pb-10  max-sm:w-[320px]">A frontend developer who is passionate about creating dynamic and responsive web applications.
                 I have experience working with modern frameworks and libraries such as React, Tailwind, and Bootstrap
                . I am always eager to learn new technologies and improve my skills.
               </p>
                <button type="button" className="px-4 py-1 text-[#000000] bg-[yellow] hover:bg-[#3899af]">
                    Contact Me
                </button>
            </div>
            <div className='mb-10 w-[500px] max-sm:px-5 max-sm:mt-10'>
             <img src={myimage} alt="" className='Xl:w-[400px] max-lg:w-[330px] max-sm:w-[350px] xl:ml-[100px] rounded-lg'/>  
            </div>
        </div>
    </div>
  )
}
