import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Stack, Typography} from "@mui/material";

const columns = [{id: 'currency', label: 'Currency', minWidth: 170, align: "left"}, {
    id: 'price', label: 'Price', minWidth: 170, align: 'center',
}, {
    id: 'change', label: 'Change', minWidth: 170, align: 'right'
},

];

function createData(currency, price, change) {
    return {currency, price, change};
}

const rows = [createData('CFT', '$1', "- 0.72%",), createData('USDT', '$10,023.00', "10.56%",), createData('ETH', '$6,000.00', "12%",),];

export default function BasicTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    return (<Paper sx={{width: '100%', mt: 4}} elevation={0}>
        <Stack direction={"row"} alignItems={"center"}>
            <Typography variant={"h5"} component={"div"} sx={{flexGrow: 1, fontFamily: "MuliBold"}}>
                Echanges Rate
            </Typography>
        </Stack>
        <TableContainer sx={{maxHeight: 440}}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (<TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                                top: 5,
                                minWidth: column.minWidth,
                                color: "#002554",
                                fontFamily: "MuliBold",
                                fontSize: "16px"
                            }}
                        >
                            {column.label}
                        </TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (<TableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{
                                '.MuiTableRow-root': {
                                    border: 0
                                }, '&:nth-of-type(odd)': {
                                    backgroundColor: "#FBF7F8",
                                    border: 0
                                },
                            }}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (<TableCell key={column.id} align={column.align} style={{
                                        color: "#002554",
                                        fontFamily: "MuliBold",
                                        fontSize: "16px"
                                    }}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>);
                                })}
                            </TableRow>);
                        })}
                </TableBody>
            </Table>
        </TableContainer>

    </Paper>);
}