import { IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";


const SideBar = () => {
  return (
    <div className="flex flex-col text-gray-400 w-20 items-center justify-between py-8 px-12">
      <CiLocationArrow1 size={40} className="text-white" />
      <div className="flex flex-col space-y-16 items-end">
        <div className="flex text-white items-center space-x-2">
          <MdOutlineArrowForwardIos />
          <MdOutlinePersonAddAlt className="cursor-pointer" />
        </div>
        <PiStudent className="cursor-pointer" />
        <FaRegChartBar className="cursor-pointer" />
        <SlCalender className="cursor-pointer" />
        <IoSettingsOutline className="cursor-pointer" />
      </div>
        <HiMiniArrowRightOnRectangle className="cursor-pointer" />
    </div>
  );
}

export default SideBar;
