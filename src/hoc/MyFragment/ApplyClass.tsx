import React from 'react';

const ApplyClass = ( InputComponent: any, className: string) => {

    return ( props: any ) => (

        <div className = {className}>
             <InputComponent { ...props } />
        </div> 

    );
}

export default ApplyClass; 