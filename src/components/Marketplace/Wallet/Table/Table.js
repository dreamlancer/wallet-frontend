import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Stack, Typography} from "@mui/material";

const columns = [
        {id: 'name', label: 'Date', minWidth: 170},
        {id: 'code', label: 'Amount', minWidth: 100},
        {
            id: 'population',
            label: 'CF id',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'size',
            label: 'EOShash',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'density', label: 'Status', minWidth: 170, align: 'center',
        },
    ]
;

function createData(name, code, population, size, density) {
    return {name, code, population, size, density};
}

const rows = [
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
    createData('05/05/2021 at 12:50', '900CFT', "94f8f5799s9f8……..89d7sa8f790df", "-", "Success"),
];

export default function BasicTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (<Paper sx={{width: '100%', px: 4}} elevation={0}>
        <Stack direction={"row"} alignItems={"center"}>
            <Typography variant={"h1"} component={"div"} sx={{flexGrow: 1, fontFamily: "MuliBold", fontSize: "24px"}}>
                History
            </Typography>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    ".MuiTablePagination-actions": {
                        bgcolor: "#fee934",
                        color: "#212121",
                        borderRadius: "10px",
                    }
                }}
            />
        </Stack>
        <TableContainer sx={{maxHeight: 440}}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (<TableCell
                            key={column.id}
                            align={column.align}
                            style={{top: 5, minWidth: column.minWidth}}
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
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                                '.MuiTableRow-root': {
                                    borderRadius: "20px",
                                },
                                '&:nth-of-type(odd)': {
                                    backgroundColor: "#FBF7F8",
                                },
                            }}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (<TableCell key={column.id} align={column.align}>
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