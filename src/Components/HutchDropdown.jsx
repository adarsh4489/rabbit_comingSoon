

const HutchDropdown = ({setHutchVisible,lightMode}) => {
  return (
    <div className='w-full h-screen z-50 backdrop-blur-md'>
            <div className={`w-full h-[270px] z-50 flex justify-center items-center gap-4 ${!lightMode?"bg-gray-50":"bg-gray-500 text-neutral-50"} bg-opacity-70 backdrop-blur-md `} onMouseEnter={() => setHutchVisible(true)}
              onMouseLeave={() => setHutchVisible(false)} >
            {/* <div className=" lg:w-full w-full top-0 h-[270px] absolute bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-sm dark:bg-opacity-50 dark:backdrop-blur-2xl" > */}
            <div className=' lg:w-[700px] flex justify-start items-start gap-[7rem] px-2'>
                <div className="relative flex  flex-col items-start justify-start mx-5 mac:mx-8 gap-2">
                    <div className=" text-xs font-light  font-['Inter-Regular'] leading-none">Hutch</div>
                    <div className='flex flex-col mt-2 '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        {/* <Link to='/branding'> */}
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal  "> 
                            {/* <Link to='/hutchlayer'> */}
                            Branding 
                            {/* </Link>  */}
                            </div>
                            {/* </Link> */}
                    </div>
                    <div className='flex flex-col  '>

                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                            Advertising  
                            {/* </Link> */}
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                            Consulting  
                            {/* </Link> */}
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className=" text-sm  font-['Inter-Regular'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                        Analysis & Strategies 
                        {/* </Link> */}
                        </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin mb-[-0.4rem]'>New</span>
                        <div className="  font-['Inter-Regular'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                            Architecture & Planning 
                             {/* </Link> */}
                             </div>
                    </div>

                </div>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-xs font-light font-['Inter-Regular'] leading-none ">other hutch</div>
                    <div className=" text-sm font-normal font-['Inter-Regular'] leading-none mt-[20px]">
                        {/* <Link to='/hutchlayer'> */}
                        Marketing & PR
                        {/* </Link> */}
                        </div>
                    <div className="  text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                        {/* <Link to='/hutchlayer'> */}
                        End to End Solutions
                        {/* </Link> */}
                        </div>
                    <div className=" text-sm font-normal font-['Inter-Regular'] leading-none mt-[16px]">
                        {/* <Link to='/hutchlayer'> */}
                        Brand Glossary
                    {/* </Link> */}
                    </div>
                </div>
              
            </div>
        </div>
        </div>
  )
}

export default HutchDropdown