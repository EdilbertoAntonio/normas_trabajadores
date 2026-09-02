import { AUDITORIA_TABLA_COLUMNA } from "../../constants/ColumnasTablaAuditoria";

const TableRow = ({ rowData }) => {
    if (!rowData) return null;
    const columnKeys = Object.keys(AUDITORIA_TABLA_COLUMNA);

    const getFormattedValue = (key) => {
        const value = rowData[key];
        // fecha a formato local
        if (key === 'created_at' && value) {
            return new Date(value).toLocaleDateString('es-MX');
        }

        if (key === 'id' && value) {
            return value.substring(0, 8).toUpperCase();
        }

        return value;

    };

    return (
        <tr>
            {columnKeys.map((key) => (
                <td key={key}>{getFormattedValue(key)}</td>
            ))}
        </tr>
    );
};
export default TableRow;