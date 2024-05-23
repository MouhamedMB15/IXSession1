
//Imports
import { useState } from 'react'
import  Homepage  from './Components/Pages/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar'
import CategoriesPage from './Components/Pages/CategoriesPage/CategoriesPage';
import BlogsPage from './Components/Pages/BlogsPage/BlogsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';



function App() {
  return (
    <Router>
      <div className='App'>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;