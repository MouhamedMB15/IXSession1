// Import necessary icons from react-icons
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import React from 'react';

// EditButtons Component
export default function EditButtons({ onEdit, onDelete }) {
  return (
    <>
      <button 
        style={{
          position: "absolute",
          top: "10px",
          right: "60px",
          zIndex: 1,
        }}
        type="button"
        className="btn btn-primary"
        onClick={onEdit}
      >
        <FaEdit />  
      </button>
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1,
        }}
        type="button"
        className="btn btn-secondary"
        onClick={onDelete}
      >
        <FaTrashAlt /> 
      </button>
    </>
  );
}
