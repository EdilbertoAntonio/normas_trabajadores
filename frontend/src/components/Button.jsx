import React from 'react';
import '../assets/styles/button.css';

const Button = ({ type, onClick, className = 'custom-button', disabled, children  }) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
        >

        {children}
        
        </button>
    );
};

export default Button;