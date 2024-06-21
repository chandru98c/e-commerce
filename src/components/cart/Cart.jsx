import React, { useEffect, useState } from 'react';
import '../../components/cart/cart.css';
import img01 from '../../assets/images/7e94ebbaa1163bb7e4003f9e1879c91b.jpg'
import img02 from '../../assets/images/5cf6180733a55545edbb461cf5272058.jpg'

export default function Cart({ cart, setcart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const inc = (data, num) => {
    let findindex = cart.indexOf(data);
    if (cart[findindex].count + num < 0) {
      alert("Don't give negative value");
      return;
    }
    cart[findindex].count = cart[findindex].count + num;
    setcart([...cart]);
  }

  const remove = (cartitem) => {
    let removedata = cart.filter((del) => del.id !== cartitem.id);
    setcart(removedata);
  }

  useEffect(() => {
    let amt = 0;
    cart.forEach((item) => {
      amt += item.count * item.price;
    });
    setTotalPrice(amt);
  }, [cart]);

  return (
    <>
      <div className='top-section'>
        <h3>CART ITEMS</h3>
      </div>
      <div className='outer-div'>
        <section className='grid-2-section-cart'>
          <div className='content-cart'>
            <p>Your Legs Are Not Iron Rods</p>
            <h5> <span> Good Pair </span> Of Shoes <br /> Good Pair <span> Of Knees </span></h5>
            <button>Shop Now</button>
          </div>
        </section>
      </div>
      <section className='cart-container'>
        <div className='cart-add-details top-cart-add-details'>
          <h5>Total Price: &#8377; {totalPrice}</h5>
          <button>Buy Now</button>
        </div>

        <div className='advertisement'>
          <img src={img01} alt="" />
          <img src={img02} alt="" />
        </div>
        <div className='cart-container-div'>

          <div className='cart-items-only'>
            {cart.map((cartitem) => (
              <div className='cart-item-list' key={cartitem.id}>
                <img src={cartitem.product_image} alt="" />
                <span id='p-details'>
                  <h4>{cartitem.product_name}</h4>
                  <p>{cartitem.desc_tion}</p>
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <p>{cartitem.count}</p>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button onClick={() => inc(cartitem, 1)}><i class='bx bx-plus'></i></button>
                    <br />
                    <button onClick={() => inc(cartitem, -1)}><i class='bx bx-minus'></i></button>
                  </div>

                </div>
                <span>
                  <h4>&#8377; {cartitem.price}</h4>
                </span>
                <span>
                  <h5>Total for this item <br />&#8377; {cartitem.count * cartitem.price}</h5>
                </span>
                <div className='remove-btn-container'>
                  <button className='remove-btn' onClick={() => remove(cartitem)}><i class='bx bx-x'></i></button></div>
              </div>
            ))}
            {cart.map((cartitem) => (
              <div className='cart-item-list-m' key={cartitem.id}>
                <div className='items-img'>
                  <img src={cartitem.product_image} alt="" />
                  <div>
                    <h4>{cartitem.product_name}</h4>
                    <p>{cartitem.desc_tion}</p>
                    <h4>&#8377; {cartitem.price}</h4>
                  </div>
                </div>
                <div className='cart-function-m'>
                  <div>     <button onClick={() => inc(cartitem, -1)}><i class='bx bx-minus'></i></button>
                  
                    <p>{cartitem.count}</p>
                    <button onClick={() => inc(cartitem, 1)}><i class='bx bx-plus'></i></button>
                    
                    </div>
                    <button className='remove-btn-m' onClick={() => remove(cartitem)}><i class='bx bx-x'></i>Remove</button>
                </div>

                
                
              </div>




            ))}

          </div>
          <div className='right-container'>
            <div className='cart-add-details'>
              <h5>Total Price: &#8377; {totalPrice}</h5>
              <button>Buy Now</button>
            </div>
            <img src={img01} alt="" />
            <img src={img02} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
