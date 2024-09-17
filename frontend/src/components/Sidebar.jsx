import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaYoutube } from "react-icons/fa";
import {
  SiYoutubestudio,
  SiYoutubekids,
  SiYoutubemusic,
  SiTrendmicro,
} from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdPodcasts } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";

import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icon: <BiVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: 1, name: "Youtube Premium", icon: <FaYoutube /> },
    { id: 2, name: "Youtube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "Youtube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Youtube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <div className="px-2 lg:px-4 w-full lg:w-[350px] xl:w-[450px] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      {/* Home */}
      <div className="space-y-3">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
          >
            <div className="text-xl cursor-pointer">{item.icon}</div>
            <span className="hidden md:block cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="my-2" />

      {/* You */}
      <div className="mt-2 space-y-1">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
          >
            <div className="text-xl cursor-pointer">{item.icon}</div>
            <span className="hidden md:block cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      {/* Explore */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
          >
            <div className="text-xl cursor-pointer">{item.icon}</div>
            <span className="hidden md:block cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      {/* More From YouTube */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">More From YouTube</h1>
        </div>
        {sidebarItems4.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 md:space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
          >
            <div className="text-xl cursor-pointer text-red-500">
              {item.icon}
            </div>
            <span className="hidden md:block cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="my-2" />
      <p>Privacy Policy</p>
      <p className="text-sm text-gray-800 mt-2">© 2024 VidZone.</p>
    </div>
  );
}

export default Sidebar;
