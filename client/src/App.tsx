import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ABOUT" element={<h1>ABOUT</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
