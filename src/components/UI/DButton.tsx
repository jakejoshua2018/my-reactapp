import React from 'react';
import {Button } from 'react-bootstrap';

const DButton = ( props: any ) => {

    
    return ( 
        
        <Button variant={props.variant}  onClick={props.click} > 
        {props.title} 
        </Button> 

    );
}

export default DButton; 