import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';
import '../assets/styles/global.css'; 

export const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="page-layout">
            <SideBar
                isMobileMenuOpen={isMobileMenuOpen} 
                closeMobileMenu={() => setIsMobileMenuOpen(false)}
            />
            <div className="page-content">
                <TopBar toggleMobileMenu={toggleMobileMenu} />
                
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};