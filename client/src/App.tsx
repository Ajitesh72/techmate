import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newsletter" element={<h1>NEWSLETTER COMING SOON</h1>}/>
        <Route path="/login" element={<h1>LOGIN PAGE</h1>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App
