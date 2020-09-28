import React, { Component } from 'react'; 

import './Blog.css';
import AppContext from '../../context/AppContext';


interface props {
    title: string;
    content: string;
    clicked: any;
    changed: any;
}

class Blog1 extends Component<props> {

    static contextType = AppContext;

    render ( ) {

        return(
            <div className= 'blog'>
            <p onClick={this.props.clicked}>{this.props.title}</p>
            <p>{this.props.content}</p>
            <input type="text" onChange={this.props.changed} value={this.props.content}/>
            <button onClick={this.context.login}>Log In2</button>
            </div>
        );      
    } 
}

export default Blog1;