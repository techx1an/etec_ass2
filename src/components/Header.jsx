import React from "react";
// import logoImg from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function Header({ notification }) {
  return (
    <div>
      <div className="flex justify-between p-4 px-6 shadow-sm">
        {/* Logo */}
        <div className=" font-bold">
          {/* <img src={logoImg} alt="Logo" /> */}
          <h2 className="text-gradient-#f5941d] fugaz text-md md:text-3xl pt-2 md:pt-0">
            CamCompu
          </h2>
        </div>
        {/* Search Bar */}
        <div className="h-9 md:h-auto mt-1 md:mt-0 w-[200px] md:w-[800px]  border-one flex justify-between rounded-4xl mx-2">
          <input
            type="text"
            placeholder="Search for any products or brand"
            className="rounded-4xl p-2 px-3 w-full outline-none"
          />
          <button type="submit">
            <CiSearch className="text-3xl mr-1 p-1 bg-[#f31a27] rounded-4xl text-white hover:bg-[#f5941d] hover:duration-150 cursor-pointer" />
          </button>
        </div>
        {/* Cart& User& save */}

        <div className="flex">
          {/* <button className=" border-2 text-lg  border-gray-400 items-center justify-center mt-2 md:mt-0 m-1 md:m-2 p-1 rounded-3xl cursor-pointer">
            <IoMdHeartEmpty />
          </button> */}
          <button className=" border-2 text-lg md:text-2xl border-gray-400 items-center justify-center mt-2 md:mt-0 m-1 md:m-2 p-1 rounded-3xl cursor-pointer">
            <CiShoppingCart />
            {notification > 0 && (
              <span className="absolute text-[12px] md:text-sm bg-[#f31a27] rounded-full top-5 w-4 h-4 md:w-5 md:h-5 md:right-20 md:top-2 text-white  ">
                {notification}
              </span>
            )}
          </button>
          <button className=" border-2 text-lg md:text-2xl border-gray-400 items-center justify-center mt-2 md:mt-0 m-1 md:m-2 p-1 rounded-3xl cursor-pointer">
            <CiUser />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
