import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';

import {
  MdInventory2,
  MdPersonAddAlt,
  MdCurrencyRupee,
  MdAttachMoney,
  MdBarChart,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DashBoardItem = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState();

  useEffect(() => {
    if (!userData) {
        navigate('/');
         toast.error("user not found Please logIN")
    } else if (Date.now() > userData.expiry) {
        localStorage.removeItem("user");
        toast.error("Session Timed Out !");
        navigate("/");
      }
      else{
        setUser(userData);     
      }
  },[]);

  const data = [
    { icon: <MdInventory2 />, label: "Products" },
    { icon: <MdPersonAddAlt />, label: "Vendor" },
    { icon: <MdCurrencyRupee />, label: "Purchase" },
    { icon: <MdAttachMoney />, label: "Sell" },
    { icon: <MdBarChart />, label: "Reports" },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("logout succesfully")
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className=" p-4 min-h-screen">
      <div className="flex items-center justify-between px-4">
        <div className="left">
          <h3 className="text-xl font-medium">DK Software </h3>
        </div>
        <div className="right">
          <button
            onClick={handleLogout}
            className="bg-rose-500 cursor-pointer shadow-lg shadow-rose-500/50 rounded-md p-2 px-4 text-xs text-white"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="h-screen p-4 pt-8">
        <h3 className="text-2xl font-medium text-center">
          Welcome Back {user?.name} ✌
        </h3>
        <p className="text-xs text-slate-600 font-medium text-center">
          Manage • Track • Optimize Inventory, Purchases & Sales
        </p>
        <div className="flex flex-wrap items-center justify-center p-8 gap-3 pt-10 w-1/2 m-auto">
          {data.map((item, i) => (
            <div
              className="box text-white bg-gradient-to-r from-indigo-700 to-indigo-500  shadow-lg shadow-indigo-500/50   hover:shadow-xl rounded-md w-35  h-25 transition  duration-300 ease-in-out hover:-translate-y-1 cursor-pointer hover:scale-110 flex items-center justify-center flex-col gap-2"
              key={i}
            >
              <div className="icon text-3xl">{item.icon}</div>
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoardItem;
