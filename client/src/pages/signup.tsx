import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function SignUp() {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate("/techmateHome"); // Replace "/next-page" with the actual path to navigate to
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center h-screen bg-blue-50 text-center">
        <div className="mx-5">
          <div>
            <img className="mx-auto" src={logo} alt="" />
          </div>
          <div className="my-10">
            <div className="flex justify-center items-center">
              <div
                className={`flex justify-center items-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${
                  step >= 1 ? "bg-blue-600" : "bg-gray-100"
                }`}
              >
                {step >= 1 ? (
                  <svg
                    className="w-6 h-6 text-white mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-300 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
              <div className="w-20 h-1 bg-blue-200"></div>
              <div
                className={`flex justify-center items-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${
                  step >= 2 ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                {step >= 2 ? (
                  <svg
                    className="w-6 h-6 text-white mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-300 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
              <div className="w-20 h-1 bg-blue-200"></div>
              <div
                className={`flex justify-center items-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${
                  step >= 3 ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                {step >= 3 ? (
                  <svg
                    className="w-6 h-6 text-white mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2-1a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3V7a3 3 0 00-3-3h-2a3 3 0 00-3 3H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-300 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zm-5 3a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2-1a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3V7a3 3 0 00-3-3H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl">
              Hey There! So, what do you like to be called?
            </h1>
            <input
              className="mt-7 mb-2 px-4 rounded-full sm:h-10 w-auto sm:w-96"
              placeholder="Your name"
            />
            <p className="text-xs text-gray-700">
              This is how you would appear on TechMate
            </p>
          </div>
          <div className="mt-10">
            {step > 1 && (
              <button
                className="mr-3 px-20 py-2 text-white bg-black rounded-full hover:bg-blue-600 cursor-pointer"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {step>=2 && <br className="flex sm:hidden"/>}
            {step>=2 && <br className="flex sm:hidden"/>}
            {step>1&&<button
              className="px-20 py-2 text-white bg-black rounded-full hover:bg-blue-600 cursor-pointer"
              onClick={handleContinue}
            >
              {step > 2 ? "Finish" : "Continue"}
            </button>}
            {step===1&&<button
              className="px-20 py-2 text-white bg-black rounded-full hover:bg-blue-600 cursor-pointer sm:px-40 "
              onClick={handleContinue}
            >
              {step > 2 ? "Finish" : "Continue"}
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
}
