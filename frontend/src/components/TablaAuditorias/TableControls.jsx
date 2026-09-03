import React, { useState, useRef, useEffect } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Label from '../../components/Label';
import '../../assets/styles/TablaAuditorias/tableControls.css';
import '../../assets/styles/variables.css';

const TableControls = ({ 
    searchTerm, onSearch, itemsPerPage, onItemsPerPageChange, 
    filterNorma, onFilterNorma, startDate, onStartDateChange, endDate, 
    onEndDateChange, onLimpiarFiltros
    }) => {

    const [showFilters, setShowFilters] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowFilters(false);
            }
        };
        
        if (showFilters) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showFilters]);

return (
        <div className="table-controls-container">
            {/* IZQUIERDA: Buscador */}
            <div className="search-box">
                <Input
                    type="text"
                    placeholder="Buscar folio o empresa..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            
            {/* DERECHA: Botones y Controles */}
            
            <div className="actions-box">
                <Label>
                    Filtros
                </Label>
                
                {/* Contenedor del Menú Desplegable */}
                <div className="filter-dropdown-container" ref={dropdownRef}>
                    <Button 
                        type="button" 
                        onClick={() => setShowFilters(!showFilters)}
                        className="btn-filtros"
                    >
                        <span className="material-symbols-outlined">
                            tune
                        </span>
                        
                    </Button>

                    {/* El panel flotante que contiene las fechas y la norma */}
                    {showFilters && (
                        <div className="filter-dropdown-menu">
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--primary-color-blue)' }}>Filtros Avanzados</h4>
                            
                            {/* NUEVA ESTRUCTURA DE COLUMNAS */}
                            
                                <div className="filter-group">
                                    <Label>Desde:</Label>
                                    <Input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => onStartDateChange(e.target.value)}
                                        title="Fecha desde"
                                    />
                                </div>
                                <div className="filter-group">
                                    <Label>Hasta:</Label>
                                    <Input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => onEndDateChange(e.target.value)}
                                        title="Fecha hasta"
                                    />
                                </div>
                            

                            <div className="filter-group" >
                                <Label>Tipo de norma:</Label>
                                <Select
                                    value={filterNorma}
                                    onChange={(e) => onFilterNorma(e.target.value)}
                                    showPlaceholder={false}
                                >
                                    <option value="todas">Todas las normas</option>
                                    <option value="NOM-036">NOM-036</option>
                                </Select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Selector de Paginación */}
                <div className="pagination-box" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Label style={{ margin: 0 }}>Filas:</Label>
                    <Select
                        value={itemsPerPage}
                        onChange={(e) => onItemsPerPageChange(e.target.value)}
                        showPlaceholder={false}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value="Infinity">Todos</option>
                    </Select>
                </div>
                

                {/* Botón Limpiar */}
                <Label>
                    Borrar filtros
                </Label>
                <Button 
                    type="button" 
                    onClick={onLimpiarFiltros}
                    title="Limpiar filtros"
                    // style={{ backgroundColor: 'var(--secondary-color-red)', width: '50px' }}
                    className='delete-filters'
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        filter_alt_off
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default TableControls;