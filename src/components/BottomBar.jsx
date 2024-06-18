import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BottomBar = () => {
  return (
    <div className="w-full flex items-center mt-10">
      <span className="w-[54%] inline-block">
        <div className="flex justify-end items-center space-x-4">
          <div className="border border-gray-300 rounded-3xl px-3 py-0.5 cursor-pointer">
            <FaAngleLeft className="text-gray-300" />
          </div>
          <div className=" bg-primary  border rounded-3xl px-3 py-0.5  cursor-pointer">
            <FaAngleRight className="text-white" />
          </div>
        </div>
      </span>
      <span className="w-[46%] inline-block">
        <div className="flex items-center justify-end space-x-3 text-primary">
            <p className="border border-primary rounded-3xl px-5 py-0.2">
                1
            </p>
            <p>of</p>
            <p>10</p>
        </div>
      </span>
    </div>
  );
};

export default BottomBar;
