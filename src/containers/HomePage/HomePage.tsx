import React, { Component } from 'react';


class HomePage extends Component {

    render( ) {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
          );
    }

    componentDidMount( ) {
        console.log('HomePage componentDidMount',this.props);
    }
}

export default HomePage;