const ServiceDropdown = ({ setServiceVisible }) => {
  return (
    <div className="w-full h-screen  z-50 backdrop-blur-sm">
      <div
        className="w-full h-[270px] z-50  gap-4 bg-gray-50 bg-opacity-70 backdrop-blur-sm "
        onMouseEnter={() => setServiceVisible(true)}
        onMouseLeave={() => setServiceVisible(false)}
      >
        <div className=" absolute left-[22.5%] lg:left-[24.1%] top-[10%]  lg:w-[58rem] flex justify-start items-start gap-[7rem]">
          <div className="relative flex  flex-col items-start justify-start mx-5 mac:mx-8 gap-2">
            <div className="text-neutral-600 dark:text-neutral-50 text-xs font-light  font-['Inter-Light'] leading-none">
              Services
            </div>
            <div className="flex flex-col mt-4 ">
              <span className=" text-xs font-thin text-black  mb-[-0.4rem]">
                New
              </span>
              {/* <Link to='/branding'> */}
              <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal  ">
                {/* <Link to='/hutchlayer'> */}
                Identity
              </div>
            </div>
            <div className="flex flex-col  ">
              <span className=" text-xs font-thin text-black dark:text-white mb-[-0.4rem]">
                New
              </span>
              <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                Communication
              </div>
            </div>
            <div className="flex flex-col  ">
              <span className=" text-xs font-thin text-black dark:text-white mb-[-0.4rem]">
                New
              </span>
              <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                Creative
              </div>
            </div>
            <div className="flex flex-col  ">
              <span className=" text-xs font-thin text-black dark:text-white mb-[-0.4rem]">
                New
              </span>
              <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                Digital Design
              </div>
            </div>
            <div className="flex flex-col  ">
              <span className=" text-xs font-thin text-black dark:text-white mb-[-0.4rem]">
                New
              </span>
              <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                Development
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-start mx-5">
            <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none ">
              Other Services
            </div>
            <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[20px]">
              Marketing
            </div>
            <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
              Motion Graphic
            </div>
            <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
              White Labels
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDropdown;
