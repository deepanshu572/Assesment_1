import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import collage from "../assets/img/collage.png";
import { PiStarFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowDropright } from "react-icons/io";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedTab, setSelectedTab] = useState("Register");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();

  const handletoggleTab = (name) => {
    setSelectedTab(name);
  };

  const handleGoogleAuth = async () => {
    const res = await signInWithPopup(auth, provider);
    const { email, displayName } = res?.user;
    const userData = {
      name: displayName,
      email: email,
      expiry: Date.now() + 24 * 60 * 60 * 1000, 
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      expiry: Date.now() + 24 * 60 * 60 * 1000, 
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard");
  };

  return (
    <div className="md:h-screen h-full w-full bg-black main ">
      <div className="flex items-center flex-wrap md:flex-nowrap  h-full justify-around gap-2 md:w-[80%] w-[90%] m-auto ">
        <div className="left h-full">
          <div className="flex flex-col h-full justify-center">
            <div className="nav_img relative md:top-[-6rem] mt-5 ">
              <img className="w-22" src={logo} alt="" />
            </div>
            <div className="left_wrap my-10 mt-0 relative bottom-5 ">
              <div className="left_top flex items-center gap-2">
                <img
                  className="w-20 md:w-25 object-cover"
                  src={collage}
                  alt=""
                />
                <div className="box">
                  <div className="flex">
                    <PiStarFill className="text-[#FE9A00]" />
                    <PiStarFill className="text-[#FE9A00]" />
                    <PiStarFill className="text-[#FE9A00]" />
                    <PiStarFill className="text-[#FE9A00]" />
                    <PiStarFill className="text-[#FE9A00]" />
                  </div>

                  <h5 className="text-[#1C398E] text-sm">
                    Trusted by 12k+ learners
                  </h5>
                </div>
              </div>

              <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent">
                Learn smarter. Grow faster.
              </h2>
              <h5 className="text-[#1C398E] md:text-xl text-xl ">
                Join a global learning community <br /> at DK Academy.
              </h5>
            </div>
          </div>
        </div>
        <div className="right w-full md:w-auto">
          <div className="form w-full md:w-auto">
            <div className=" md:min-w-[390px]  bg-[#F8F8F8] rounded-xl  border-1 border-[#F6F6F6] shadow  ">
              <div className="form w-full ">
                <div className="bg-white pt-5 pb-4  w-full rounded-xl border-b border-b-[#c2c2c2]">
                  <div className="form_header px-5  md:px-10 bg-white  text-center">
                    <h4 className="font-bold ">Login in to DK</h4>
                    <p className="text-xs font-light text-[#6E6E72] py-1 pt-0">
                      Welcome back! Please Login in to continue
                    </p>
                    <button
                      onClick={handleGoogleAuth}
                      className="flex gap-1 items-center justify-center text-[13px]  hover:bg-[#F7F7F7] cursor-pointer w-full py-1.5 mt-5 text-[#5E5E5E] rounded-sm shadow2 "
                    >
                      <FcGoogle className="w-5 h-5" />
                      Continue with Google
                    </button>
                    <div className="flex items-center gap-3 my-4">
                      <div className="h-[1.7px] w-full bg-[#F6F6F6] border-1 border-[#F6F6F6]"></div>
                      <h3 className="text-[#6E6E72] text-sm">or</h3>
                      <div className="h-[1.7px] w-full bg-[#F6F6F6] border-1 border-[#F6F6F6]"></div>
                    </div>
                  </div>
                  <form
                    onSubmit={handleLogin}
                    className="form_body px-5  md:px-10 bg-white   "
                  >
                    <div className="input mt-1 flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="text-[13px] font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-[13px] rounded-sm border-1 border-gray-200 py-1 px-2 outline-gray-300"
                        placeholder="enter your name"
                      />
                    </div>
                    <div className="input mt-1 flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="text-[13px] font-semibold"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-[13px] rounded-sm border-1 border-gray-200 py-1 px-2 outline-gray-300"
                        placeholder="enter your email address"
                      />
                    </div>

                    <div className="input mt-1 flex flex-col gap-1">
                      <label
                        htmlFor="password"
                        className="text-[13px] font-semibold"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-[13px] rounded-sm border-1 border-gray-200 py-1 px-2 outline-gray-300"
                        placeholder="enter your password"
                      />
                    </div>
                    <button
                      className=" text-white w-full flex items-center justify-center py-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border
           shadow2 text-xs font-semibold mt-2 rounded-md cursor-pointer "
                    >
                      Continue <IoMdArrowDropright className="w-4 h-6" />{" "}
                    </button>
                  </form>
                </div>
                <div className="form_footer p-5 ">
                  <h3 className="text-xs text-center text-[#4e4e4e]">
                    Don’t have an account?
                    <b className="font-bold cursor-pointer text-gray-700">
                      {" "}
                      Register{" "}
                    </b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
