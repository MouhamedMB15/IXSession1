

//Imports
import React, { useEffect, useState } from 'react'
import Heading from '../../Heading/Heading';
import Navbar from '../../Navbar/Navbar';
import BlogGrid from '../../Bloggrid/Bloggrid';
import Footer from '../../Footer/Footer';
import Subheading from '../../Subheading/Subheading';
import CategoryList from '../../Categorylist/CategoryList';

//API Data
import BlogService from '../../../Services/BlogService';
import CategoriesService from '../../../Services/CategoriesService';



// Week 1: Import the blogPosts and categories from the dummy-data.json file
/** 
import data from '../../../dummy-data.json';
import Categories from '../../Categories/Categories';
const blogs = data.blogPosts.reverse();
const categories = data.categories;
**/

export default function HomePage() {

  //State
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState([]);

  //Blogs Service
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await BlogService.getBlogs();
        setBlogs(blogsRes);
      } catch(err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  //Cateogires Service
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesRes = await CategoriesService.getCategories();
        setCategories(categoriesRes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);



  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <Subheading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}
