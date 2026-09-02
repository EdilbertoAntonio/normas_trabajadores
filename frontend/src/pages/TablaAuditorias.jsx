import { useState, useEffect } from 'react';
import Table from '../components/TablaAuditorias/Table';
import Pagination from '../components/TablaAuditorias/Pagination';
import TableControls from '../components/TablaAuditorias/TableControls';
import { AUDITORIA_TABLA_COLUMNA } from '../constants/ColumnasTablaAuditoria';
import { Layout } from "../components/Layout";
import { supabase } from '../services/supabaseClient';
import '../assets/styles/TablaAuditorias/tablaAuditorias.css';


// Simulamos los datos (asegúrate de reemplazarlos con tu llamada a Supabase)
//const data = []; 

const TablaAuditorias = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterNorma, setFilterNorma] = useState('todas');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const TABLE_COLUMNS = Object.keys(AUDITORIA_TABLA_COLUMNA);

    useEffect(() => {
        const fetchAuditorias = async () => {
            try {
                setIsLoading(true);
                
                // Obtenemos al usuario logueado
                const { data: { user }, error: authError } = await supabase.auth.getUser();
                if (authError || !user) throw new Error("Error de autenticación. Por favor inicia sesión.");

                // Hacemos la consulta optimizada
                const { data: auditorias, error: dbError } = await supabase
                    .from('auditorias')
                    // OPTIMIZACIÓN: Solo traemos las columnas que la tabla usa, evitamos descargar el JSONB pesado
                    .select('id, created_at, tipo_norma, nombre_empresa') 
                    .eq('auditor_email', user.email) // Filtramos explícitamente por su correo
                    .order('created_at', { ascending: false }); // Las más recientes primero

                if (dbError) throw dbError;

                setData(auditorias || []);
            } catch (err) {
                console.error("Error al obtener datos:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAuditorias();
    }, []);

    useEffect(() => {
        let result = [...data];
        
        // Filtrar por nombre de la empresa
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            
            result = result.filter(item => {
                // 1. Buscamos en el nombre de la empresa
                const coincideEmpresa = item.nombre_empresa?.toLowerCase().includes(term);
                
                // 2. Buscamos en el folio (cortando los primeros 8 caracteres como en tu tabla)
                const coincideFolio = item.id?.substring(0, 8).toLowerCase().includes(term);
                
                // Si coincide con CUALQUIERA de los dos, lo mostramos
                return coincideEmpresa || coincideFolio;
            });
        }
        
        // Filtrar por tipo de norma
        if (filterNorma !== 'todas') {
            result = result.filter(item => item.tipo_norma === filterNorma);
        }

        if (startDate) {
            // Añadimos T00:00:00 para asegurar que tome desde el primer segundo de ese día en hora local
            const start = new Date(startDate + 'T00:00:00');
            result = result.filter(item => new Date(item.created_at) >= start);
        }
        
        if (endDate) {
            // Añadimos T23:59:59 para asegurar que incluya hasta el último segundo de ese día
            const end = new Date(endDate + 'T23:59:59');
            result = result.filter(item => new Date(item.created_at) <= end);
        }
        
        setFilteredData(result);
        setCurrentPage(1); 
    }, [searchTerm, filterNorma, data, startDate, endDate]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemsPerPage === Infinity 
        ? filteredData 
        : filteredData.slice(indexOfFirstItem, indexOfLastItem);
    
    const totalPages = itemsPerPage === Infinity ? 1 : Math.ceil(filteredData.length / itemsPerPage);

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value === "Infinity" ? Infinity : parseInt(value));
        setCurrentPage(1);
    };

    const handleLimpiarFiltros = () => {
        setSearchTerm('');
        setFilterNorma('todas');
        setStartDate('');
        setEndDate('');
        setCurrentPage(1); // Regresamos a la página 1 por precaución
    };

    return (
        <Layout>
            <div className="table-wrapper"> 
                <h2>Auditorias registradas</h2>
                
                <div className="table-top">
                    <TableControls 
                        searchTerm={searchTerm}
                        onSearch={setSearchTerm}
                        itemsPerPage={itemsPerPage}
                        onItemsPerPageChange={handleItemsPerPageChange}
                        filterNorma={filterNorma}
                        onFilterNorma={setFilterNorma}
                        startDate={startDate}
                        onStartDateChange={setStartDate}
                        endDate={endDate}
                        onEndDateChange={setEndDate}
                        onLimpiarFiltros={handleLimpiarFiltros}
                    />
                </div>

                {/* 4. Manejo visual de la carga de datos */}
                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '40px' }}>Cargando tus auditorías...</div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>Error: {error}</div>
                ) : (
                    <>
                        <Table columns={TABLE_COLUMNS} data={currentItems} />

                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            totalItems={filteredData.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={setCurrentPage}
                        />
                    </>
                )}
            </div>
        </Layout>
    );
};
export default TablaAuditorias;