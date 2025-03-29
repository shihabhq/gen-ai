import React, { useState } from "react";
import HistoryPage from "../../pages/HistoryPage";
import History from "./History";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
import { PiPlus } from "react-icons/pi";
import { RiChatNewLine } from "react-icons/ri";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

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
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className="absolute cursor-pointer top-[4%] left-[4%] z-50 md:hidden"
        onClick={toggleMenu}
      >
        <FaBars size={28} />
      </div>

      <div
        className={`bg-softBlue z-50 fixed md:static ${
          open ? "left-0" : "-left-full"
        } top-0 p-4 py-20 flex justify-start w-fit min-w-[18vw] h-full items-start 
          flex-col gap-4 transition-all duration-300`}
      >
        <div className="self-end  md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-900 p-2"
          >
            <IoMdClose size={28} />
          </button>
        </div>

        <Link to={"/"} className="flex items-center gap-2 justify-start">
          <img
            src={
              "https://growthgear.in/wp-content/uploads/2024/09/cropped-Group-29-Copy1-32x32.png"
            }
            className=""
            alt="logo"
          />
          <h1 className="text-2xl font-bold uppercase ">Gen AI</h1>
        </Link>

        <div className="w-full">
          <Link
            to={"/"}
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
