import React, {useState} from 'react';
import DataTable from './DataTable';

const ServerTable = (props) => {

    const [selectServerRow, updateSelectServerRow] = useState(props.selectedSurface.server);

    const serverData = Array.from(props.serverData.keys()).map(key => {
        return props.serverData.get(key);
    });

    let selectedRow = props.selectedSurface.server;

    const tableHead =[{id:'ip4', label:'Ip4'},
        {id:'dns', label:'Dns'},
        ];

    const selectServerHandler = (event, data) => {
        updateSelectServerRow(data);
    }
        
    return(
        <>{serverData.length > 0 ?<DataTable selectHandler={selectServerHandler} selectedRow={selectServerRow} tableHead={tableHead} tableData={serverData}/> : null}</>
    );
}

export default ServerTable;