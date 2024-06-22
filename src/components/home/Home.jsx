import React from 'react';
import '../home/home.css';
import { Link } from 'react-router-dom';
import products_data from '../Products_data' 

export default function Home({ searchQuery, addcart, addliked }) {
  const filteredProducts = products_data.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
);

    const displayedProducts = filteredProducts.slice(0,7)

    return (
        <>
            <section className='top-section home-section'>
                <div className='grid-2-section'>
                    <div className='content-home'>
                        <p>Your Legs Are Not Iron Rods</p>
                        <h5> <span> Good Pair </span> Of Shoes <br /> Good Pair <span> Of Knees </span></h5>
                        <button>Shop Now</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='product-nav'>
                    <ul>
                        <li className='active-li'>NEW ARRIVALS</li>
                        <Link to='allproducts'><li>ALL PRODUCTS</li></Link>
                    </ul>
                </div>
                <div className='products-items-container'>
                    {displayedProducts.map((itemlist) =>
                        <div key={itemlist.id} className='product-item'>
                            <div className='img-like'>
                                <img src={itemlist.product_image} alt="" />
                                <i onClick={() => addliked(itemlist)} id='like-icon' className='bx bxs-heart'></i>
                                <p className='like-icon-comment'>Add to WishList</p>
                            </div>
                            <div className='product-details'>
                                <h3>&#8377; {itemlist.price}</h3>
                                <h4>{itemlist.product_name}</h4>
                                <p>{itemlist.desc_tion}</p>
                                <ul style={{ display: 'flex' }}>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                </ul>
                            </div>
                            <button onClick={() => addcart(itemlist)} className='add-cart-icon'>
                                <span><i className='bx bx-shopping-bag'></i></span>
                                <p className='cart-icon-comment'>Add to Cart</p>
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
