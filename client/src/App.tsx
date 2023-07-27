import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import TechmateExplore from "./pages/Explore";
import TechmateProfile from "./pages/profile";
import TechmatePost from "./pages/post";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <Router>
       <Toaster/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/newsletter" element={<h1>NEWSLETTER COMING SOON</h1>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/explore" element={<TechmateExplore/>}/>
        <Route path="/profile" element={<TechmateProfile/>}/>
        <Route path="/post" element={<TechmatePost/>}/>
        <Route path="*" element={<h1>404.Page not found</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
