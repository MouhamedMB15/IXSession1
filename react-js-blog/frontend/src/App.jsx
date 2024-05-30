
//Imports
import { useState } from 'react'
import  Homepage  from './Components/Pages/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar'
import CategoriesPage from './Components/Pages/CategoriesPage/CategoriesPage';
import BlogsPage from './Components/Pages/BlogsPage/BlogsPage';
import 'bootstrap/dist/css/bootstrap.min.css'; //Boot Strap
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import BlogPage from './Components/Pages/BlogPage/BlogPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';



function App() {
  return (
    <Router>
      <div className='App'>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} /> 
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/register' element={<Register/>}/>
          <Route path = '/about' element={<AboutPage/>}/>
          <Route path = '/blog/:categoryId?' element={<BlogsPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;