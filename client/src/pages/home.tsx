import React from "react";
import { useNavigate } from "react-router-dom";
import Homenavbar from "../components/Homenavbar";
import logo from "../assets/home-bgd.svg";


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Homenavbar />
      <div className="flex justify-center items-center bg-blue-50">
        <div className="mt-20 mb-20">
          <p className="text-blue-700 ">#Explore_Your_Options</p>
          <div className="text-5xl mt-5 mb-5 font">
            Your <span className="font-bold underline text-blue-500">Connection</span> is<br/> just a Click Away....
          </div>
          <div className="mb-5">
          Lorem ipsum dolor sit amet consectetur.<br/> Eu vulputate ut purus hendrerit at laoreet dolor vivamus. Euismod enim<br/>diam natoque faucibus. In libero magna ipsum nisl enim in.
Start Shopping
          </div>
          <div className="py-3.5 text-center text-white bg-black rounded-full md:block px-9 mb-10 hover:bg-blue-600 cursor-pointer">
            Start Exploring
          </div>
          <div className="flex  gap-20">
               <div>
                <p className="font-bold text-3xl">10,000</p>
                <p>Collection of Events</p>
               </div>
               <div>
                <p className="font-bold text-3xl">25,000+</p>
                <p>Happy Users 🥰</p>
               </div>
               <div>
                <p className="font-bold text-3xl">5,000+</p>
                <p>StartUp's Born</p>
               </div>
          </div>
        </div>
        <div>
          <img className="h-70 w-70 self-center" src={logo} alt="" />
        </div>
      </div>
      {/* section2 */}
      <div className="flex justify-centerpy-0 sm:py-8">
        <div className="max-w-5.5xl mx-4 mb-10 my-7 sm:mx-auto">
          <h1 className="mb-4 text-3xl font-medium leading-snug sm:text-4xl sm:leading-tight ">
            A Seamless <span className="underline text-sky-600">Experience</span>{" "}
            is what we offer...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam tortor amet aliquet.
          </p>
          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-20 mt-6 mb-6 sm:mt-10 sm:mb-9">
            <div className="py-8 mb-4 text-white rounded-lg bg-slate-800 sm:w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-blue-600 rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                Feature 1
                </span>
              </div>
              {/* <TruckSVG /> */}
              <h2 className="my-2 text-xl">Real-Time Messaging</h2>
              <p className="font-light text-slate-400">
              Connect and communicate instantly with our seamless real-time messaging system.
              </p>
            </div>
            <div className="py-8 mb-4 text-white rounded-lg bg-slate-800 sm:w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-pink rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                Feature 2
                </span>
              </div>
              {/* <RefundSVG /> */}
              <h2 className="my-2 text-xl">Privacy Controls</h2>
              <p className="font-light text-slate-400">
              Take charge of your privacy with customizable settings for a secure online experience.
              </p>
            </div>
            <div className="py-8 mb-4 text-white rounded-lg bg-slate-800 sm:w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-green rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 3
                </span>
              </div>
              {/* <LockSVG /> */}
              <h2 className="my-2 text-xl">Event's Near You</h2>
              <p className="font-light text-slate-400">
              Discover technical events and stay updated with the latest in technology .
              </p>
            </div>
          </div>
          <p className="text-slate-400">
            Please refer our{" "}
            <a className="text-black underline cursor-pointer">
              customer policy
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
      {/* sction 3 */}
      <div className="flex justify-center items-center bg-black">
        
      </div>
    </div>
  );
}
