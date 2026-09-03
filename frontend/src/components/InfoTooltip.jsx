import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/infoTooltip.css';

export const InfoTooltip = ({ children, title = "Información" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef(null);

    // Cierra el tooltip si el usuario hace clic en cualquier lugar fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const toggleTooltip = (e) => {
        e.preventDefault(); // Evita que envíe el formulario si está dentro de un label
        setIsOpen(!isOpen);
    };

    return (
        <div className="tooltip-container" ref={tooltipRef}>
            <button className="tooltip-trigger" onClick={toggleTooltip} type="button">
                <i className="material-symbols-outlined">help</i>
            </button>
            
            {isOpen && (
                <div className="tooltip-popover">
                    <div className="tooltip-header">
                        <h4>{title}</h4>
                        <button className="tooltip-close" onClick={toggleTooltip} type="button">
                            <i className="material-symbols-outlined">close</i>
                        </button>
                    </div>
                    <div className="tooltip-body">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};