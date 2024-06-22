import React, { useState } from 'react';
import '../Navbar/nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ setSearchQuery, cart }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchQuery(value);
    };


    const cartlen = cart.length
    const iconlen = {
        position: 'absolute',
        top: '0',
        right: '0',
        borderRadius: '50%',
        color: 'black',
        fontWeight: '700',
        background: 'white',
        borderRadius: '8px',
        padding: '0 4px',
        fontSize: '11px',
        cursor: 'pointer'
    }

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
                        <div className='liked-cart'><ul style={{ display: 'flex' }}>
                            <li><Link to='/'> <i className='bx bx-home-smile'></i></Link></li>
                            <li><Link to='wishlist'>  <i style={{ cursor: 'not-allowed' }} className='bx bx-heart'></i></Link></li>
                            <li style={{ position: 'relative' }}> <Link to='cart'> <i className='bx bx-shopping-bag'></i></Link> <p style={iconlen}>{cartlen}</p></li></ul>
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
                        <li><i style={{ cursor: 'not-allowed' }} className='bx bx-heart'></i></li>
                        <li><i style={{ cursor: 'not-allowed' }} className='bx bx-search'></i></li>
                        <li style={{ position: 'relative' }}><Link to='cart'><i className='bx bx-shopping-bag'></i>  <p style={iconlen}>{cartlen}</p></Link></li>
                        <li><i style={{ cursor: 'not-allowed' }} className='bx bx-user'></i></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
