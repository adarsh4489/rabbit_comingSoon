

const PortfolioDropdown = ({setPortfolioVisible,lightMode}) => {
  return (
    <div className='w-full h-screen  z-50 backdrop-blur-md'>
            <div className={`w-full h-[270px] z-50 flex justify-center items-center gap-4 ${!lightMode?"bg-gray-50":"bg-gray-500 text-neutral-50"} bg-opacity-70 backdrop-blur-md `} onMouseEnter={()=>setPortfolioVisible(true)} onMouseLeave={()=>setPortfolioVisible(false)}>
           
            <div className='lg:w-[700px] flex justify-start items-start gap-[7rem] px-2  '>
                <div className="relative flex  flex-col items-start justify-start mx-5 mac:mx-8 gap-2">
                    <div className=" text-xs font-light  font-['Inter-Regular'] leading-none">Hutch</div>
                    <div className='flex flex-col mt-2 '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                       
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal  "> 
                            Branding 
                            </div>
                    </div>
                    <div className='flex flex-col  '>

                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                            UI/UX
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                           Website
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                           Editorial
                        </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                            Social Network
                             </div>
                    </div>

                </div>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className="text-xs font-light font-['Inter-Regular'] leading-none ">Other Portfolio</div>
                    <div className=" text-sm font-normal font-['Inter-Regular'] leading-none mt-[20px]">
                        Packing
                        </div>
                    <div className=" text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                       Inetractive
                        </div>
                    <div className=" text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                     Campaign
                    </div>
                    <div className=" text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                     Illustration/Graphics
                    </div>
                </div>
              
            </div>
        </div>
        </div>
  )
}

export default PortfolioDropdown