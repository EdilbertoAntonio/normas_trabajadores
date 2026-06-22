import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Carga from "./pages/Carga";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login"/>} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Carga" element={<Carga />} /> 
      </Routes>
    </Router>
  )
}

export default App