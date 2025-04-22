// import React from 'react';
import Aboutimage from '../../assets/tech pics.jpg';

const About = () => {
    return (
        <div id='About' className="bg-[#020617] flex max-xl:flex-col max-lg:gap-10 max-sm:flex-col-reverse  max-sm:gap-10 p-2 xl:py-20 max-sm:py-10 xl:pt-[129px] max-sm:pt-10">
            <img src={Aboutimage} alt="" className='w-[850px] xl:h-[650px] max-lg:px-5' />
            <div className=' xl:w-1/3  xl:mx-[60px] max-lg:px-5 max-sm:px-4 xl:mt-[10px] max-lg:pb-10' >
               <h1 className="text-4xl font-bold py-5 mx-[10px] pt-10 text-white max-sm:text-center "> ABOUT <span className='text-[Yellow]'>ME</span> </h1>

               <div className='pt-10 text-[#6B7280] pb-10 max-sm:text-center'>
               <p>
                   Hello! I'm a passionate web developer with a love for creating dynamic and responsive web applications. 
                   With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing ideas to life in the browser.
                </p>
               <p>
                   I have experience working with modern frameworks and libraries such as React. 
                   I am always eager to learn new technologies and improve my skills.
              </p>
               <p>
                    When I'm not coding, you can find me exploring new places, reading tech blogs, or working on open-source projects.
               </p>
               <p>
                     Feel free to reach out if you would like to collaborate on a project or just want to chat about web development!
               </p>
               </div>

               <button type="button" className="px-4 py-1 text-[#000000] bg-[yellow] hover:bg-[#3899af]">
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default About;