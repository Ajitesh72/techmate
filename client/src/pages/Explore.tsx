// import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import Sidebar from "../components/sidebar";
import PhoneMenu from "../components/phonemenu";
import axios from "axios";
export default function TechmateExplore() {

  async function getData(){
  
//   const accessToken = document.cookie
//   .split('; ')
//   .find(cookie => cookie.startsWith('access_token='))
//   ?.split('=')[1];

// console.log(accessToken);

// // Make the API call to the "/verify" route with the access-token in the request headers
// axios.post('http://localhost:8080/verify', null, {
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// })
//   .then((response) => {
//     // Handle the response from the server
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error('Error fetching data:', error);
//   });
 }

  return (
    <div className="flex">
        <div className="hidden md:block">
            <Sidebar name="Explore"/>
        </div>
        <div className="bottom-0 border-t-2 border-DBDBDB fixed md:hidden">
            <PhoneMenu name="Explore"/>
        </div>
     <div className="px-32 py-16 h-screen w-screen md:bg-white">
            explore
            <div className="bg-black text-white h-10 w-30 text-center" onClick={getData}>
              CLICK ME
            </div>
     </div>
    </div>
  );
}


