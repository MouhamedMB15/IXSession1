import React from "react";
import './categories.css';

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => (
        <p
          key={index}
          className="category-tag"
          style={{
            color: category.color,
            backgroundColor: category.color + "33",
          }}
        >
          {category.title}
        </p>
      ))}
    </div>
  );
}
