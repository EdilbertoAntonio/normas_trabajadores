import React from 'react';

const Label = ({ htmlFor, className ='custom-label', title, children }) => {
    return (
        <label 
            htmlFor={htmlFor}  
            className={className} 
            title={title}
        >

            {children}
            
        </label>
    );
};

export default Label;