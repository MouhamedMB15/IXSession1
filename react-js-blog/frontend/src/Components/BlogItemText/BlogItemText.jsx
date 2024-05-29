// Imports
import React from 'react';
import Categories from '../Categories/Categories';
import './blogitemtext.css';
import PropTypes from "prop-types";

export default function BlogItemText({ blogPost, headerFontSize }) {
  // Add safe navigation checks to avoid accessing undefined properties
  const author = blogPost?.author;
  const createdAt = blogPost?.createdAt;
  const title = blogPost?.title;
  const description = blogPost?.description;
  const categories = blogPost?.categories || [];

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p className="date-author-text">
          {author ? `${author.firstName} ${author.lastName}` : "Unknown Author"}
        </p>
        <div className="dot-divider"></div>
        <p className="date-author-text">
          {createdAt ? createdAt.substring(0, 10) : "Unknown Date"}
        </p>
      </div>
      <p
        style={{
          fontSize: headerFontSize,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {title || "No Title"}
      </p>
      <p style={{ fontSize: "16px", color: "#667085", textAlign: "left" }}>
        {description ? `${description.substring(0, 100)}...` : "No Description"}
      </p>
      <Categories categories={categories} />
    </div>
  );
}

BlogItemText.propTypes = {
  blogPost: PropTypes.shape({
    author: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    createdAt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.array,
  }).isRequired,
  headerFontSize: PropTypes.string.isRequired,
};
