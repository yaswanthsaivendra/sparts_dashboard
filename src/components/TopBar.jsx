import { BiSearchAlt } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="w-full border-b h-20 flex p-8">
      <div className="flex space-x-4 items-center w-[50%]">
        <h1 className="text-lg">Students</h1>
        <div className="text-primary text-lg rounded-2xl border-2  px-2.5 py-0.3">
          82
        </div>
      </div>
      <div className="flex items-center justify-between w-[50%]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-10 border-b border-gray-300 rounded w-full focus:outline-none focus:border-primary"
          />
          <BiSearchAlt
            size={22}
            className="absolute top-[50%] left-3 transform -translate-y-1/2 text-primary"
          />
        </div>
        <div className="flex items-center justify-between space-x-12">
          <div className="text-primary flex space-x-6 items-center">
            <CiViewList size={20} className="cursor-pointer" />
            <GoBell size={18} className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="student"
              className="h-10 w-10 rounded-full"
            />
            <IoIosArrowDown className="text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
