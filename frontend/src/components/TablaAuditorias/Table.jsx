import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../../assets/styles/TablaAuditorias/tablaAuditorias.css';

const Table = ({ columns, data }) => {

    return (
    
        <div className="table-scroll-container">

            <table>
                <TableHeader columns={columns} />
                <tbody>

                    {data && data.length > 0 ? (
                        data?.map((row, index) => (
                            <TableRow 
                                key={`row-${index}`} 
                                rowData={row} 
                            />
                        ))
                        
                    ) : (

                        <tr>
                            <td colSpan={columns.length} className="no-data">
                                Sin auditorias registradas
                            </td>
                        </tr>   

                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;