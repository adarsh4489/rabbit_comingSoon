const LoungeDropdown = () => {
    return (
      <div className="w-full h-screen z-50 backdrop-blur-sm">
        <div className="w-full h-[270px] z-50 gap-4 bg-opacity-70   bg-gray-50">
          <div className="absolute left-[22.5%] lg:left-[24.1%] top-[10%] lg:w-[58rem] flex justify-start items-start gap-[7rem]">
            {/* First Column */}
            <div className="relative flex flex-col items-start justify-start mx-5 mac:mx-8 gap-2">
              <div className="text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter-Regular'] leading-none">Lounge</div>
              <div className="flex flex-col mt-4">
                {/* Blog Section */}
                <span className="text-xs font-thin text-black dark:text-white mb-[-0.3rem]">New</span>
                <div className="text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal">Blog</div>
                {/* Articles Section */}
                <div className="flex flex-col">
                  <span className="text-xs font-thin text-black dark:text-white mb-[-0.3rem]">New</span>
                  <div className="text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal">Articles</div>
                </div>
                {/* Casestudy Section */}
                <div className="flex flex-col">
                  <span className="text-xs font-thin text-black dark:text-white mb-[-0.3rem]">New</span>
                  <div className="text-black dark:text-white text-sm font-['Inter-Regular'] leading-normal">Casestudy</div>
                </div>
                {/* Insights Section */}
                <div className="flex flex-col">
                  <span className="text-xs font-thin text-black dark:text-white mb-[-0.3rem]">New</span>
                  <div className="text-black dark:text-white text-sm font-['Inter-Regular'] leading-normal">Insights</div>
                </div>
                {/* Podcasts Section */}
                <div className="flex flex-col">
                  <span className="text-xs font-thin text-black dark:text-white mb-[-0.3rem]">New</span>
                  <div className="text-black dark:text-white text-sm font-['Inter-Regular'] leading-normal">Podcasts</div>
                </div>
              </div>
            </div>
  
            {/* Second Column */}
            <div className="relative flex flex-col items-start justify-start mx-5">
              <div className="text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none">Other Lounge</div>
              <div className="text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[20px]">FAQ</div>
              <div className="text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">Resources</div>
              <div className="text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">Gallery</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoungeDropdown;
  