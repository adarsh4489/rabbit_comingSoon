import React, { useState } from "react";
import light from "../assets/headerImg/Group 2.svg";
import dark from "../assets/headerImg/night.svg";
import HutchDropdown from "./HutchDropdown";
import ServiceDropdown from "./ServiceDropdown"



const Header = () => {

  const [hutchVisible,setHutchVisible]=useState(false);
  const[serviceVisible,setServiceVisivle]=useState(false)
  const [lightMode,setLightmode]=useState(true);


  function lightModeHandler()
  {
lightMode?setLightmode(false):setLightmode(true);
  }
  return (
    <div className=" w-full fixed z-10 bg-gray-50 bg-opacity-20 border-b-yellow-500 border-[1px] backdrop-blur-sm py-2 flex items-center  justify-evenly px-4">
      <div className="w-[10%] text-xl font-bold">Paper Rabbit</div>
      <div className=" w-[60%] text-sm  navlinks flex text-gray-800 items-center justify-evenly gap-6">
        <span>Home</span>
        <span className="relative " onMouseEnter={()=>setHutchVisible(true)} onMouseLeave={()=>setHutchVisible(false)}>Hutch</span>
        {hutchVisible?<HutchDropdown/>:null}
        <span className="" onMouseEnter={()=>setServiceVisivle(true)} onMouseLeave={()=>setServiceVisivle(false)}> Services </span>
        {
          serviceVisible?<ServiceDropdown/>:null
        }

        <span>Portfolio</span>
        <span>Lounge</span>
        <span>About us</span>
        <span>Careers</span>
        <span>Store</span>
        <span>World</span>
        <span>ContactUs</span>
      </div>

      <div className="w-[10%] flex justify-around items-center">
      {lightMode? (<img src={light} alt="day icon" className="" onClick={lightModeHandler} />):
      (<img src={dark} alt="dark mode icon" onClick={lightModeHandler}/>
      )}
        <div className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center  font-semibold">
          PR
        </div>
      </div>
    </div>
  );
};

export default Header;
