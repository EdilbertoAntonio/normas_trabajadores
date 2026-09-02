import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Norma36 from "./pages/Norma36";
import TablaAuditorias from "./pages/TablaAuditorias";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login/>} /> 
        <Route 
          path="/Norma36"  
          element={
            <ProtectedRoute>
              <Norma36/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/TablaAuditorias"  
          element={
            <ProtectedRoute>
              <TablaAuditorias/>
            </ProtectedRoute>
          } 
        />  
      </Routes>
    </Router>
  )
}

export default App