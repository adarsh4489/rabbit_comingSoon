import React from "react";

const title = [
  "CREATIVE",
  "ROAR",
  "SMART",
  "OOFY",
  "STRONG",
  "INFLUENCE",
  "BREATH",
  "CONSISTENT",
  "AGE",
  "FLY",
  "COMMIT",
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

const hashtag = [
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

const BannerCard = () => {
  return (
    <div className="bg-white z-10 bg-opacity-20 backdrop-blur-2xl w-[38%] absolute left-[20%] flex flex-col justify-center  text rounded-xl top-[40%]  gap-2 px-4 py-4">
      <h4 className="text-3xl font-['katibeh']">What Makes You</h4>
      <h2 className="text-4xl font-['Revelstoke']">{title[0]} !</h2>

      <p className="font-[Inter] md:text-xs lg:text-sm">{description[0]}</p>
      <h3 className="hashtag text-lg font-['Heaven']">
        {hashtag[0]}
      </h3>
      <button className="w-1/3 bg-gray-800 text-white px-2 py-2 rounded-xl ">
        {ctaButton[0]}
      </button>
    </div>
  );
};

export default BannerCard;
