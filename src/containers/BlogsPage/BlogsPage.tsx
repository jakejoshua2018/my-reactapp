import React, { Component } from 'react';
import { produce } from 'immer';
import { Route} from 'react-router-dom';

import Blog from '../../components/blog/Blog2';
import axios from '../../axios-blogs';
import AddBlog from '../../components/blog/AddBlog';
import Loader from '../../components/Loader/Loader';
import BlogDetails from '../../components/blog/BlogDetails';


class BlogsPage extends Component {

    state = {
        blogs: null,    //Model
        categories: null,
        error: false
    }

    selectedBlogHandler = ( blogId: any) => {

        //console.log('selectedBlogHandler', blogId);

        const blogs: any = this.state.blogs;
        const  updateBlogs: any = blogs.filter( (item: any) => item.id !== blogId);
        this.setState( {blogs: updateBlogs} );

    }

    addBlogHandler = ( title: string, content: string) => {

        //Save to backend layer and then update local state
        axios.post('/blogs', {title: title, content: content})
             .then( response => {

                let  updateBlogs: any = produce( this.state.blogs, (model: any) => {
                    model.push(response.data);
                } );
                this.setState( {blogs: updateBlogs, error: false} );

            })
            .catch(  error => {

                console.log('BlogPage addBlogHandler Error :',error);
                this.setState( {error: true} );
            });
    }

    render ( ) {

        console.log( 'BlogsPage : render =>', this.state.blogs );

        let blogs: any = this.state.blogs;
        //let blogsJSX = <p>Loading...</p>;
        let blogsJSX = <Loader/>;
       

        if ( blogs ) {
            blogsJSX = blogs.map( (item: any) => {
                return (
                <Blog 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    content={item.content} 
                    clicked={this.selectedBlogHandler}
                />)                
            })

        }

        if ( this.state.error ) {
            blogsJSX = <p>Error! please try again....</p>;
        }

        return (

            <div>
                <h3>Blogs page</h3>
                <br/>
                <AddBlog clicked={this.addBlogHandler}/>
                <br/>
                {blogsJSX}
                <br/>
                <Route path='/blogs/:id' component={BlogDetails}/>
            </div>      
        );      
    } 

    componentDidMount ( ) {

        console.log( 'BlogsPage : componentDidMount',this.props  );

        //Multiple AJAX call - Asynchronous
        let apis = [
            '/blogs',
            '/blogs/categories'
        ];

        let requests = apis.map( (item: any) => axios.get(item) );
        Promise.all(requests)
                .then( responses => {
                    const [ blogsResponse, categoriesResponse ] = [...responses];
                    this.setState( {blogs: blogsResponse.data, categories: categoriesResponse.data, error: false} );

                })
                .catch(  error => {
                    // handle error
                    console.log('BlogPage Axios Error :',error);
                    this.setState( {error: true} );
                });


        //Single AJAX call - Asynchronous
        // axios.get('/blogs')
        //      .then( response => {
        //         // handle success
        //         this.setState( {blogs: response.data, error: false} );

        //     })
        //     .catch(  error => {
        //         // handle error
        //         console.log('BlogPage Axios Error :',error);
        //         this.setState( {error: true} );
        //     })
        //     .then(function () {
        //         // always executed
        //     });
    }
    componentDidUpdate ( ) {
           console.log( 'BlogsPage : componentDidUpdate');
          }
}

export default BlogsPage;