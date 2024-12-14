
import { FaInstagramSquare,FaFacebook,FaGithub,FaLinkedin,FaYoutube,FaPinterest,FaUser } from "react-icons/fa";

const Menu = () => {
  return (
    
        <div className='w-[20%] z-50 menu-container flex flex-col gap-1 items-center justify-center text-center '>
            <div className='w-full bg-white rounded-t-3xl py-2'><a href="/">Home</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Hutch</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Services</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Portfolio</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Lounge</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">About Us</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Careers</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Store</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">World</a></div>
            <div className='bg-white w-full py-2 hover:bg-gray-200'><a href="">Contact Us </a></div>
            <div className='bg-white w-full py-2 flex justify-center gap-10 hover:bg-gray-200'><a href="">Client Login</a>
            <span className="cursor-pointer hover:scale-110"><FaUser/></span>
            </div>
            <div className='rounded-b-3xl w-full py-3 hover:bg-gray-200 bg-white flex   text-xl justify-between px-6 items-center'>
            <span className="cursor-pointer hover:scale-110"><FaInstagramSquare/></span>
    <span className="cursor-pointer hover:scale-110"><FaFacebook/></span>
    <span className="cursor-pointer hover:scale-110"><FaGithub/></span>
    <span className="cursor-pointer hover:scale-110"><FaLinkedin/></span>
    <span className="cursor-pointer hover:scale-110"><FaPinterest/></span>
    <span className="cursor-pointer hover:scale-110"><FaYoutube/></span>
            </div>

    </div>
  )
}

export default Menu