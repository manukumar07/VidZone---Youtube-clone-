import { useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../assets/logo.png";
import profile from "../assets/m.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="fixed top-0 w-full bg-white px-4 py-2 md:px-6 md:py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer md:hidden" />
        <img src={logo} alt="Logo" className="w-20 md:w-28 cursor-pointer" />
      </div>
      <div className="flex items-center w-full max-w-3xl mx-auto space-x-2 md:space-x-4">
        <div className="flex w-full border border-gray-400 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
          <button
            className="px-4 py-2 border-l border-gray-400 bg-gray-100"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
        <IoMdMic
          size={"42px"}
          className="hidden md:block ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex items-center space-x-3 md:space-x-5">
        <RiVideoAddLine className="text-xl md:text-2xl cursor-pointer" />
        <AiOutlineBell className="text-xl md:text-2xl cursor-pointer" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
