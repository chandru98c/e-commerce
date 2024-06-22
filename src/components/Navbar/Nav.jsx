import React, { useState } from 'react';
import '../Navbar/nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ setSearchQuery }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchQuery(value);
    };

    return (
        <>
            <header className='header'>
                <nav className='nav-bar '>
                    <div className='logo-home logo-container'>
                        <h1>ShopHub</h1>
                        <div className='search-bar'>
                            <i className='bx bx-search'></i>
                            <input 
                                type="text" 
                                placeholder='Search...' 
                                value={inputValue} 
                                onChange={handleInputChange} 
                            />
                        </div>
                    </div>
                    <div className='user-options'>
                        <div className='liked-cart'>
                           <Link to='/'> <i className='bx bx-home-smile'></i></Link>
                           <Link to='wishlist'>  <i style={{cursor:'not-allowed'}} className='bx bx-heart'></i></Link>
                           <Link to='cart'> <i className='bx bx-shopping-bag'></i></Link>
                        </div>
                        <div className='user-icon'>
                            <button>Login</button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='mobile-nav-container'>
                <nav className='mobile-nav-bar'>
                    <ul>
                        <li><Link to='/'> <i className='bx bx-home-smile'></i></Link></li>
                        <li><i style={{cursor:'not-allowed'}} className='bx bx-search'></i></li>
                        <li><i style={{cursor:'not-allowed'}} className='bx bx-heart'></i></li>
                        <li><Link to='cart'><i className='bx bx-shopping-bag'></i></Link></li>
                        <li><i style={{cursor:'not-allowed'}} className='bx bx-user'></i></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
