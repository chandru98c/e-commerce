import React from 'react'
import '../Navbar/nav.css'

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
                            <i class='bx bx-home-smile'></i>
                            <i class='bx bx-heart'></i>
                            <i class='bx bx-shopping-bag'></i>
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
                        <li><i class='bx bx-home-smile'></i></li>
                        <li><i class='bx bx-search'></i></li>
                        <li><i class='bx bx-heart'></i></li>
                        <li><i class='bx bx-shopping-bag'></i></li>
                        <li><i class='bx bx-user'></i></li>
                    </ul>
                </nav>
                </div>

        </>
    )
}
