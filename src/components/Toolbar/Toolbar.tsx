import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import classes from './Toolbar.module.css';
import AuthContext from '../../context/AuthContext';

const Toolbar = ( props: any ) => {

    const authContext = useContext(AuthContext);

    return ( 
        <Navbar bg="dark" variant="dark">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="mr-auto">
                <LinkContainer to="/" exact activeClassName={classes.active}>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blogs" activeClassName={classes.active}>
                    <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services" activeClassName={classes.active}>
                    <Nav.Link>Services</Nav.Link>
                </LinkContainer>
            </Nav>
            <Nav>
                <Nav.Link onClick={authContext.login}>
                    { authContext.authenticated ? 'Log Out' : 'Log In' }
                </Nav.Link>             
            </Nav>
        </Navbar>       
    );
}

export default Toolbar; 