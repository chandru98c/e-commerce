import React from 'react'
import '../../components/allproducts/allp.css'
import products_data from '../Products_data'
import '../allproducts/allp.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Allproducts({ addcart, addliked, searchQuery }) {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = products_data.filter((product) =>
    product.product_name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );
  return (
    <>
      <section className='all-p-section'>
        <div className='all-product-nav'>
          <ul>
            <Link to='/'><li >NEW ARRIVALS</li></Link>
            <li className='active-li'>ALL PRODUCTS</li>
          </ul>
        </div>

        <div className='products-items-container'>

          {filteredProducts.map((itemlist) =>
            <div className='product-item'  >
              <div className='img-like'>
                <img src={itemlist.product_image} alt="" onClick={()=>handleProductClick(itemlist.id)} /><i onClick={() => addliked(itemlist)} id='like-icon' class='bx bxs-heart'></i>
                <p className='like-icon-comment'>Add to WishList</p></div>
              <div className='product-details'>
                <h3>&#8377; {itemlist.price}</h3>
                <h4>{itemlist.product_name}</h4>
                <p>{itemlist.desc_tion}</p>
                <ul style={{ display: 'flex' }}><li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li></ul>
              </div>

              <button onClick={() => addcart(itemlist)} className='add-cart-icon'><span><i class='bx bx-shopping-bag'></i></span> <p className='cart-icon-comment'>Add to Cart</p></button>

            </div>
          )}
        </div>

      </section>
    </>
  )
}
