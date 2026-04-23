import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideNav = () => {

  const arr = [
    {
      path: "/",
      icon: <IoHomeOutline />,
      name: "Feed",
    },
    {
      path: "/message",
      icon: <LuMessageCircle />,
      name: "Message",
    },
    {
      path: "/Connection",
      icon: <RxPeople />,
      name: "Connection",
    },
    {
      path: "/Discover",
      icon: <IoSearchOutline />,
      name: "Discover",
    },
    {
      path: "/Profile",
      icon: <GoPerson />,
      name: "Profile",
    },
  ];

  return (
    <div className="  bg-white border-r border-gray-200 flex flex-col
justify-between items-center max-sm:absolute top-0 bottom-0 z-20 h-full bg-white w-60 ">
      <div className="head w-full border-b px-8 py-2  border-slate-200">
        <img className="w-25" src={logo} alt="" />
      </div>
      <div className="flex w-full h-full flex-col justify-between ">
        <div className="feed_item px-5 mt-2">
          {arr.map((item, index) => {
            return (
              <NavLink
                key={index}
               
                className={
                  `flex items-center gap-2 px-2 py-2 hover:bg-[#F9FBFB] rounded-md cursor-pointer `
                }
              >
                {item?.icon}
                <p className="text-sm">{item?.name}</p>
              </NavLink>
            );
          })}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 cursor-pointer text-white flex gap-1 px-2 py-1.5 rounded-md mt-4 text-sm items-center w-full justify-center ">
            <AiOutlinePlusCircle /> Create Post
          </button>
        </div>
        <div className="flex_bottom bg-white  flex items-center justify-between border-t border-slate-200">
          <div className="left leading-[10px] flex items-center ">
            <img
              className="w-12  h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAsJaTD22xdCgfrjTCJzLQmODiZ-tYaXisA&s"
              alt=""
            />
            <div className="flex flex-col items-start traking-">
              <h3 className="text-sm">Deepanshu</h3>
              <small className="text-[#4e4e4e]">@Deepanshu</small>
            </div>
          </div>
          <div className="right flex items-center gap-1 p-2 cursor-pointer">
            <IoIosLogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;



