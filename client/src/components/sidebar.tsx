import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_white_bgd.svg";
import { useState,useEffect } from "react";
import {motion} from "framer-motion"


interface NameProps {
  name: string;
}
export default function Sidebar({name}:NameProps) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(()=>{
    const element = document.getElementById(name);
    if(element){
      element.style.fill = "red";
    }
  },[name])

  return (
    // <div className="bg-blue-50 w-72 h-screen pt-8">
    <div className="border-r-2 text-black border-DBDBDB w-72 h-screen pt-12 font-roboto" >
      {" "}
      {/* Add padding-top to create space for a top bar */}
      <div className="mx-2 ">
        <div className="mb-8">
          <img className="mx-auto" src={logo} alt="" />
        </div>
        {/* 1st option */}
    <div onClick={() => navigate("/explore")} className="flex items-center gap-10 text-3xl font-semibold my-2 py-2 px-8 rounded-3xl hover:bg-violet-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            id="Explore"
            viewBox="0 0 448 512"
          >
            <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
          </svg>

          <span>Explore</span>
        </div>
        {/* 2nd option */}
        <div className="flex items-center gap-10 text-3xl font-semibold my-2 py-2 px-8 rounded-3xl   hover:bg-violet-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            // fill="black"
            viewBox="0 0 512 512"
            id="Events"
          >
            <path d="M128 32h32c17.7 0 32 14.3 32 32V96H96V64c0-17.7 14.3-32 32-32zm64 96V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V388.9c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28H192zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3V448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V128h99.8zM320 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V96H320V64zm-32 64V288H224V128h64z" />
          </svg>
          <span>Events</span>
        </div>
        {/* 3rd option */}
        <div className="flex items-center gap-10 text-3xl font-semibold my-2 py-2 px-8 rounded-3xl   hover:bg-violet-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="black"
            viewBox="0 0 512 512"
            id="Post"
          >
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
          <span>Post</span>
        </div>
        {/* 4th option */}
        <div className="flex items-center gap-10 text-3xl font-semibold my-2 py-2 px-8 rounded-3xl   hover:bg-violet-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="black"
            viewBox="0 0 512 512"
            id="Chat"
          >
            <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
          <span>Chat</span>
        </div>
        {/* 5th option */}
        <div className="flex items-center gap-10 text-3xl font-semibold my-2 py-2 px-8 rounded-3xl   hover:bg-violet-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="black"
            viewBox="0 0 576 512"
            id="Connects"
          >
            <path d="M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
          </svg>{" "}
          <span>Connects</span>
        </div>
        {/* 6th option */}
        <div onClick={() => navigate("/profile")}className="flex items-center gap-10 text-3xl font-semibold my-2 py-2 px-8 rounded-3xl   hover:bg-violet-200  cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            // fill="black"
            viewBox="0 0 448 512"
            id="profile"
            // onMouseEnter={(e) => e.target.setAttribute("fill", "white")}
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>{" "}
          <span>Profile</span>
        </div>
        {/* when toggle is true */}
        {toggle && (
          <motion.div className="border-2 rounded-xl  mt-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}>
           <a href="mailto:dubeyajitesh07@gmail.com?subject=Issue%20Report&body=Please%20describe%20the%20issue%20here..." className="flex gap-10 text-xl font-semibold my-1 py-1 px-8 rounded-3xl hover:bg-violet-200 cursor-pointer">
  <span>Report Issue</span>
</a>
            <div className="flex gap-10 text-xl font-semibold my-1 py-1 px-8 rounded-3xl  bg-black text-white cursor-pointer">
              <span>Logout</span>
            </div>
          </motion.div>
        )}
        {/* 8th option */}
        <div
          className={`flex fixed bottom-0 gap-10 text-3xl font-semibold mb-4 py-2 px-8 rounded-3xl bg-black hover:bg-gray-700  text-white  hover:fill-white cursor-pointer ${toggle?"text-white fill-white bg-gray-700":"white"}`}
          onClick={() => setToggle(!toggle)}
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fill="white"
            // className=""
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>

          <span>More</span>
        </div>
      </div>
    </div>
  );
}
