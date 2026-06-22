import React from 'react';
import '../assets/styles/button.css';

const Button = ({ type, onClick, className = 'custom-button', children  }) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={className}
        >

        {children}
        
        </button>
    );
};

export default Button;