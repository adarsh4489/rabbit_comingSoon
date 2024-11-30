import React from "react";

function AddressForm() {
  return (
    <div className="w-full max-w-[1200px]  flex flex-col justify-center pt-11   gap-10 ">
      <div className="text-black  text-3xl font-bold  col-span-2 mx-auto my-4">
        Contact Us
      </div>
      <div className="flex w-full">
        <div className="flex flex-col mt-[5rem] gap-6">
          <div>
            <div className="text-2xl  font-semibold ">Registered Office:</div>
            <div className="text-black text-sm font-normal ">
              <p className="">
                24 GF, 4th B Cross, 1st Stage, <br /> KHB Colony,
                Basaveshwaranagar,
                <br /> Bangalore, Karnataka 560079, India.
              </p>
            </div>
          </div>
          <div>
            <div className="text-black text-2xl font-bold ">
              Office Address:
            </div>
            <div className=" text-black text-sm font-normal ">
              24 GF, 4th B Cross, 1st Stage, <br /> KHB Colony,
              Basaveshwaranagar, <br /> Bangalore, Karnataka 560079, India.
            </div>
          </div>

          <div className="text-black text-2xl  font-bold ">
            Get In Touch With US
          </div>
          <div className=" text-black text-sm flex flex-col   ">
            <div className="flex gap-4">
              <span className="font-bold">+91 9998889990</span>
              <span className="font-bold">+91 9998889990</span>
              <span className="font-semibold text-blue-800">
                <a href="mailto:paperrabbit.world">Email</a>
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold  ">Connect US Even Here</div>
          <p>social media handles</p>
          <div className=" flex  gap-6"></div>
        </div>

        <div className="w-full grid grid-cols-2 grid-rows-7 gap-4 text-black dark:text-white">
          <div className="flex flex-col items-start  justify-start">
            <span className="text-xs pl-5 mb-2">First Name</span>
            <input
              type="text"
              placeholder="Full Name"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black w-[90%] rounded-xl h-[50px] text-black "
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <span className="text-xs pl-5 mb-2">Company Name</span>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-xl  w-[90%] h-[50px] text-black "
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-xs pl-5 mb-2">Email Id</span>
            <input
              type="text"
              placeholder="Enter Email ID"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-xl w-[90%] h-[50px] text-black "
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-xs pl-5 mb-2">Contact Number</span>
            <input
              type="text"
              placeholder="Enter Contact Number with country code"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-xl w-[90%] h-[50px] text-black "
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <span className=" text-xs pl-5 mb-2">Service Looking For</span>
            <select
              type="text"
              placeholder="Full Name"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-[0.75rem] w-[90%] h-[50px] text-black"
            >
              <option value="dummy1"> dummy1 </option>
              <option value="dummy2"> dummy2 </option>
              <option value="dummy3"> dummy3 </option>
              <option value="dummy4"> dummy4 </option>
            </select>
          </div>

          <div className="flex flex-col items-start justify-start">
            <span className="text-xs pl-5 mb-2">Subject</span>
            <input
              type="text"
              placeholder="Select"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-xl w-[90%] h-[50px] text-black "
            />
          </div>

          <div className="flex flex-col items-start justify-start col-span-2 row-span-2">
            <span className="text-xs pl-5 mb-2">Brief About Subject</span>
            <textarea
              type="text"
              className="pl-5 text-xs bg-gray-50 border-[1px] border-black rounded-xl w-[95%] h-[150px] text-black"
            />
          </div>

          <div className="w-full flex flex-col items-center justify-start col-span-2 row-span-1 gap-2">
            <div className="w-full col-span-2 text-sm">
              <input type="checkbox" name="" id="" className="pr-5" />
              <span className="mr-10 text-xs">
                {" "}
                I here by agree that all filled content is correct and agree for
                the company to call me back
              </span>
            </div>
            <div className="w-full col-span-2 text-sm ">
              <input
                type="checkbox"
                name=" click on this to check box"
                id=""
                className="pr-5"
              />
              <span className="mr-10 text-xs">
                {" "}
                I here by agree that all filled content is correct and agree for
                the company to call me back
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center col-span-2 ">
            <button className="bg-black text-white dark:bg-white dark:text-black w-[20rem] h-11 rounded-lg">
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
