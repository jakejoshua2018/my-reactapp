import React from 'react';


//METHOD - 1
// const MyFragment = ( props: any ) => {

//     return ( 
//         <div className = {props.className}>
//             {props.children}
//         </div> 
//     );
// }

//METHOD - 2
const MyFragment = ( InputComponent: any, className: string) => {

    return ( props: any ) => (

        <div className = {className}>
             <InputComponent { ...props } />
        </div> 

    );
}



export default MyFragment; 