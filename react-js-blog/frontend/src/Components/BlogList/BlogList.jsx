

import React from "react";
import PropTypes from "prop-types";
import "./bloglist.css";
import BlogItem from '../BlogItem/BlogItem';

export default function BlogList({ blogPosts }) {
  if (!blogPosts && !blogPosts?.length) {
    return null;
  }

  return (
    <div className="d-flex w-100">
      {blogPosts.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            index={index}
            blogPost={blog}
            setBlog={() => {}}
            imageOrientation={"top"}
          />
        );
      })}
    </div>
  );
}

BlogList.prototype = {
    blogPosts: PropTypes.array.isRequired,
};