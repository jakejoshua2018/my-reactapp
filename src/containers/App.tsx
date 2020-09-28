import React, { Component} from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';
import Layout from '../hoc/Layout/Layout1';
import ApplyClass from '../hoc/MyFragment/ApplyClass';
import BlogsPage from '../containers/BlogsPage/BlogsPage';
import HomePage from '../containers/HomePage/HomePage';
import ServicesPage from '../containers/ServicesPage/ServicesPage';
import AuthContext from '../context/AuthContext';


class App extends Component {

    state = {

        authenticated: false 

    }

    loginHandler = ( ) => {

        console.log( 'loginhandler: ',!this.state.authenticated);
        this.setState( {authenticated: !this.state.authenticated} );

    }
    
    render() {

        console.log( 'App : render' );
        return (
            <AuthContext.Provider value= { {authenticated: this.state.authenticated, login: this.loginHandler} }>            
                <Layout>
                    <Switch>
                        { this.state.authenticated ? 
                            <Route path='/services' component={ServicesPage}/>
                        :   <Route path='/services' render={ ( ) => <h1>Please Log In....</h1>}/>
                        } 
                         <Route path='/blogs' component={BlogsPage}/>
                        <Route path='/' exact component={HomePage}/>
                        {/* <Route path='/' render={ ( ) => <h1>Proxy Home Page</h1>}/> */}
                        {/* <Redirect from='/' to='/blogs'/> */}
                        <Route render={ ( ) => <h1>Page Not Found: 404</h1>}/>
                    </Switch>
                </Layout>
            </AuthContext.Provider> 
        );
    }
}

export default ApplyClass( App, 'App' );