import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './containers/App';


const app = ( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render( app, document.getElementById('root') );

