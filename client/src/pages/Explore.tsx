// import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import Sidebar from "../components/sidebar";
import PhoneMenu from "../components/phonemenu";
import axios from "axios";
export default function TechmateExplore() {
 async function getData(){
//   const userCreatedResponse = await axios.post("http://127.0.0.1:8080/getprofile", {}, {
//     withCredentials: true
//   });
// console.log(userCreatedResponse)  
 }
  return (
    <div className="flex">
        <div className="hidden md:block">
            <Sidebar name="Explore"/>
        </div>
        <div className="bottom-0 border-t-2 border-DBDBDB fixed md:hidden">
            <PhoneMenu name="Explore"/>
        </div>
     <div className="px-32 py-16 h-screen w-screen md:bg-white md:ml-72">
            explore
            <div className="bg-black text-white h-10 w-30 text-center" onClick={getData}>
              GET PROFILES
            </div>
     </div>
    </div>
  );
}


