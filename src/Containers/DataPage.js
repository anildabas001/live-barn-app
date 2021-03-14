import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import DetailsPanel from '../Components/DetailsPanel';
import Grid from '@material-ui/core/Grid';
import DataTable from '../Components/DataTable';
import SurfaceTable from '../Components/SurfaceTable';
import ServerTable from '../Components/ServerTable';
import DataTabs from '../Components/DataTabs';

const DataPage = () => {
    const [surfaceData, updateSurfaceData] = useState({
        surfaceData: [],
        serverData: {}
    });
    
    const [selectedComponent, updateSelectedComponent] = useState({
        id: 'surfaces'
    });

    const [selectedSurface, updateSelectedSurface] = useState({});

    const [filterData, updateFilterData] = useState({
        filterFlag: true,
        filteredSurfaceData: null
    });

    useEffect(() => {
        fetch('https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project')
        .then(response => response.json())
        .then((data) => {
            const surfaceData = data;
            let serverData = new Map();
            surfaceData.forEach((surfaceObj) => {
                 if(!serverData.has(surfaceObj.server.id)) {
                     serverData.set(surfaceObj.server.id, surfaceObj.server)
                 }
            })
            
            updateSelectedSurface(surfaceData[0]);
            updateSurfaceData(state => {
                return ({
                    ...state,
                    surfaceData: [...surfaceData],
                    serverData: serverData
                })
            });            
        })
    }, []);

   
    const handleChange = (event, id) => {
        if (id === 'surfaces') {
            updateSelectedComponent(state => {
                return {
                    id: 'surfaces'
                }
            })
        }
        else {
            updateSelectedComponent(state => {
                return {
                    id: 'servers'
                }
            })
        }
    }

    const selectSurfaceHandler = (event, selectedSurface) => {
        updateSelectedSurface(selectedSurface);
    }

    const SelectComponent = selectedComponent.id === 'surfaces' ? <SurfaceTable surfaceData={surfaceData.surfaceData} selectSurfaceHandler={selectSurfaceHandler} selectedSurface={selectedSurface} /> : <ServerTable />

            
    console.log(surfaceData);

    return (
        <Paper style={{minHeight: '85vh', padding: '10px'}}>
             <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={9}>
                    <Paper>xs=12</Paper>
                    <DataTabs tabId={selectedComponent.id} handleChange={handleChange}/>
                    {SelectComponent}
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <DetailsPanel />
                </Grid>
             </Grid>
        </Paper>
    );                   
}

export default DataPage;