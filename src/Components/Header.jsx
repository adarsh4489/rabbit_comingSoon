import { useRef, useState,useEffect } from "react";
import light from "../assets/headerImg/Group 2.svg";
import dark from "../assets/headerImg/night.svg";
import HutchDropdown from "./HutchDropdown";
import ServiceDropdown from "./ServiceDropdown";
import PopUpMenu from "../Components/Menu";
import LoungeDropdown from "./LoungeDropdown";
import PortfolioDropdown from "./PortfolioDropdown";

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
    <div>
      <div className="dark:text-white z-50  fixed justify-between top-0 transition-all ease-in-out duration-200 w-full backdrop-blur-sm ">
        <div className="flex justify-between w-full bg-gray-50 bg-opacity-70 lg:px-8 px-6 py-2 items-center" >
          <div>
            <h2 className="text-xl font-semibold ">Paper Rabbit</h2>
          </div>
          <ul className=" hidden lg:flex justify-evenly text-sm gap-6 ">
            <li className="cursor-pointer"><a href="/">Home</a></li>
            <li
              className="cursor-pointer"
              onMouseEnter={() => setHutchVisible(true)}
              onMouseLeave={() => setHutchVisible(false)}
            >
              Hutch
            </li>
            <li
              className="cursor-pointer"
              onMouseEnter={() => setServiceVisible(true)}
              onMouseLeave={() => setServiceVisible(false)}
            >
              Services
            </li>
            <li
              onMouseEnter={() => setPortfolioVisible(true)}
              onMouseLeave={() => setPortfolioVisible(false)}
              className="cursor-pointer"
            >
              Portfolio
            </li>
            <li
              onMouseEnter={() => setLoungeVisible(true)}
              onMouseLeave={() => setLoungeVisible(false)}
              className="cursor-pointer"
            >
              Lounge
            </li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Store</li>
            <li className="cursor-pointer">World</li>
            <li className="cursor-pointer">
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

            <div className="bg-black text-white rounded-full cursor-pointer font-semibold h-8 flex items-center justify-center w-8" onClick={()=>{toggleMenu()}}>PR</div>
          </div>
        </div>
        <div className="z-50 w-full transition-all ease-in-out duration-600">
          {hutchVisible ? <HutchDropdown/> : null}
          {serviceVisible ? <ServiceDropdown/> : null}
          {loungeVisible ? <LoungeDropdown /> : null}
          {portfolioVisible ? <PortfolioDropdown /> : null}
        </div>
      </div>

      {/* Popup Menu Section */}
      <div
        className={`popup-section w-full h-screen absolute z-50 top-0 flex items-center justify-center ${
          popupVisible ? "visible" : "invisible"
        } dark:bg-black dark:bg-opacity-5 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-5 ${lightMode?"text-black":"text-black bg-black bg-opacity-30"}`}
        ref={menuRef}
      >
        <PopUpMenu />
      </div>
    </div>
  );
};

export default Header;
