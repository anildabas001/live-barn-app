import React, {useEffect, useState, useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import DetailsPanel from '../Components/DetailsPanel';
import Grid from '@material-ui/core/Grid';
import SurfaceTable from '../Components/SurfaceTable';
import ServerTable from '../Components/ServerTable';
import DataTabs from '../Components/DataTabs';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import {Search} from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import AppContext from '../AppContext/AppContext';


const DataPage = () => {

    const AppData = useContext(AppContext);

    let filteredSurfaceData = [];
    let filteredServerData = new Map();
    
    const [selectedComponent, updateSelectedComponent] = useState({
        id: 'surfaces'
    });

    const [selectedSurface, updateSelectedSurface] = useState({});

    const [filterValue, updateFilterValue] = useState(null);    

    useEffect(() => {
        if(AppData.surfaceData.length > 0 && !selectedSurface['id']) {
            updateSelectedSurface(AppData.surfaceData[0]);
        }              
    },[AppData.surfaceData]);
   
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

    const searchHandler = (event) => {
        updateFilterValue(event.target.value);
    }

    if (filterValue === null) {
        filteredSurfaceData = AppData.surfaceData;
        filteredServerData = AppData.serverData;
    }
    else {
        filteredSurfaceData = AppData.surfaceData.filter((surface) => {
            if (!filteredServerData.has(surface.server.id) && surface.venueName.toLowerCase().includes(filterValue.toLowerCase())) {
                filteredServerData.set(surface.server.id, surface.server);
            }       

            return surface.venueName.toLowerCase().includes(filterValue.toLowerCase())});
    }
    
    let SelectComponent = selectedComponent.id === 'surfaces' ? <SurfaceTable surfaceData={filteredSurfaceData} selectSurfaceHandler={selectSurfaceHandler} selectedSurface={selectedSurface} /> : <ServerTable serverData={filteredServerData} selectedSurface={selectedSurface} />
    
    return (<>{ !AppData.error ?
        <Paper style={{minHeight: '85vh', padding: '10px'}}>
             <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={9}>
                    <Toolbar style={{padding: '0px'}}>
                        <TextField onChange={searchHandler} size='small' style={{width: '100%', marginBottom: '15px'}} placeholder='Search Venue Name' InputProps={{startAdornment: <InputAdornment position="start"><Search /></InputAdornment>}} id="search-surface" variant='outlined' />                            
                    </Toolbar>
                    <DataTabs tabId={selectedComponent.id} handleChange={handleChange}/>
                    {SelectComponent}
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <DetailsPanel details = {selectedSurface.id ? {...selectedSurface, serverIp: selectedSurface.server.ip4} : selectedSurface}/>
                </Grid>
             </Grid>
        </Paper> : <p style={{color: 'red',}}>Something went wrong</p>
    }</>
    );                   
}

export default DataPage;