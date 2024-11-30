import React from "react";
import UpdatingModal from "../Components/UpdatingModal";
import BannerCard from "../Components/BannerCard";
import HutchDropdown from "../Components/HutchDropdown";
import day1 from "../assets/bannerimgs/day/1.rabbit.jpg";
import arrowLeft from "../assets/bannerimgs/left arrow.svg";
import arrowRight from "../assets/bannerimgs/right arrow.svg";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Banner = () => {
  // const images_day = [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12]
  // const images_dark = [dark1, dark2, dark3, dark4, dark5, dark6, dark7, dark8, dark9, dark10, dark11, dark12]

  return (
    <div className="w-full h-full relative ">
      {/* <HutchDropdown /> */}
      <div className="w-full h-screen animate relative flex flex-col items-center justify-end  overflow-hidden">
        <div className="w-full h-screen absolute overflow-hidden">
          <img
            className="absolute top-0 left-0 right-0  w-[100%] h-screen object-cover  "
            src={day1}
            alt="bannerimage"
          />
        </div>
        <BannerCard />

        <button className="absolute top-1/2 left-20">
          <img
            src={arrowLeft}
            alt="left arrow icon "
            className="w-8 h-8 image-rendering-crisp-edges"
          />
        </button>
        <button className="absolute top-1/2 right-20">
          <img src={arrowRight} alt="right arrow icon" className="w-8 h-8" />
        </button>
        {/* <div className='absolute top-1/3 left-1/3 w-full h-full'> <UpdatingModal/></div> */}
      </div>
    </div>
  );
};

export default Banner;
