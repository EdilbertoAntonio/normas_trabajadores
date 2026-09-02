import { AUDITORIA_TABLA_COLUMNA } from "../../constants/ColumnasTablaAuditoria";

const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((columnKey, index) => (
                    /* Usamos la llave para obtener el nombre bonito del diccionario */
                    <th key={`header-${index}`}>{AUDITORIA_TABLA_COLUMNA[columnKey]}</th>
                ))}
            </tr>
        </thead>
    );
};
export default TableHeader;