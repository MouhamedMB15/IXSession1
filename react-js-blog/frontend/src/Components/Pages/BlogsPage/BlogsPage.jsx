//Imports
import React, { useEffect, useState } from "react";
import './blogspage.css';
import Navbar from '../../Navbar/Navbar';
import Heading from "../../Heading/Heading";
import BlogList from '../../BlogList/BlogList';
import Footer from '../../Footer/Footer';
import { useParams, Link } from "react-router-dom";

//Services
import blogService from "../../../Services/BlogService";
import categoriesService from "../../../Services/CategoriesService";

//Blog Posts
export default function BlogsPage() {


  const { categoryId } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const blogsRes = await blogService.getBlogsByCategoryId(categoryId);
      const categoriesRes = await categoriesService.getCategories();

      setBlogs(blogsRes);
      setCategories(categoriesRes);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }

    return categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
          onClick={() => setLoading(true)}
        >
          <p>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
          onClick={() => setLoading(true)}
        >
          <p key = {category.id}>{category.title}</p>
        </Link>
      );
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

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
