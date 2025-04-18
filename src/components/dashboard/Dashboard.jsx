import React, { useState } from "react";
import HistoryPage from "../../pages/HistoryPage";
import History from "./History";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
import { PiPlus } from "react-icons/pi";
import { RiChatNewLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { resetResult } from "../../store/slices/chatSlice";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen relative flex ">
      {open && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className="absolute cursor-pointer top-[4%] left-[4%] ml-4 z-50 lg:hidden"
        onClick={toggleMenu}
      >
        <FaBars size={28} />
      </div>

      <div
        className={`bg-softBlue z-50 fixed lg:static ${
          open ? "left-0" : "-left-full"
        } top-0 p-4 py-20 flex justify-start w-fit sm:min-w-[300px] h-full items-start 
          flex-col gap-4 transition-all duration-300`}
      >
        <div className="self-end  lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-900 p-2"
          >
            <IoMdClose size={28} />
          </button>
        </div>

        <Link to={"/"} className="flex items-center gap-2 justify-start">
          <h1 className="text-2xl font-bold uppercase ">Generative AI</h1>
        </Link>

        <div className="w-full">
          <Link
            to={"/"}
            onClick={() => {
              dispatch(resetResult());
            }}
            className="w-full mx-auto text-start px-2 rounded-sm py-3
            transition-all flex items-center justify-between active:scale-95 bg-btn text-white text-sm font-semibold cursor-pointer
            "
          >
            New Chat <RiChatNewLine size={20} />
          </Link>
          <History />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
