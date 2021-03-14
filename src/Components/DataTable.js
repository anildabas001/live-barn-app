import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles(theme => ({
    table: {
        // marginTop: theme.spacing(3),
        border: '2px solid #eee',
        maxHeight: '500px', 
        '& thead th': {
            padding: '12px',
            fontWeight: 'bold',
            color: 'black',
            backgroundColor: '#eee'
        },
        '& tbody td': {
            fontWeight: 300
        },
        '& tbody tr:hover': {
            backgroundColor:'#fffbf2',
            cursor: 'pointer'
        }
    }
}));


const DataTable = (props) => {
    const classes = useStyles(0);
    const tableRows = props.surfaceData;
    const pages=[50, 100, tableRows.length];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setrowsPerPage] = useState(pages[page]);

    const pageChangeHandler = (event, newPage) => {
        setPage(newPage);
    }

    const changeRowsPerPageHandler = (event) => {
        setrowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    }

    const tableRowsPaging = () => {
        return tableRows.slice(page*rowsPerPage, (page+1)*rowsPerPage);
    }

    return (<>
    <TableContainer style={{maxHeight: '500px', marginTop: '15px', }} >
        <Table stickyHeader aria-label="data table" className={classes.table}>
            <TableHead>
                <TableRow>
                    {props.tableHead.map(headElement => (<TableCell key={headElement.id}>{headElement.label}</TableCell>))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableRowsPaging().map((data, index) => {
                    return(
                        <TableRow selected={props.selectedRow.id === data.id} onClick={(event) => props.selectHandler(event, data)} key={data.id}>
                            <TableCell>{data.venueName}</TableCell>
                            <TableCell>{data.surfaceName}</TableCell>
                            <TableCell>{data.sport}</TableCell>
                            <TableCell>{data.status}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>            
        </Table>
    </TableContainer>
    <TablePagination onChangeRowsPerPage={changeRowsPerPageHandler} onChangePage={pageChangeHandler} component='div' page={page} count={tableRows.length} rowsPerPage={rowsPerPage} rowsPerPageOptions={pages}/>    
  </>);
}

export default DataTable;