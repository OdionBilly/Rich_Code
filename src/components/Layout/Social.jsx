import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub,FaTwitter } from "react-icons/fa"

export const Social = () => {
  return (
    <div className="bg-[#020617] text-center text-[#1F2937] py-10 ">
        <h1 className="text-[25px] text-[#fff]">MY SOCIAL <span className="text-[yellow]">HANDLES</span> </h1>
        <p className="text-[#fff]">Feel free to reach out to me on my social media handles</p>
        <div className="flex justify-center gap-10 py-10 ">
            <p className="hover:bg-[yellow] text-[20px] cursor-pointer "><FiFacebook/></p>
            <p className="hover:bg-[yellow] text-[20px] cursor-pointer "><FaInstagram/></p>
            <p className="hover:bg-[yellow] text-[20px] cursor-pointer "><FaLinkedin/></p>
            <p className="hover:bg-[yellow] text-[20px] cursor-pointer "><FaGithub/></p>
            <p className="hover:bg-[yellow] text-[20px] cursor-pointer "><FaTwitter/></p>
        </div>

         
    </div>
  )
}

