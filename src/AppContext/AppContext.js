import React from 'react';

const AppContext = React.createContext({
    surfaceData: [],
    serverData: new Map()
});

export default AppContext;