
//Imports
import React, { useEffect, useState } from "react";
import './blogspage.css';
import Navbar from '../../Navbar/Navbar';
import Heading from "../../Heading/Heading";
import BlogList from '../../BlogList/BlogList';
import Footer from '../../Footer/Footer';

//Data
import data from '../../../dummy-data.json';
let blogPosts = data.blogPosts;
const categories = data.categories;


//Blog Posts
export default function BlogsPage() {
  //States
  const [blogs, setBlogs] = useState(blogPosts);
  const [categoryId, setCategoryID] = useState(null);

  //Use Effect
  useEffect(() => {
    if (categoryId !== null) {
      const filterBlogs = blogPosts.filter((blog) =>
        blog.categories.some((category) => category.id === categoryId)
      );
      setBlogs(filterBlogs);
    } else {
      setBlogs(blogPosts); // Reset to all blogs if no category is selected
    }
  }, [categoryId]);

  const CategoriesList = () => {
    return categories.map((category, index) => (
      <button
        key={index}
        onClick={() => setCategoryID(category.id)}
        style={{ color: categoryId === category.id ? "rgb(93, 204, 252)" : "black" }}
      >
        <p>{category.title}</p>
      </button>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList />
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
