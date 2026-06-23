import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient'; 
import '../assets/styles/topbar.css';

export const TopBar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Alternar la apertura/cierre del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        // 1. Le decimos a Supabase que destruya el token de sesión
        const { error } = await supabase.auth.signOut();
        
        if (!error) {
            // 2. Si todo sale bien, lo expulsamos al Login
            navigate('/Login');
        } else {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <header className="topbar">
            <div><h2>Auditoría de normas</h2></div>
            
            {/* Contenedor del perfil de usuario */}
            <div className="user-profile-container">
                <button className="profile-button" onClick={toggleMenu} aria-label="Menú de usuario">
                    <i className="material-symbols-outlined icon-large">account_circle</i>
                </button>
                
                {/* Estructura condicional para el menú desplegable */}
                {menuOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            {/* Aquí podrás añadir más opciones en el futuro (ej. Cambiar contraseña) */}
                            <li onClick={handleLogout} className="dropdown-item logout-option">
                                <i className="material-symbols-outlined">logout</i>
                                <span>Cerrar sesión</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};