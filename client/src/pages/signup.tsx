// import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function SignUp() {
  return (
    <div className="">
      <div className="flex justify-center h-screen bg-blue-50  text-center">
        <div className="my-20 mx-5">
          <div>
            <img className="mx-auto" src={logo} alt=""/>
            </div>
          <div className="my-10">back btn  loader</div>
          <div >
            <h1 className="font-bold text-xl">Hey There!So,what do you like to be called?</h1>
            <input className="mt-7 mb-2 px-4 rounded-full sm:h-10 w-auto sm:w-96" placeholder="Your name"/>
            <p className="text-xs text-gray-700">This is how you would appear on TechMate</p>
          </div>
          <div className="mt-10 h-10 py-2 text-white bg-black rounded-full hover:bg-blue-600 cursor-pointer">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}
