import { ChangeEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import Sidebar from "../components/sidebar";
import PhoneMenu from "../components/phonemenu";
import axios from "axios";

export default function TechmatePost() {
  interface UserDataItem {
    username: string;
    email: string;
    profession: string;
    gender: string;
    location: { [key: string]: string }; // Assuming location is a key-value pair with both keys and values being strings
    // Add other properties as needed
  }
  const [userData, setUserData] = useState<UserDataItem[]>([]);
  const [userImage, setUserImage] = useState<string>("");
  const [newpost, setNewPost] = useState<string>("");
  const [newsubject, setNewSubject] = useState<string>("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userCreatedResponse = await axios.post(
          "http://127.0.0.1:8080/getprofile",
          {},
          {
            withCredentials: true,
          }
        );
        console.log(userCreatedResponse);
        if (userCreatedResponse)
          setUserImage(userCreatedResponse.data.imageurl);
        setUserData(userCreatedResponse.data.user_data);
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
        <Sidebar name="profile" />
      </div>
      <div className="bottom-0 border-t-2 border-DBDBDB fixed md:hidden">
        <PhoneMenu name="profile" />
      </div>
      {userData && (
        <div className="mt-20  w-screen">
          <div>
            <div className="flex gap-0 md:gap-10  bg-blue-50 rounded-xl mx-5 md:mx-20 border-2  ">
                <div className="my-4">
              <img
                src={userImage}
                alt=""
                className="ml-2 md:ml-8 my-12 h-16 w-16 md:h-20 md:w-20 rounded-full"
              />
                </div>
              <div className="w-full my-4 mr-6 md:mx-0 md:mr-8">
                <input
                  className="mt-6 px-4 m-4 rounded-full w-full h-10 border-2"
                  placeholder="Enter A Subject"
                  onChange={(e) => {
                    setNewSubject(e.target.value);
                  }}
                />
                <input
                  className="mt-4 px-4 m-4 rounded-full w-full h-10 border-2"
                  placeholder="Start a Post"
                  onChange={(e) => {
                    setNewPost(e.target.value);
                  }}
                />
                <div className="flex mx-4 justify-center items-center w-full h-10 rounded-full mb-5 bg-black text-white text-xl cursor-pointer">
                    Submit
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 mx-5 md:mx-20">
            <hr className="" />
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
