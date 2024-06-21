import React from 'react'
import '../Navbar/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <header className='header'>
                {/* desktop view nav bar */}
                <nav className='nav-bar '>
                    <div className='logo-home logo-container'>
                        <h1>ShopHub</h1>



                        <div className='search-bar'>
                            <i class='bx bx-search'></i>
                            <input type="text" placeholder='Search...' />
                        </div>
                    </div>

                    <div className='user-options'>
                        <div className='liked-cart'>
                           <Link to='/'> <i class='bx bx-home-smile'></i></Link>
                           <Link to='wishlist'>  <i style={{cursor:'not-allowed'}} class='bx bx-heart'></i></Link>
                           <Link to='cart'> <i class='bx bx-shopping-bag'></i></Link>
                        </div>
                        <div className='user-icon'>
                            <button>Login</button>
                        </div>
                    </div>

                </nav>
                
            </header>
            {/* mobile view nav bar */}
            
            <div className='mobile-nav-container'><nav className='mobile-nav-bar'>
                    <ul>
                        <li><Link to='/'> <i class='bx bx-home-smile'></i></Link></li>
                        <li><i style={{cursor:'not-allowed'}} class='bx bx-search'></i></li>
                        <li>  <i style={{cursor:'not-allowed'}} class='bx bx-heart'></i></li>
                        <li> <Link to='cart'> <i class='bx bx-shopping-bag'></i></Link></li>
                        <li><i style={{cursor:'not-allowed'}} class='bx bx-user'></i></li>
                    </ul>
                </nav>
                </div>

        </>
    )
}
