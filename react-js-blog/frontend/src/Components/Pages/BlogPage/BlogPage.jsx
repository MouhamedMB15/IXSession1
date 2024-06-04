// Imports
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Loading from '../../Loading/Loading';
import SuccessToast from '../../SuccessToast/SuccessToast';
import ErrorToast from '../../ErrorToast/ErrorToast';
import blogService from '../../../Services/BlogService';
import Categories from '../../Categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';


// Blog Page
export default function BlogPage() {

  //State Managers
  const { blogId } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);   
  const [message, setMessage] = useState("");

  //Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await blogService.fetchBlogByID(blogId);
        setBlog(response.data);
        setIsSuccess(true);
        setMessage(response.message);
      } catch (error) {
        setIsError(true);
        setMessage(error.message || error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [blogId]);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  };

  const resetError = () => {
    setIsError(false);
    setMessage("");
  };

  if (isLoading || !blog) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <img src={blog.image} className="my-3 cover-img" alt="..." />
        <div className="row g-5">
          <div className="col-md-8">
            <article className="blog-post">
              <div className="my-5">
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-meta">
                  {blog.updatedAt ? blog.updatedAt.slice(0, 10) : 'Unknown date'} by{" "}
                  
                  <Link to={blog.author ? `/profile/${blog.author.id}` : '#'}>
                    {blog.author ? `${blog.author.firstName} ${blog.author.lastName}` : 'Unknown author'}
                  </Link>
                </p>
                <p>{blog.description}</p>
                <Categories categories={blog.categories} />
              </div>
              <hr />
              {blog.content.map((content, index) => (
                <div key={index} className="my-5">
                  <h2 className="my-3">{content.sectionHeader}</h2>
                  <p>{content.sectionText}</p>
                </div>
              ))}
            </article>
          </div>
          <div className="author col-md-4">
            <div className="position-sticky my-5" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About the author</h4>
                <img src={blog.image} className="avatar" alt="..." />
                <p>{blog.author.bio.substring(0, 100)}...</p> 
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={resetSuccess}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={resetError}
      />
    </>
  );
}
