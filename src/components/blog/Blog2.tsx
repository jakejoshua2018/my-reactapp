import React, { Component } from 'react'; 
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

import './Blog.css';



interface props { 
    id: string;
    title: string;
    content: string;
    clicked: any;   
}

class Blog2 extends Component<props> {


    render ( ) {

        console.log( 'Blogs : render' );
        return(
            <div className= 'blog'>
                <h5 onClick={ ( ) => this.props.clicked(this.props.id) }>{this.props.title}</h5>
                <p>{this.props.content}</p>
                {/* <LinkContainer to={`/blogs/${this.props.id}/${this.props.title}`}> */}
                <LinkContainer to={`/blogs/${this.props.id}?title=${this.props.title}&content=${this.props.content}`}>
                    <Nav.Link>Detail...</Nav.Link>
                </LinkContainer>
            </div>
        );      
    } 
    componentDidMount ( ) {
        console.log( 'Blogs : componentDidMount',this.props );
       }
    componentDidUpdate ( ) {
        console.log( 'Blogs : componentDidUpdate' );
       }
    
}

export default Blog2;