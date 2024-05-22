

import React from 'react';
import Categories from '../Categories/Categories';

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>

            <div style={{margin: '0px 5%'}} className='container-fluid'>
                <a href="#" className='navbar-brand'>
                    iX Software Engineering Blog
                </a>

                <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>    
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <a href="#" className='nav-link active' aria-current='page'>
                                Home
                            </a>

                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link ' aria-current='page'>
                                Categories
                            </a>

                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link' aria-current='page'>
                                Blogs
                            </a>

                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link ' aria-current='page'>
                                About
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}


