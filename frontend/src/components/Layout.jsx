import React from 'react';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';
import '../assets/styles/global.css'; // Mover estilos generales aquí

export const Layout = ({ children }) => {
    return (
        <div className="page-layout">
            <SideBar />
            <div className="page-content">
                <TopBar />
                {/* Aquí se inyectará el contenido específico de cada página */}
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};