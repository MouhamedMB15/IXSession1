
//Imports
import React, { useEffect, useState } from "react";
import './blogspage.css';
import Navbar from '../../Navbar/Navbar';
import Heading from "../../Heading/Heading";
import BlogList from '../../BlogList/BlogList';
import Footer from '../../Footer/Footer';

//Services
import BlogService from '../../../Services/BlogService';
import CategoriesService from '../../../Services/CategoriesService';
import categoriesIDService from "../../../Services/CategoriesIDService";


//Data
import data from '../../../dummy-data.json';
let blogPosts = data.blogPosts; //Blog Post
const categories = data.categories; //Categories


//Blog Posts
export default function BlogsPage() {
  //States
  const [blogs, setBlogs] = useState(blogPosts);
  const [categoryId, setCategoryID] = useState(null);

  //Use Effect
  const callbackFunction = () => {
    if (categoryId) {
      const filterBlogs = blogPosts.filter((blog) => {
        return blog.categories.some((category) => category.id === categoryId);
      });
      setBlogs(filterBlogs);
    }
  };
  useEffect(callbackFunction, [categoryId]);

  //Category List

  const CategoriesList = ({ categoryId }) => {
    return categories.map((category) => {
      return categoryId === category.id ? (
        <button
          key={category.id}
          onClick={() => setCategoryID(category.id)}
          style={{ color: "rgb(93, 204, 252)" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      ) : (
        <button
          key={category.id}
          onClick={() => setCategoryID(category.id)}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>

      <Footer />
    </>
  );
}