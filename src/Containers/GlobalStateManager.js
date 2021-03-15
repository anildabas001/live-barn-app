import React, {useState, useEffect} from 'react';
import AppContext from '../AppContext/AppContext';

const GlobalStateManager = (props) => {
    let timer;

    const [AppData, updateAppData] = useState({
        surfaceData: [],
        serverData: new Map()
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        timer = setInterval(function fetchAppData(){
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
            updateAppData(state => {
                return ({
                    ...state,
                    surfaceData: [...surfaceData],
                    serverData: serverData
                })
            });     
            setError(false);       
        }).catch(err => setError(true));
        return fetchAppData;
        }(), 60000);    
        
        return () => {clearInterval(timer);}

    }, []);

    return(
        <AppContext.Provider value={{surfaceData: AppData.surfaceData, serverData: AppData.serverData, error: error}}>
            {props.children}
        </AppContext.Provider>
    );
}

export default GlobalStateManager;