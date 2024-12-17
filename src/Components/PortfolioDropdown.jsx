

const PortfolioDropdown = () => {
  return (
    <div className='w-full h-screen  z-50 backdrop-blur-sm'>
            <div className="w-full h-[270px] z-50   gap-4 bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-5 dark:backdrop-blur-sm  nav-items bg-gray-50" >
            {/* <div className=" lg:w-full w-full top-0 h-[250px] absolute bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-sm dark:bg-opacity-50 dark:backdrop-blur-2xl" /> */}
            <div className=' absolute left-[22.5%] lg:left-[24.1%] top-[10%]  lg:w-[58rem] flex justify-start items-start gap-[7rem]'>
                <div className="relative flex  flex-col items-start justify-start mx-5 mac:mx-8 gap-2">
                    <div className="text-neutral-600 dark:text-neutral-50 text-xs font-light  font-['Inter-Regular'] leading-none">Hutch</div>
                    <div className='flex flex-col mt-4 '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                       
                        <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal  "> 
                            Branding 
                            </div>
                    </div>
                    <div className='flex flex-col  '>

                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                            UI/UX
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                           Website
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                           Editorial
                        </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm  font-['Inter-Regular'] leading-normal ">
                            Social Network
                             </div>
                    </div>

                </div>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter-Regular'] leading-none ">Other Portfolio</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[20px]">
                        Packing
                        </div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                       Inetractive
                        </div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                     Campaign
                    </div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                     Illustration/Graphics
                    </div>
                </div>
              
            </div>
        </div>
        </div>
  )
}

export default PortfolioDropdown