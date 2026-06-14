import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
// import profile from "../../assets/profile.png";

const Header = ({ onMenuItemClick }) => {
  return (
    <div className="w-full h-16 bg-[#125887] shadow-2xl relative flex items-center px-4">
      <button className="md:hidden text-white" onClick={onMenuItemClick}>
        <IoMenu size={30} />
      </button>

      <div className="flex items-center mx-auto md:mx-0 md:items-start">
        <h1 className="md:text-xl text-lg text-white font-serif font-semibold">
          Student-performance-prediction
        </h1>
      </div>

      {/* <img src={profile} alt="profile" className="h-12 w-12 absolute top-8 right-4" /> */}
    </div>
  );
};

export default Header;
