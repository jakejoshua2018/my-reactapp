import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import * as QueryString from 'query-string';

import classes from './BlogDetails.module.css';


interface MatchParams {
    id: string;
}
interface props extends RouteComponentProps<MatchParams> { 

          
}


class BlogDetails extends Component<props> {

    render( ) {
        const params = QueryString.parse(this.props.location.search);

        return (
            <div className={classes.blogDetails}>
                <h1>Blog Details</h1>
                <br/>
                <h3>Id: {this.props.match.params.id}</h3> 
                <h2>{params.title}</h2>
                <p>{params.content}</p>
            </div>
          );
    }

    componentDidMount( ) {
        console.log('BlogDetails componentDidMount',this.props);
    }
}

export default withRouter(BlogDetails);