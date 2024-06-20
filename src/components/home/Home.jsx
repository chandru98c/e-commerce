import React from 'react'
import '../home/home.css'
import { Link } from 'react-router-dom'
import Products from '../Products' 



export default function Home() {
  return (
    <>
      <section className='top-section home-section'>
        <div className='grid-2-section'>
          <div className='content-home'>
            <p>Your Legs Are Not Iron Rods</p>
            <h5> <span> Good Pair </span>   Of Shoes  <br />  Good Pair <span> Of Knees </span></h5>
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

  {Products.map((itemlist)=>
  <div className='product-item'>
  <div className='img-like'>
    <img src={itemlist.product_image} alt="" /><i id='like-icon' class='bx bxs-heart'></i>
    <p className='like-icon-comment'>Add to WishList</p></div>
  <div className='product-details'>
    <h3>{ itemlist.price}</h3>
    <h4>{ itemlist.product_name}</h4>
    <p>{itemlist.desc_tion}</p>
    <ul style={{ display: 'flex' }}><li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li>
      <li><i class='bx bxs-star'></i></li></ul>
  </div>

  <div className='add-cart-icon'><span><i class='bx bx-shopping-bag'></i></span> <p className='cart-icon-comment'>Add to Cart</p></div>

</div>
  )}
</div>

        {/* <div className='product-item'>
          <div className='img-like'>
            <img src={img1} alt="" /><i id='like-icon' class='bx bxs-heart'></i>
            <p className='like-icon-comment'>Add to WishList</p></div>
          <div className='product-details'>
            <h3>&#8377; 5465</h3>
            <h4>Shoe</h4>
            <p>ewefw wienfi iwjrij</p>
            <ul style={{ display: 'flex' }}><li><i class='bx bxs-star'></i></li>
              <li><i class='bx bxs-star'></i></li>
              <li><i class='bx bxs-star'></i></li>
              <li><i class='bx bxs-star'></i></li>
              <li><i class='bx bxs-star'></i></li></ul>
          </div>

          <div className='add-cart-icon'><span><i class='bx bx-shopping-bag'></i></span> <p className='cart-icon-comment'>Add to Cart</p></div>

        </div> */}
      </section>

    </>
  )
}
