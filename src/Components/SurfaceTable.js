import React from 'react';
import DataTable from './DataTable';

const SurfaceTable = (props) => {
    const tableHead =[{id:'venueName', label:'Venue Name'},
        {id:'surfaceName', label:'Surface Name'},
        {id:'sport', label:'Sport'},
        {id:'status', label:'Status'}];

    return(
        <>{props.surfaceData.length > 0 ?<DataTable selectHandler={props.selectSurfaceHandler} selectedRow={props.selectedSurface} tableHead={tableHead} tableData={props.surfaceData}/> : null}</>
    );
}

export default SurfaceTable;