// Imports
import React from "react";
import './categories.css';
import PropTypes from 'prop-types';

export default function Categories({ categories }) {
  return (
    <div className="flex-wrap">
      {categories.map((category, index) => {
        return (
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
        );
      })}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
