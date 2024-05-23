
import React, { useState } from "react";
import './blogspage.css';
import Navbar from '../../Navbar/Navbar';
import Heading from "../../Heading/Heading";
import BlogList from '../../BlogList/BlogList';
import Categories from "../../Categories/Categories";
import CategoriesList from '../../Categorylist/CategoryList';
import Footer from '../../Footer/Footer';
import Subheading from "../../Subheading/Subheading";
import BlogGrid from "../../Bloggrid/Bloggrid";

//Data
import data from '../../../dummy-data.json';
let blogPosts = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {
  //Initializing our states:
  const [categoryId, setCategoryId] = useState();
  const [blogs, setBlogs] = useState([]);

  const CategoriesList = () => {
    return categories.map((category, index) => {
      return categoryId === category.id.toString() ? (
        <button
          key={index}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "blue" }}
        >
          <p key={index}>{category.title}</p>
        </button>
      ) : (
        <button
          key={index}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "black" }}
        >
          <p key={index}>{category.title}</p>
        </button>
      );
    });
  }

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
        <BlogList blogPosts={blogPosts} />
      </div>
      <Footer />
    </>
  );
}