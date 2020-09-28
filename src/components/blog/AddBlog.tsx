import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import DButton from '../UI/DButton';


interface props extends RouteComponentProps { 

    clicked: any;      
}

class AddBlog extends Component<props> {

    //Local Modal - not from backend
    state = {
        title: ' ',
        content: ' '
    }

    titleChangeHandler = ( event: any) => {

        this.setState( {title: event.target.value});

    }

    descriptionChangeHandler = ( event: any) => {

        this.setState( {content: event.target.value});

    }

    render ( ) {

        console.log( 'AddBlog : render' );
        return(
            <div>
                <input type="text" placeholder="Title" value={ this.state.title } onChange={this.titleChangeHandler}/>{ ' ' }
                <input type="text" placeholder="Description" value={ this.state.content } onChange={this.descriptionChangeHandler} />{ ' ' }
                <button onClick={ ( ) => this.props.clicked(this.state.title,this.state.content) }>Add Blog</button>
                <br />
                {/* <button onClick={ ( ) => this.props.history.goBack() }>Back</button> */}
                <br />
                <DButton variant="success" click={ ( ) => this.props.history.goBack()} title="Back"/>{ ' ' }
                <DButton variant="warning" click={ ( ) => this.props.history.goForward()} title="Forward"/>{ ' ' }
                <DButton variant="danger" click={ ( ) => this.props.history.push( '/' )} title="Push"/>{ ' ' }
                <DButton variant="primary" click={ ( ) => this.props.history.replace( '/services' )} title="Replace"/>
            </div>
        );      
    } 
    componentDidMount ( ) {

        console.log( 'AddBlog : componentDidMount',this.props  );

    }
    componentDidUpdate ( ) {
        
        console.log( 'AddBlog : componentDidUpdate' );

    }
    
}

export default withRouter(AddBlog);