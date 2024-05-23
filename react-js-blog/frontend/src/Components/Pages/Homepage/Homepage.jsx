

//Imports
import React from 'react'
import Heading from '../../Heading/Heading';
import Navbar from '../../Navbar/Navbar';
import BlogGrid from '../../Bloggrid/Bloggrid';
import Footer from '../../Footer/Footer';
import Subheading from '../../Subheading/Subheading';
import CategoryList from '../../Categorylist/CategoryList';

//Dummy Data




// Week 1: Import the blogPosts and categories from the dummy-data.json file
import data from '../../../dummy-data.json';
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function HomePage() {
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
