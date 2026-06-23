import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Carga from "./pages/Carga";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login />} /> 
        <Route 
          path="/Carga"  
          element={
            <ProtectedRoute>
              <Carga />
            </ProtectedRoute>
          } 
        /> 
      </Routes>
    </Router>
  )
}

export default App