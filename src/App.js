import './App.css';
import Home from './components/home/Home';
import Nav from './components/Navbar/Nav';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';
import Allproducts from './components/allproducts/Allproducts';
import { useState } from 'react';

function App() {
  const [cart, setcart] = useState([
    {
      id:4,
      product_name:'Air Max Ishod Shoes',
      price: 3456,
      product_image: require ('./assets/images/air-max-ishod-shoes-pJPHs6.png'),
      desc_tion:'Mens Sports Shoe',count:1
  },
  {
      id:5,
      product_name:'Blazer Mid Vintage Shoes',
      price: 3456,
      product_image: require ('./assets/images/blazer-mid-77-vintage-shoes-dNWPTj.png'),
      desc_tion:'Uni Sex Shoe',count:1
  },
  {
      id:6,
      product_name:'Court Royale 2 Low Shoe',
      price: 3456,
      product_image: require ('./assets/images/court-royale-2-low-shoe-fjdwrF.png'),
      desc_tion:'Mens Sports Shoe',count:1
  }
  ]);
  const [liked, setliked] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addcart = (clist) => {
    setcart([...cart, clist]);
    console.log(cart);
  };

  const addliked = (llist) => {
    setliked([...liked, llist]);
    console.log(liked);
  };

  return (
    <>
      <BrowserRouter>
        <Nav setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} addcart={addcart} addLiked={addliked} />} />
          <Route path='wishlist' element={<Wishlist cart={cart} setcart={setcart} liked={liked} setliked={setliked} />} />
          <Route path='cart' element={<Cart cart={cart} setcart={setcart} />} />
          <Route path='allproducts' element={<Allproducts searchQuery={searchQuery} addcart={addcart} addLiked={addliked} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
