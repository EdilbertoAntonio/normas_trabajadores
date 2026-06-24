import React from 'react';
import '../assets/styles/input.css';

const Input = ({ type, placeholder, value, onChange, id, className='', error, readOnly = false, noMargin=false, iconRight, ...props}) => {
    return (
        <div className={`input-container ${noMargin ? 'no-margin' : ''}`}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                className={`custom-input ${error ? 'error' : ''} ${className}`}
                readOnly={readOnly}
                {...props}
            />
            {iconRight && (
                <div className="input-icon-right">
                    {iconRight}
                </div>
            )}
        </div>
    );
};

export default Input;