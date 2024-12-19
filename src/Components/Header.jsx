import { useRef, useState,useEffect } from "react";
import light from "../assets/headerImg/Group 2.svg";
import dark from "../assets/headerImg/night.svg";
import HutchDropdown from "./HutchDropdown";
import ServiceDropdown from "./ServiceDropdown";
import PopUpMenu from "../Components/Menu";
import LoungeDropdown from "./LoungeDropdown";
import PortfolioDropdown from "./PortfolioDropdown";
import darkPR from '../assets/headerImg/darkPR.svg'
import lightPR from '../assets/headerImg/lightPR.svg'

const Header = ({lightMode ,setLightMode}) => {
  const [hutchVisible, setHutchVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [loungeVisible, setLoungeVisible] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
 
  const [popupVisible, setPopupVisible] = useState(false);

  const menuRef=useRef();

  const toggleMenu= () => {
    setPopupVisible(!popupVisible);
  };
  useEffect(() => {
    if (popupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupVisible]);

  const handleClickOutside = (event) => {
    if (menuRef.current==event.target) {
      setPopupVisible(false);
    }
  };

  function lightModeHandler() {
    !lightMode ? setLightMode(true) : setLightMode(false);
  }
  return (
    <div className="w-full mx-auto flex ">
      <div className={`z-50  fixed  top-0 transition-all ease-in-out duration-200 w-full      `}>
        <div className={`flex justify-between w-full backdrop-blur-md ${!lightMode?"bg-gray-50":"bg-gray-500"} bg-opacity-70 px-4 md:px-10 lg:px-[7.5%]  2xl:px-52 mx-auto  items-center `} >
          <div>
            <h2 className="text-2xl font-semibold font-['Revelstoke'] ">Paper Rabbit</h2>
          </div>
          <ul className="w-[700px] hidden lg:flex justify-evenly items-center text-xs md:gap-4 lg:gap-8 font-['Inter-Regular'] ">
            <li className="cursor-pointer py-2"><a href="/">Home</a></li>
            <li
              className="cursor-pointer h-[48px] flex items-center"
              onMouseEnter={()=>{setHutchVisible(true)}} onMouseLeave={()=>{setHutchVisible(false)}}
            >
              Hutch
            </li>
            <li
              className="cursor-pointer h-[48px] flex items-center"
              onMouseEnter={() => {setServiceVisible(true) }}
              onMouseLeave={() => setServiceVisible(false)}
            >
              Services
            </li>
            <li
              onMouseEnter={() => setPortfolioVisible(true)}
              onMouseLeave={() => setPortfolioVisible(false)}
              className="cursor-pointer  h-[48px] flex items-center"
            >
              Portfolio
            </li>
            <li
              onMouseEnter={() => setLoungeVisible(true)}
              onMouseLeave={() => setLoungeVisible(false)}
              className="cursor-pointer h-[48px] flex items-center"
            >
              Lounge
            </li>
            <li className="cursor-pointer py-2  h-[48px] flex items-center">About</li>
            <li className="cursor-pointer py-2  h-[48px] flex items-center">Careers</li>
            <li className="cursor-pointer py-2  h-[48px] flex items-center">Store</li>
            <li className="cursor-pointer py-2  h-[48px] flex items-center">World</li>
            <li className="cursor-pointer py-2  h-[48px] flex items-center">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-4 lg:gap-6">
            {lightMode ? (
              <img
                className="w-10 h-full"
                src={dark}
                alt="darkmode"
                onClick={()=>{lightModeHandler()}}
              />
            ) : (
              <img
                className="w-10 h-full"
                src={light}
                alt="darkmode"
                onClick={()=>{lightModeHandler()}}
              />
            )}

            <div className="rounded-full cursor-pointer font-semibold h-8 flex items-center justify-center " onClick={()=>{toggleMenu()}}>
              <img src={lightMode?(lightPR):(darkPR)}  className="w-[38px] md:w-10"  alt="" />
            </div>
          </div>
        </div>
        <div className="z-50 w-screen transition-all ease-in-out duration-800 ">
          {hutchVisible ? <HutchDropdown setHutchVisible={setHutchVisible} lightMode={lightMode}/> : null}
          {serviceVisible ? <ServiceDropdown setServiceVisible={setServiceVisible} lightMode={lightMode}/> : null}
          {loungeVisible ? <LoungeDropdown  setLoungeVisible={setLoungeVisible} lightMode={lightMode}/> : null}
          {portfolioVisible ? <PortfolioDropdown setPortfolioVisible={setPortfolioVisible} lightMode={lightMode}/> : null}
        </div>
      </div>

      {/* Popup Menu Section */}
      <div
        className={`popup-section w-full h-screen absolute z-50 top-0 flex items-center justify-center ${
          popupVisible ? "visible" : "invisible"
        } dark:bg-black dark:bg-opacity-5 backdrop-blur-md dark:backdrop-blur-sm bg-opacity-5 ${lightMode?"text-black":"text-black bg-black bg-opacity-30"}`}
        ref={menuRef}
      >
        <PopUpMenu lightMode={lightMode} setLightMode={setLightMode}/>
      </div>
    </div>
  );
};

export default Header;
