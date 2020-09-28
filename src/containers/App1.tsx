import React, { Component, Fragment } from 'react';

//import logo from './logo.svg';
import './App.css';
//import Blog from '../components/blog/Blog';
import Blog from '../components/blog/Blog1';
import Header from '../components/header/Header';
import AppContext from '../context/AppContext';


class App extends Component {
   
  // Type-1
  // inputElementRef: any;

  // Type-2 (needs constructor also)
  //inputElementRef: RefObject<HTMLInputElement>;

  // constructor( props: any) {
  //   super( props );
  //   console.log( 'App Constructor' );

  //   this.inputElementRef = createRef<HTMLInputElement>( );
  // }

 //STATE
  // state = {
  //   blogs: null,
  //   showBlogs: false
  // }
  state = {
    blogs: [
      { id:"BL001", title: "IT Blog", content: "Description of IT Blog" },
      { id:"BL002", title: "Food Blog", content: "Description of Food Blog" },
      { id:"BL003", title: "Telecom Blog", content: "Description of Telecom Blog" }

    ], 
    showBlogs: false,
    counter: 0,
    authenticated: false 
  }

  //HANDLERS
  stateChangeHandler = ( ) => {
   // console.log("StateChangeHandler");
  
    this.setState( {
      blogs: [
      { id:"BL001", title: "IT Blog", content: "New Description IT Blog" },
      { id:"BL002", title: "Food Blog", content: "New Description of Food Blog" },
      { id:"BL003", title: "Travel Blog", content: "New Description of Travel Blog" }
    ]
    } );
  }
  toggleBlogsHandler = ( event: any ) => {
    //console.log("toggleBlogsHandler");
    this.setState( {showBlogs: !this.state.showBlogs} );
  }
  contentChangeHandler = ( event: any, id: string ) => {

   //console.log("ContentChangeHandler");
   //find blog based on id
   const blogIndex = this.state.blogs.findIndex( item => {
       return item.id === id;
    });

    //Duplicate Induvidual blog (Individual Array)& modify content
    const duplicateBlog = {...this.state.blogs[blogIndex]};
    duplicateBlog.content = event.target.value;

    //Duplicate blogs (List of arrays) and inject the new duplicated blog
    const duplicateBlogs = [...this.state.blogs];
    duplicateBlogs[blogIndex]=duplicateBlog;
     
    //this.setState( {blogs: duplicateBlogs, counter: this.state.counter + 1 } );
    this.setState( (prevState: any, prevProps: any) => {
      return { blogs: duplicateBlogs, counter: prevState.counter + 1 };
    });
  }
  deleteBlogsHandler = ( blogIndex: number ) => {
   // console.log("deleteBlogsHandler");
    const duplicateBlogs = [...this.state.blogs];
    duplicateBlogs.splice(blogIndex,1);
    this.setState( {blogs: duplicateBlogs} );
  }

  loginHandler = ( ) => {

    console.log( 'loginhandler' );
    this.setState( {authenticated: !this.state.authenticated} );
  }

  // static getDerivedStateFromProps(props: any, state: any) {
  //   console.log( 'App getDerivedStateFromProps' );
  //   return null;
  // }

  // shouldComponentUpdate (nextProps: any, nextState: any) {
  //   console.log( 'App shouldComponentUpdate' );
  //   return true;
  // }

  //RENDER
  render( ) {

    console.log("App render");
    let blogsJSX: any = null;
    if( this.state.showBlogs && this.state.blogs ) {

      blogsJSX = (
        <Fragment>
          {
            this.state.blogs.map( (item, index) => {
              return <Blog 
                key={item.id}
                title={ item.title }
                content={ item.content }
                clicked={ ( ) => this.deleteBlogsHandler( index )}
                changed={ (event: any) => this.contentChangeHandler( event, item.id )  }
              />
            })

          }
        </Fragment>
      );
    }

    let headerJSX = (
      <Header
      title = 'Welcome to Blog Page class!'
      length = {this.state.blogs.length}
      buttonState = 'State Change'
      stateClicked = {this.stateChangeHandler}
      buttonToggle = 'Toggle Blogs'
      toggleClicked = {this.toggleBlogsHandler}
      />
    );


    return (
      <div className="App"> 
        <AppContext.Provider value= { {authenticated: this.state.authenticated, login: this.loginHandler} }>
        { headerJSX }
        <h3>{this.state.counter}</h3>
        { blogsJSX }
        <br/>
        {/* <input type="text" ref={(element) => {this.inputElementRef = element}} /> */}
        {/* <input type="text" ref={this.inputElementRef} /> */}
        </AppContext.Provider>
      </div>  
    );
  }

//  getSnapshotBeforeUpdate (prevProps: any, prevState: any) {
//    console.log( 'getSnapshotBeforeUpdate' );
//    return null;
//  }
//  componentDidMount ( ) {
//    console.log( 'App componentDidMount' );

//   //  this.inputElementRef.focus( );
//   //  this.inputElementRef.current?.focus();
//  }
//  componentDidUpdate ( ) {
//   console.log( 'App componentDidUpdate' );
//  }
//  componentWillUnmount ( ) {
//   //*****cleanup codes*****
//   console.log( 'App componentWillUnmount' );
//  }

}

export default App;
