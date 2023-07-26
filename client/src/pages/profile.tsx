import { ChangeEvent, useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import Sidebar from "../components/sidebar";
import PhoneMenu from "../components/phonemenu";
import axios from "axios";
export default function TechmateProfile() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userCreatedResponse = await axios.post("http://127.0.0.1:8080/getprofile", {}, {
          withCredentials: true
        });
        console.log(userCreatedResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex">
        <div className="hidden md:block">
            <Sidebar name="profile"/>
        </div>
        <div className="bottom-0 border-t-2 border-DBDBDB fixed md:hidden">
            <PhoneMenu name="profile"/>
        </div>
     <div className="px-32 py-16 h-screen w-screen md:bg-white">
            Profile
     </div>
    </div>
  );
}
