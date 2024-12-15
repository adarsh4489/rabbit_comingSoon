// import React from "react";
// import UpdatingModal from "../Components/UpdatingModal";
// import BannerCard from "../Components/BannerCard";
// import day1 from "../assets/bannerimgs/day/1.rabbit.jpg";
// import arrowLeft from "../assets/bannerimgs/left arrow.svg";
// import arrowRight from "../assets/bannerimgs/right arrow.svg";
// import { Carousel } from "flowbite-react";

// const Banner = () => {
//   // const images_day = [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12]
//   // const images_dark = [dark1, dark2, dark3, dark4, dark5, dark6, dark7, dark8, dark9, dark10, dark11, dark12]

//   return (
//     <div className="w-full h-full relative ">

//       <div className="w-full h-screen animate relative flex flex-col items-center justify-end  overflow-hidden">
//         <div className="w-full h-screen absolute overflow-hidden">
//           <img
//             className="absolute top-0 left-0 right-0  w-[100%] h-screen object-cover  "
//             src={day1}
//             alt="bannerimage"
//           />
//         </div>
//         <BannerCard />

//         <button className="absolute top-1/2 left-20">
//           <img
//             src={arrowLeft}
//             alt="left arrow icon "
//             className="w-8 h-8 image-rendering-crisp-edges"
//           />
//         </button>
//         <button className="absolute top-1/2 right-20">
//           <img src={arrowRight} alt="right arrow icon" className="w-8 h-8" />
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Banner;

import { useState, useRef, useEffect } from "react";
import Hutch from "../Components/HutchDropdown.jsx";

import day1 from "../assets/bannerimgs/day/1.rabbit.jpg";
import day2 from "../assets/bannerimgs/day/2.lion.jpg";
import day3 from "../assets/bannerimgs/day/3.fox.jpg";
import day4 from "../assets/bannerimgs/day/4.elephant.jpg";
import day5 from "../assets/bannerimgs/day/5.bull.jpg";
import day6 from "../assets/bannerimgs/day/6.butterfly.jpg";
import day7 from "../assets/bannerimgs/day/7.whale.jpg";
import day8 from "../assets/bannerimgs/day/8.horse.jpg";
import day9 from "../assets/bannerimgs/day/9.tortoise.jpg";
import day10 from "../assets/bannerimgs/day/10.flacon.jpg";
import day11 from "../assets/bannerimgs/day/11.flamingo.jpg";
import day12 from "../assets/bannerimgs/day/12.we.jpg";

import dark1 from "../assets/bannerimgs/night/1.rabbit.jpg";
import dark2 from "../assets/bannerimgs/night/2.lion.jpg";
import dark3 from "../assets/bannerimgs/night/3.fox.jpg";
import dark4 from "../assets/bannerimgs/night/4.elephant.jpg";
import dark5 from "../assets/bannerimgs/night/5.bull.jpg";
import dark6 from "../assets/bannerimgs/night/6.butterfly.jpg";
import dark7 from "../assets/bannerimgs/night/7.whale.jpg";
import dark8 from "../assets/bannerimgs/night/8.horse.jpg";
import dark9 from "../assets/bannerimgs/night/9.tortoise.jpg";
import dark10 from "../assets/bannerimgs/night/10.flacon.jpg";
import dark11 from "../assets/bannerimgs/night/11.flamingo.jpg";
import dark12 from "../assets/bannerimgs/night/12.we.jpg";
import BannerCard from "../Components/BannerCard.jsx";

import arrowleft from "../assets/bannerimgs/left arrow.svg";
import arrowright from "../assets/bannerimgs/right arrow.svg";

import { useGSAP } from "@gsap/react";
// import { FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
import gsap from "gsap";
// import { AppContext } from '../../context/Appcontext';
// import { Navigate } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

function Banner({lightMode}) {
  const [autoSlide, setAutoSlide] = useState(true);
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        navigateNext();
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [autoSlide]);

  const handleAutoSlideToggle = () => {
    setAutoSlide((prevAutoSlide) => !prevAutoSlide);
  };

  const images_day = [
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
    day8,
    day9,
    day10,
    day11,
    day12,
  ];
  const images_dark = [
    dark1,
    dark2,
    dark3,
    dark4,
    dark5,
    dark6,
    dark7,
    dark8,
    dark9,
    dark10,
    dark11,
    dark12,
  ];

  const title = [
    "Creative",
    "Roar",
    "Smart",
    "Oofy",
    "Strong",
    "Influence",
    "Breathe",
    "Consistent",
    "Age",
    "Fly",
    "Commit",
  ];
  const description = [
    "We, the rabbits at our Hutch, foster a dynamic business environment. We bring clarity and understanding, eliminating confusion and nurturing productivity. Turning your dreams into reality, we streamline the path to success with innovation and focus.",
    "Like lions, we embody power, resilience, and confidence, overcoming challenges boldly. With pride and determination, we lead the way to triumph, creating an impact that resonates. Every step exudes strength, ensuring victory for all who follow our path.",
    "With sharp intelligence and adaptability, we navigate challenges with strategic finesse. Our brand represents wit and calculated precision, making a lasting impression. Every step showcases ingenuity and leadership, setting us apart as a beacon of success in a dynamic landscape.",
    "Grounded in principles, we embody reliability and wisdom. Like a majestic creature, we ensure stability and loyalty, helping your brand stand tall and leave a lasting impact. Our dedication creates enduring success for partners and clients alike.",
    "With optimism and determination, we seize opportunities and charge ahead. Rooted in steadfast convictions, we inspire confidence and trust. Our unwavering strength reflects our commitment to helping you succeed with tenacity and spirit.",
    "Like a butterfly, we embody transformation and growth. With innovation and vibrancy, we inspire positive change, enabling others to evolve and thrive. Our brand embraces renewal, bringing creativity and endless possibilities to life.",
    "We bring calm and clarity to your business like a whale exhaling tension. Embracing tranquility, we create space for inspiration, helping brands sustain and thrive in the dynamic industry landscape with composure and focus.",
    "Like a horse, we ensure steady growth and resilience. Our brand embodies unwavering commitment, delivering quality and integrity every time. Trust us to guide you with precision and reliability, no matter the challenges ahead.",
    "“Ageing like fine wine” applies to your company, too! Our approach instills patience and wisdom, providing a solid foundation for steady growth and enduring progress. Thus, we build a legacy of success.",
    "Like eagles, we soar confidently, navigating challenges with focus and sharp instincts. Our vision and determination elevate businesses to new heights, inspiring trust and successfully guiding them to explore greater horizons. ",
    "We emulate the crane’s precision and purpose, ensuring meticulous execution in every project. Committed to growth and success, we support and guide clients to ascend to greater heights through dedication and excellence.",
  ];

  const hastag = [
    "# think creative",
    "# roar loudly",
    "# move smartly",
    "# stay oofy",
    "# be strong",
    "# influence positively",
    "# breathe calmly",
    "# stay consistent",
    "# age gracefully",
    "# fly high",
    "# commit sincerely",
  ];

  const ctaButton = [
    "Let’s Make Art",
    "Let's Make Sound",
    "Let's Make Move",
    "Let's Make Mark",
    "Let's Make Spirit",
    "Let's Make Wings",
    "Let's Make Air",
    "Let's Make Speed",
    "Let's Make Wisdom",
    "Let's Make Eye",
    "Let's Make Stillness",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(0);

  const navigateNext = () => {
    setCurrentIndex((preIndex) =>
      preIndex === images_day.length - 1 ? 0 : preIndex + 1
    );
    // setAnimateRight(!animateRight)
    setAnimate(!animate);
  };
  const navigatePrevious = () => {
    setCurrentIndex((preIndex) =>
      preIndex === 0 ? images_day.length - 1 : preIndex - 1
    );
    // setAnimateRight(!animateRight)
    setAnimate(!animate);
  };

  const image = useRef();

  useGSAP(() => {
    gsap.from(image.current, {
      ease: "back",
      y: "-200",
      duration: 1,
      yoyo: true,
      autoAlpha: 0,
    });
  }, [animate]);

// return(
//   <>
//   <div className="carousel w-full">
//   <div id="item1" className="carousel-item w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//       className="w-full" />
//   </div>
//   <div id="item2" className="carousel-item w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//       className="w-full" />
//   </div>
//   <div id="item3" className="carousel-item w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//       className="w-full" />
//   </div>
//   <div id="item4" className="carousel-item w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//       className="w-full" />
//   </div>
// </div>
// <div className="flex w-full justify-center gap-2 py-2">
//   <a href="#item1" className="btn btn-xs">1</a>
//   <a href="#item2" className="btn btn-xs">2</a>
//   <a href="#item3" className="btn btn-xs">3</a>
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>
//   </>
// )


  return (

    <div className="w-full z-0 overflow-hidden relative">
      <div className="w-full z-0 h-screen">
        <img
          className="h-full w-full"
          src={lightMode ? images_dark[currentIndex] : images_day[currentIndex]}
          alt="bannerimage"
          ref={image}
        />
      </div>

      {currentIndex !== 11 ? (
        currentIndex % 2 === 0 ? (
          <div className="w-[95%] md:w-[60%] lg:w-2/5  absolute backdrop-blur-xl flex flex-col gap-2 top-48 left-2 sm:left-4 md:left-32 rounded-xl px-4 py-6">
            <h3 className="text-lg md:text-xl">What Makes You </h3>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{title[currentIndex]}!</h2>
            <p className="text-xs lg:text-sm xl:text-base ">{description[currentIndex]}</p>

            <h2 className="text-lg md:text-xl">{hastag[currentIndex]}</h2>

            <button className="bg-black text-white w-[60%] md:w-[40%] px-2 py-2 text-sm rounded-xl">
              <a href="tel:+919900149537">{ctaButton[currentIndex]}</a>
            </button>
          </div>
        ) : (
          <div className="w-[95%] md:w-[60%] lg:w-2/5 absolute backdrop-blur-xl flex flex-col gap-2 top-48  md:right-32 rounded-xl px-4 py-4">
            <h3 className="text-xl ">What Makes You </h3>
            <h2 className="text-3xl font-semibold">{title[currentIndex]}!</h2>
            <p className="text-xs lg:text-sm xl:text-base">{description[currentIndex]}</p>

            <h2 className="text-xl">{hastag[currentIndex]}</h2>

            <button className="bg-black text-white w-[40%] px-2 py-2 text-sm rounded-xl">
              <a href="tel:+919900149537">{ctaButton[currentIndex]}</a>
            </button>
          </div>
        )
      ) : null}

      <button onClick={navigatePrevious} className="absolute top-1/2 left-[5%] ">
        <img className="w-10 backdrop-blur-sm  " src={arrowleft} alt="" />
      </button>
      <button onClick={navigateNext} className="absolute top-1/2 right-[5%]">
        <img className="w-10  backdrop-blur-sm" src={arrowright} alt="" />
      </button>
    </div>
  );
}

export default Banner;
