import React, { Fragment } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';


//METHOD - 1
const Layout1 = ( props: any ) => {

    return ( 
        <Fragment>
            <Toolbar/>
            <main>
                {props.children}
            </main>           
        </Fragment>
    );
}

export default Layout1; 