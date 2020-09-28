import React, { Fragment } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import { Container, Row, Col } from 'react-bootstrap';


//METHOD - 1
const Layout = ( props: any ) => {

    return ( 
        <Fragment>
            <Container fluid ="sm">
                <Row>
                    <Col><Toolbar/></Col>
                </Row>
                <Row>
                    <Col>
                    <main>
                        {props.children}
                    </main>
                    </Col>  
                </Row>
                <Row>
                    <Col>{/* Footer */}</Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Layout; 