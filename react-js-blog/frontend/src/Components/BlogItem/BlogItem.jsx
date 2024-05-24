
//Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogItemText from '../BlogItemText/BlogItemText';
import './blogitem.css';



export default function BlogItem({
  index,
  blogPost,
  imageOrientation,
}) {

  //Navifate react router
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/blog/${blogPost.id}`);
  };

  if (imageOrientation === "top") {
    return (
      <div key={index} className="card-1" onClick={handleNavigation}>
        <img src={blogPost.image} className="card-img-top" alt="Blog Post" />
        <div className="card-text-bottom">
          <BlogItemText blogPost={blogPost} headerFontSize="20px" />
        </div>
      </div>
    );
  } else {
    return (
      <div key={index} className="card-2" onClick={handleNavigation}>
        <img src={blogPost.image} className="card-img-left" alt="Blog Post" />
        <div className="card-text-right">
          <BlogItemText blogPost={blogPost} headerFontSize="20px" />
        </div>
      </div>
    );
  }
}

