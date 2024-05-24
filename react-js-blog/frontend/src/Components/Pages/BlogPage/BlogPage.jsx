
//Imports
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../dummy-data.json'; //data
import './blogpage.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

//Blog Page

export default function BlogPage() {

    //Vars
    const { blogId } = useParams();
    const blogPost = data.blogPosts.find(post => post.id.toString() === blogId);
    //No Blog Post 
    if (!blogPost) {
      return <div>No Blog post not found</div>;
    }
  
    return (

        <>

        <Navbar/>
        <div className="container">

        <h2 className='header'>Blog Reading Page</h2>

            <div className="blog-header">
            <img src={blogPost.image} alt="Blog" className="blog-image" />
            </div>
            <div className="blog-content">
                <h1>{blogPost.title}</h1>
                <p className="blog-date">Published on {new Date(blogPost.createdAt).toDateString()} by {blogPost.author.firstName} {blogPost.author.lastName}</p>
                {blogPost.content.map((section, index) => (
                    <div key={index} className="blog-section">
                    <p>{section.sectionText}</p>
                    </div>
                ))}
            </div>
            <div className="blog-footer">
            <div className="about-author">
                <h2>About the author</h2>
                <img src={blogPost.author.image} alt={blogPost.author.firstName} className="author-image" />
                <p>{blogPost.author.bio}</p>
            </div>
            </div>
            <Footer/>
        </div>
        
        
        </>

      
    );
  }

  