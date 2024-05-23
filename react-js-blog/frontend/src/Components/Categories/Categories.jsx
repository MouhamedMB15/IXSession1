import React from "react";

export default function Categories({ categories }) {
  if (!categories) {
    return <div>No categories available</div>;
  }

  return (
    <div className="flex-wrap">
      {categories.map((category, index) => (
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
