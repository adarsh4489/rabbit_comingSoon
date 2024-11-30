import React from "react";
import { RxCross2 } from "react-icons/rx";

const UpdatingModal = () => {
  return (
    <div className="w-[30%] bg-green-400 h-[40%] rounded-2xl flex flex-col gap-2 relative items-center justify-center">
      <p className="font-bold text-2xl">Sorry for the inconvinece</p>
      <p className="font-semibold text-xl w-1/2 text-center">We Will Update This Page soon</p>
      <span className="absolute top-4 right-4">
        <RxCross2 />
      </span>
    </div>
  );
};

export default UpdatingModal;
