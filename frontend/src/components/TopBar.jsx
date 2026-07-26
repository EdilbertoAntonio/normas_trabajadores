import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient'; 
import '../assets/styles/topbar.css';

export const TopBar = ({ toggleMobileMenu }) => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        
        if (!error) {
            navigate('/Login');
        } else {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <i className="material-symbols-outlined">menu</i>
                </button>
                <h2>Auditoría de normas</h2>
            </div>
            
            <div className="user-profile-container">
                <button className="profile-button" onClick={toggleMenu} aria-label="Menú de usuario">
                    <i className="material-symbols-outlined icon-large">account_circle</i>
                </button>
                
                {menuOpen && (
                    <div className="dropdown-menu">
                        <ul>
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