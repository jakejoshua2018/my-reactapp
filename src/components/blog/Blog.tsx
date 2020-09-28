import React, { Fragment, useEffect, useRef, useContext} from 'react';

import './Blog.css';
import MyFragment from '../../hoc/MyFragment/MyFragment';
import AppContext from '../../context/AppContext';


function Blog( props: any) {

  const appContext = useContext( AppContext );  

  const inputElementRef = useRef<HTMLInputElement>(null);

  useEffect( ( ) => {

    console.log('Blog UserEffect');

    inputElementRef.current?.focus();

    // return ( ) => {
    //   console.log( 'Blog cleanup codes' );
    // }
  } );

  // useEffect( ( ) => {
  //   console.log( 'Blog useEffect : Content' );
  // }, [ props.content ] );

  // useEffect( ( ) => {
  //   console.log( 'Blog useEffect : Title' );
  // }, [ props.title ] );

  console.log( 'Blog render' );

  return (
    // <MyFragment className="blog">
    <Fragment>
      <p onClick={props.clicked}>{props.title}</p>
      <p>{props.content}</p>
      <input type="text" onChange={props.changed} value={props.content} ref={inputElementRef}/>
      <button onClick={appContext.login}>Log In</button>
    </Fragment>
    // </MyFragment>
  );
}

export default MyFragment( Blog, 'blog' );
