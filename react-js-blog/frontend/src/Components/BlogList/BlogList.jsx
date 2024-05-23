

import React from "react";
import PropTypes from "prop-types";
import "./bloglist.css";
import BlogItem from '../BlogItem/BlogItem';

export default function BlogList({ blogPosts }) {
  return (
    <div className="blog-list">
      {blogPosts.map((blogPost, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100%",
            }}
          >
            <BlogItem
              index={index}
              blogPost={blogPost}
              imageOrientation={"top"}
            />
          </div>
        );
      })}
    </div>
  );
}

BlogList.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};