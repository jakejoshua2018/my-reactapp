import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './Header.css';


const Header = ( props: any) => {

  console.log( 'Header render' );

    const appContext = useContext( AppContext );

    //styling
    const classes = [];
    if( props.length <= 2) {
      classes.push('red');
    }
    if( props.length <= 1) {
      classes.push('bold');
    }

    return (
        <div>
            <h1 className="red">{ props.title }</h1>
            <p className={classes.join(' ')}>{ props.subtitle }</p>
            <button onClick={ props.stateClicked }>{ props.buttonState }</button>
            <button onClick={ props.toggleClicked}>{ props.buttonToggle }</button>
            { appContext.authenticated? (<p>Authenticated</p>) : (<p>Please Login</p>) }
        </div>
   );
}

export default Header;
