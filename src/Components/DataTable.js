import React, {useEffect, useState} from 'react';
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
        border: '2px solid #eee',
        maxHeight: '500px', 
        '& thead th': {            
            border: '1px solid #eee',
            padding: '15px',
            fontWeight: 'bold',
            color: 'black',
            backgroundColor: '#eee'
        },
        '& tbody td': {
            fontWeight: 300
        },
        '& tbody tr:hover': {
            backgroundColor:'#64b5f6',
            cursor: 'pointer'
        } 
    },    
}));


const DataTable = (props) => {

    const classes = useStyles(0);

    const tableRows = props.tableData;
    const pages=[10, 50, 100, tableRows.length].sort(function(a, b){return a - b});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setrowsPerPage] = useState(pages[0]);

    useEffect(() => {           
        setrowsPerPage(pages[page]);        
    }, [tableRows.length]);

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
    <TableContainer style={{maxHeight: '420px', marginTop: '15px', }} >
        <Table stickyHeader aria-label="data table" className={classes.table} classes={{selected: classes.selected}}>
            <TableHead>
                <TableRow>
                    {props.tableHead.map(headElement => (<TableCell key={headElement.id}>{headElement.label}</TableCell>))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableRowsPaging().map((data, index) => {
                    return(
                        <TableRow selected={props.selectedRow.id === data.id} style={props.selectedRow.id === data.id ? {backgroundColor: '#2196f3'} : null} onClick={(event) => props.selectHandler(event, data)} key={data.id}>                            
                            {props.tableHead.map(headElement => (<TableCell style={props.selectedRow.id === data.id ? {color: '#fff'} : null} key={headElement.id}>{data[headElement.id]}</TableCell>))}
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