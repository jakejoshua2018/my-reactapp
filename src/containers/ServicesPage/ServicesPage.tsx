import React, { Component } from 'react';


class ServicesPage extends Component {

    render( ) {
        return (
            <div>
                <h1>Services Page</h1>
            </div>
          );
    }

    componentDidMount( ) {
        console.log('ServicesPage componentDidMount',this.props);
    }
}

export default ServicesPage;