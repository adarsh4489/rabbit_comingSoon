import dark from "../assets/headerImg/night.svg"
import light from "../assets/headerImg/Group 2.svg"
import { FaInstagramSquare,FaFacebook,FaGithub,FaLinkedin,FaYoutube,FaPinterest,FaUser } from "react-icons/fa";

const Menu = ({lightMode,setLightMode}) => {
  return (
    
        <div className='w-[80%] md:w-[40%] lg:w-[18%] z-50 menu-container flex flex-col gap-[2px] items-center justify-center text-center '>
          <div className={`${!lightMode?"text-black":"text-white"} "text-lg font-semibold my-2"`}>Paper Rabbit</div>
            <div className='w-full bg-[#fbfbfb] rounded-t-3xl py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="/">Home</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Hutch</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Services</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Portfolio</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Lounge</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">About Us</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Careers</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Store</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">World</a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 bg-opacity-40 hover:bg-gray-100'><a href="">Contact Us </a></div>
            <div className='bg-[#fbfbfb] w-full py-1 lg:py-2 flex justify-center gap-10 bg-opacity-40 hover:bg-gray-100 relative'><a href="">Client Login</a>
            <span className="absolute right-5 top-2 cursor-pointer hover:scale-110"><FaUser/></span>
            </div>
            <div className='rounded-b-3xl w-full py-3 bg-opacity-40 hover:bg-gray-100 bg-[#fbfbfb] flex   text-xl justify-between px-6 items-center'>
            <span className="cursor-pointer hover:scale-110"><FaInstagramSquare/></span>
    <span className="cursor-pointer hover:scale-110"><FaFacebook/></span>
    <span className="cursor-pointer hover:scale-110"><FaGithub/></span>
    <span className="cursor-pointer hover:scale-110"><FaLinkedin/></span>
    <span className="cursor-pointer hover:scale-110"><FaPinterest/></span>
    <span className="cursor-pointer hover:scale-110"><FaYoutube/></span>
            </div>
            <div className="flex items-center justify-center pt-2">
            {lightMode ? (
              <img
                className="w-10 h-full"
                src={dark}
                alt="darkmode"
                onClick={()=>{setLightMode(!lightMode)}}
              />
            ) : (
              <img
                className="w-10 h-full"
                src={light}
                alt="darkmode"
                onClick={()=>{setLightMode(!lightMode)}}
              />
            )}

          </div>

    </div>
  )
}

export default Menu