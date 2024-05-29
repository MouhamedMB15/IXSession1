// Imports

import React, { useEffect, useState } from 'react';
import './blogspage.css';
import Navbar from '../../Navbar/Navbar';
import Heading from "../../Heading/Heading";
import Footer from '../../Footer/Footer';
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ErrorToast from "../../ErrorToast/ErrorToast";
import SuccessToast from "../../SuccessToast/SuccessToast";
import CategoryList from "../../Categorylist/CategoryList";
import AddEditBlogModal from "../../AddEditBlogModal/AddEditBlogModal";
import DeleteBlogModal from "../../DeleteBlogModal/DeleteBlogModal";
import BlogList from '../../BlogList/BlogList';

// Services
import blogService from "../../../Services/BlogService";
import categoriesService from "../../../Services/CategoriesService";

// Blog Posts
export default function BlogsPage() {
  const { categoryId } = useParams();

  // States
  const [deleteBlog, setDeleteBlog] = useState({}); //delete blog
  const [addBlog, setAddBlog] = useState({});
  const [editBlog, setEditBlog] = useState({});
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const user = {}; // temp user contetn


  //Remove Blog
  const removeBlog = async (blog) => {
    try {
      setIsLoading(true);
      await blogService.deleteBlogsById(blog.id);
      setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== blog.id));
      setIsLoading(false);
      setIsSuccess(true);
      setMessage("Blog deleted successfully");
    } catch (error) {
      setIsError(true);
      setMessage(error.message || error);
      setIsLoading(false);
    }
  };


  // Add Blog
  const onAddBlog = () => {
    setAddBlog({
      image: "",
      title: "",
      description: "",
      categories: [],
      content: [],
      authorId: user?.id,
    });
  };
  //Add Blog Button
  const AddBlogButton = () => {
    return (
      <div className="add-blog-button">
        <p className="page-subtitle">Blog Posts</p>
        {user && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onAddBlog}
          >
            Add Blog Post
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const categoryResponse = await categoriesService.getCategories();
        setCategories(categoryResponse || []); 
        const blogPostsResponse = await blogService.fetchBlogsByCategoryId(categoryId);
        setBlogPosts(blogPostsResponse.data.reverse());
        setIsSuccess(true);
        setMessage(blogPostsResponse.message);
      } catch (error) {
        setIsError(true);
        setMessage(error.message || error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  };

  const resetError = () => {
    setIsError(false);
    setMessage("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoryList categories={categories} /> 
        </div>
        <AddBlogButton />
        <BlogList 
          blogPosts={blogPosts} 
          onEdit={setEditBlog}
          onDelete={setDeleteBlog}
        />
      </div>
      <Footer />
      
      <SuccessToast show={isSuccess} message={message} onClose={resetSuccess} />
      <ErrorToast show={isError} message={message} onClose={resetError} />
      
      <AddEditBlogModal
        addBlog={addBlog}
        editBlog={editBlog}
        categories={categories}
        createBlog={blogService.createBlog}
        updateBlog={blogService.updateBlog}
      />
      <DeleteBlogModal deleteBlog={deleteBlog} removeBlog={removeBlog} />
    </>
  );
}
