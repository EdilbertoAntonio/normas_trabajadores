import React from 'react';
import '../assets/styles/select.css';

const Select = ({id, value, onChange,placeholder = "Select an option", className = '', error = false, showPlaceholder = true, children, ...props}) => {
    return (
        <div className="custom-select">
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={`select-field ${error ? 'error' : ''} ${className}`}
                {...props}
            >
                {showPlaceholder && (
                    <option value="">
                        {placeholder}
                    </option>
                )}
                {children}
            </select>
        </div>
    );
};

export default Select;