import React from 'react';
// import Table from 'react-bootstrap/Table';
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableContainer,
} from '@windmill/react-ui'

function TableViewer(props) {
    const data = props.data || {};
    const columns = data.columns || [];
    const rows = data.rows || [];

    if (columns.length === 0 && rows.length === 0) {
        return <p className="text-gray-500 dark:text-gray-400">No data available.</p>;
    }

    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((element, index) => (
                            <TableCell key={index} style={{ textTransform: "capitalize" }}>
                                {element?.label?.length > 0 ? element.label : element?.name || ''}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {row.map((column, colIndex) => <TableCell key={colIndex}>{column}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableViewer;