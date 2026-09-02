import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import '../../assets/styles/TablaAuditorias/tableControls.css';

const TableControls = ({ searchTerm, onSearch, itemsPerPage, onItemsPerPageChange, filterNorma, onFilterNorma, startDate, onStartDateChange, endDate, onEndDateChange, onLimpiarFiltros}) => {
    return (
        <div className="table-controls-container">
            <div className="search-box">
                <Input
                    type="text"
                    placeholder="Buscar folio o empresa..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    noMargin={true}
                />
            </div>
            
            <div className="filters-box">

                <div className="date-filters">
                    <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => onStartDateChange(e.target.value)}
                        //noMargin={true}
                        title="Fecha desde" // Para accesibilidad
                    />
                    <span className="date-separator">a</span>
                    <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => onEndDateChange(e.target.value)}
                        //noMargin={true}
                        title="Fecha hasta"
                    />
                </div>

                <Select
                    value={filterNorma}
                    onChange={(e) => onFilterNorma(e.target.value)}
                    //noMargin={true}
                    //placeholder='Tipo de norma'
                    showPlaceholder={false}

                >
                    <option value="todas">Todas las normas</option>
                    <option value="NOM-036">NOM-036</option>
                    {/* Añade más normas aquí en el futuro */}
                </Select>

                <Select
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(e.target.value)}
                    showPlaceholder={false}
                    //noMargin={true}
                >
                    <option value={5}>5 por página</option>
                    <option value={10}>10 por página</option>
                    <option value={15}>15 por página</option>
                    <option value="Infinity">Todos</option>
                </Select>

                <Button 
                    type="button" 
                    onClick={onLimpiarFiltros}
                    // Añade una clase CSS extra si quieres darle un color más suave (ej. gris)
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        filter_alt_off
                    </span>
                    Limpiar
                </Button>
            </div>
        </div>
    );
};

export default TableControls;