// Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogItemText from '../BlogItemText/BlogItemText';
import EditButtons from '../EditButtons/EditButtons';
import './blogitem.css';

export default function BlogItem({
  index,
  blogPost,
  setBlog,
  imageOrientation,
  setEditBlog,
  setDeleteBlog
}) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/blog/${blogPost.id}`);
  };

  return (
    <div
      key={index}
      className={imageOrientation === "top" ? "card-1" : "card-2"}
      onClick={handleNavigation}
    >
      <img
        src={blogPost.image}
        className={imageOrientation === "top" ? "card-img-top" : "card-img-left"}
        alt={blogPost.title}
      />
      <div className={imageOrientation === "top" ? "card-text-bottom" : "card-text-right"}>
        <BlogItemText blogPost={blogPost} headerFontSize="20px" />
        <EditButtons
          onEdit={() => setEditBlog(blogPost)}
          onDelete={() => setDeleteBlog(blogPost)}
        />
      </div>
    </div>
  );
}
