import React from 'react';
import { useParams } from 'react-router-dom';
import products_data from '../Products_data';
import '../Productdetails/product.css'

const Productdetails = ({addcart}) => {
  const { id } = useParams();
  const product = products_data.find((product) => product.id === parseInt(id));





  return (
    <>
      <section className='productdetails-container'>
        <div className='details-p' >
          <div className='p-img-container'>
            <h1 id='p-title'>{product.product_name}</h1>
            <img src={product.product_image} alt="" /></div>
          <div className='p-items-details'>
            <div className='p-i-details'>
           
              <h1>{product.product_name}</h1>
              <p>{product.desc_tion}</p>
              <div className='p-i-price'>
                <h3>&#8377; {product.price}</h3>
                <ul><li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li>
                  <li><i class='bx bxs-star'></i></li></ul></div>
              <h3>DESCRIPTION</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos, mollitia incidunt culpa minus similique, quam magnam praesentium quas molestiae quasi numquam perspiciatis. Inventore, magnam voluptatem quae qui nihil repellat!</p>
            </div>
            <div className='p-buttons'>
              <button onClick={() => addcart(product)}  >ADD TO CART</button>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productdetails;

