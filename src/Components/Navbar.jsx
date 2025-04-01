import React from "react";
import reactLogo from "../assets/download.svg";
import LoginLogo from "../Logos/LoginLogo";

const Navbar = () => {
  return (
    <div className="border-b border-[rgb(83,91,98)] shadow-lg shadow-[rgb(221,224,228)] border-opacity-30">
      <header className="mx-[80px] h-[56px]">
        <div className="flex justify-between items-center h-full w-full">
          <div className="flex items-center h-full">
            <a href="" className="mr-4">
              <img src={reactLogo} alt="logo"></img>
            </a>
            <a className="mr-8">Discover</a>
            <a className="mr-8">Create</a>
          </div>
          <div className="flex gap-4">
            <a className="py-3">WatchList</a>
            <button>Circle</button>
            <button className="border border-[#1f7ae0] border-opacity-[0.6] rounded-sm px-4 py-2">
              <div className="flex justify-center items-center gap-1">
                <LoginLogo />
                <span className="text-[#1f7ae0] font-bold">Login</span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
