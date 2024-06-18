import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoFunnelOutline } from "react-icons/io5";
import StudentList from "./StudentList";
import BottomBar from "./BottomBar";

const MainSection = () => {
  return (
    <div className="py-4 px-10">
      <h4 className="text-gray-400 text-sm">Select school</h4>
      <div className="flex justify-between items-center">
        <div>
          <button className="border rounded-lg text-sm px-3 py-2 inline-flex items-center min-w-52 justify-between">
            Big Ben
            <IoIosArrowDown className="text-primary cursor-pointer" />
          </button>

          <div className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-8 items-center">
          <div className="rounded-full border-2 border-gray-300 p-1">
            <IoFunnelOutline size={20} className=" text-primary" />
          </div>
          <button className="bg-primary rounded-3xl text-white text-sm pl-2 pr-3 py-1.5 flex items-center space-x-1">
            <FaPlus size={14} />
            <span className="inline-block">Add a student</span>
          </button>
        </div>
      </div>

      <StudentList />
      <BottomBar />

    </div>
  );
};

export default MainSection;
