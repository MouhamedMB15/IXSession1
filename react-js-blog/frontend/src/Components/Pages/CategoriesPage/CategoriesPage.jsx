

// Third party
import React from "react";

// Components
import Navbar from  '../../Navbar/Navbar';
import Heading from '../../Heading/Heading';
import CategoryList from '../../Categorylist/CategoryList';
import Footer from '../../Footer/Footer';
import Subheading from "../../Subheading/Subheading";

// Styles


// Week 1: Import the blogPosts and categories from the dummy-data.json file
import data from '../../../dummy-data.json';
const categories = data.categories;

export default function CategoriesPage() {

  return (
    <>

    <Navbar/>
    <div className="container">
     
      <Heading/>
      <Subheading subHeading={'Categories'}/>
      <CategoryList categories={categories}></CategoryList>
      <Footer />
    </div>  


    </>
    
  );
}
