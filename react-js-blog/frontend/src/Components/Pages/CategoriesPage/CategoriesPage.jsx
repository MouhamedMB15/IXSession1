

// Third party
import React from "react";

// Components
import Navbar from  '../../Navbar/Navbar';
import Heading from '../../Heading/Heading';
import CategoryList from '../../Categorylist/CategoryList';
import Footer from '../../Footer/Footer';
import Subheading from "../../Subheading/Subheading";
import { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import ErrorToast from "../../ErrorToast/ErrorToast";
import SuccessToast from "../../SuccessToast/SuccessToast";

// Styles


// Week 1: Import the blogPosts and categories from the dummy-data.json file
// import data from '../../../dummy-data.json';
// const categories = data.categories;


// Services
import categoriesService from '../../../Services/CategoriesService';

// Categories Page
export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categoriesData = await categoriesService.getCategories();
        setCategories(categoriesData);
        setIsSuccess(true);
        setMessage("Categories fetched successfully");
      } catch (error) {
        setIsError(true);
        setMessage(error.message || "Error fetching categories");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const resetError = () => {
    setIsError(false);
    setMessage("");
  };

  const resetSuccess = () => {
    setIsSuccess(false);
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
        <Subheading subHeading={'Categories'} />
        <CategoryList categories={categories} />
        <Footer />
      </div>
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
