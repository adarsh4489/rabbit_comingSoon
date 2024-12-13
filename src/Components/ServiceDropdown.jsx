
const ServiceDropdown = () => {
  return (
    <div className='w-full h-screen  flex justify-center backdrop-blur-sm  py-4 bg-opacity-20 items-center'>
        <div className='w-[50%] flex gap-[8rem]'>
        <div className='flex text-sm flex-col font-semibold gap-1'>
            <h2 className='text-gray-700 '>Hutch</h2>
            <div>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>Branding</h3>
            </div>
            <div>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>Advertising</h3>
            </div>
            <div>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>Consulting</h3>
            </div>
            <div>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>Analysis And Stratergies</h3>
            </div>
            <div className='flex flex-col'>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>Architecture and planning</h3>
            </div>
        </div>
        <div className='flex text-sm font-semibold flex-col gap-1'>
            <h2 className='text-gray-700 '>Other Hutch</h2>
            <div>
            <h3 className='font-semibold'>Marketing And PR</h3>
            </div>
            <div>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>End to End Solutions</h3>
            </div>
            <div>
                <p className='text-gray-700'>New</p>
            <h3 className='font-semibold'>Brand Glossary</h3>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default ServiceDropdown