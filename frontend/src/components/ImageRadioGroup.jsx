// src/components/ImageRadioGroup.jsx
import React from 'react';
import '../assets/styles/imageRadioGroup.css';

const ImageRadioGroup = ({ options, name, selectedValue, onChange, error }) => {
    return (
        <div className="image-radio-container">
            {options.map((option) => {
                const isSelected = selectedValue === option.value;
                
                return (
                    <label 
                        key={option.value} 
                        /* Aplicamos dinámicamente la clase del color (ej. theme-green) */
                        className={`image-radio-card ${isSelected ? 'selected' : ''} theme-${option.colorTheme} ${error ? 'error' : ''}`}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={isSelected}
                            onChange={onChange}
                            className="hidden-radio"
                        />
                        
                        <div className="image-radio-content">
                            {/* Nuestro nuevo círculo seleccionador */}
                            <div className="custom-radio-circle"></div>
                            
                            {option.image && (
                                <img src={option.image} alt={option.label} className="radio-image" />
                            )}
                            <span className="radio-label">{option.label}</span>
                        </div>
                    </label>
                );
            })}
        </div>
    );
};

export default ImageRadioGroup;