import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [bool, setBool] = useState<boolean>(false);
  const [dbool, setDBool] = useState<boolean>(false);
  
  return (
    <div className=" text-2xl bg-blue-50"> {/* Add top margin to the parent div */}
      <div className="ml-20 mr-20 bg-blue-50">
        <div className="flex justify-start items-center">
          <div className="mt-10">LOGO</div>
          <div className="mt-10 ml-5 hover:underline cursor-pointer">Reviews</div>
          <div className="mt-10 ml-5 hover:underline cursor-pointer">Contact Us</div>
          <div className="flex-grow"></div> {/* Add an empty div to fill remaining space */}
          <div className="mt-10 py-2 mx-5 text-white bg-black rounded-full md:block px-9 hover:bg-gray-700 cursor-pointer">Login</div>
        </div>
      </div>
    </div>
  );
}
