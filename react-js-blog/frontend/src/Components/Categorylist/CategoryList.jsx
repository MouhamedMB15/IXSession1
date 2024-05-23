

import React from 'react';
import './categorylist.css';

import PropTypes from "prop-types";


export default function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "7px", border: "none", padding: "4px" }}
            onClick={() => {
              console.log("TODO: Navigate to categories page");
            }}
          >
            <div
              className="card-body"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(1, 100)} ...
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}