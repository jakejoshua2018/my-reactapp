import React from 'react';


const AppContext = React.createContext( {

    authenticated: false,
    login: ( ) => { }   
});

export default AppContext;