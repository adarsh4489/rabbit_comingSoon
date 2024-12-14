
const ServiceDropdown = () => {
  return (
    <div className='w-full h-screen  z-50 backdrop-blur-sm'>
            <div className="w-full h-[250px] z-50   gap-4 dark:text-white dark:bg-black bg-opacity-70 backdrop-blur-2xl dark:bg-opacity-5 dark:backdrop-blur-sm  nav-items" >
            {/* <div className=" lg:w-full w-full top-0 h-[250px] absolute bg-gray-50 dark:bg-black bg-opacity-70 backdrop-blur-sm dark:bg-opacity-50 dark:backdrop-blur-2xl" /> */}
            <div className=' absolute left-[22.5%] lg:left-[24.1%] top-[10%]  lg:w-[58rem] flex justify-start items-start gap-[7rem]'>
                <div className="relative flex  flex-col items-start justify-start mx-5 mac:mx-8 gap-2">
                    <div className="text-neutral-600 dark:text-neutral-50 text-xs font-light  font-['Inter'] leading-none">Hutch</div>
                    <div className='flex flex-col mt-4 '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        {/* <Link to='/branding'> */}
                        <div className=" text-black dark:text-white text-sm font-semibold font-['Inter'] leading-normal  "> 
                            {/* <Link to='/hutchlayer'> */}
                            Branding 
                            {/* </Link>  */}
                            </div>
                            {/* </Link> */}
                    </div>
                    <div className='flex flex-col  '>

                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm font-semibold font-['Inter'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                            Advertising  
                            {/* </Link> */}
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm font-semibold font-['Inter'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                            Consulting  
                            {/* </Link> */}
                            </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm font-semibold font-['Inter'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                        Analysis & Strategies 
                        {/* </Link> */}
                        </div>
                    </div>
                    <div className='flex flex-col  '>
                        <span className=' text-xs font-thin text-black dark:text-white mb-[-0.4rem]'>New</span>
                        <div className=" text-black dark:text-white text-sm font-semibold font-['Inter'] leading-normal ">
                            {/* <Link to='/hutchlayer'> */}
                            Architecture & Planning 
                             {/* </Link> */}
                             </div>
                    </div>

                </div>
                <div className="relative flex flex-col items-start justify-start mx-5">
                    <div className=" text-neutral-600 dark:text-neutral-50 text-xs font-light font-['Inter'] leading-none ">other hutch</div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[20px]">
                        {/* <Link to='/hutchlayer'> */}
                        Marketing & PR
                        {/* </Link> */}
                        </div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">
                        {/* <Link to='/hutchlayer'> */}
                        End to End Solutions
                        {/* </Link> */}
                        </div>
                    <div className=" text-black dark:text-white text-sm font-normal font-['Inter'] leading-none mt-[16px]">
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

export default ServiceDropdown