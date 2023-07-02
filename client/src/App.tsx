import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import SignUp from "./pages/signup";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <Router>
       <Toaster/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/newsletter" element={<h1>NEWSLETTER COMING SOON</h1>}/>
        <Route path="/login" element={<h1>LOGIN PAGE</h1>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/techmateHome" element={<h1>Welcome to techmate home page</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
