
import './App.css';
import Home from './components/home/Home';
import Nav from './components/Navbar/Nav';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';
import Allproducts from './components/allproducts/Allproducts';
import { useState } from 'react';

function App() {

const [cart, setcart] = useState([{
  id:3,
  product_name:'Mountain fly',
  price: 3456,
  product_image: require ('./assets/images/pegasus-41-road-running-shoes-RZm89S.png'),
  desc_tion:'Uni Sex Shoe',count:1
},
{
  id:4,
  product_name:'Mountain fly',
  price: 3456,
  product_image: require ('./assets/images/dunk-low-retro-shoe-66RGqF.png'),
  desc_tion:'Mens Road Runnind Shoe',count:1
},
{
  id:5,
  product_name:'Mountain fly',
  price: 3456,
  product_image: require ('./assets/images/revolution-7-easyon-road-running-shoes-nNqdwt.png'),
  desc_tion:'Mens Shoe',count:1
}]);
const [liked,setliked] = useState([]);


const addcart = (clist) => {
  setcart([...cart, clist])
  console.log(cart)
}


const addliked = (llist) => {
  setliked([...liked, llist])
  console.log(liked)
}



  return (
   <>

   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home  addcart={addcart} addliked={addliked} />}></Route>
    <Route path='wishlist' element={<Wishlist  cart={cart} setcart={setcart} liked={liked} setliked={setliked} />}></Route>
    <Route path='cart' element={<Cart cart={cart} setcart={setcart}  />}></Route>
    <Route path='allproducts' element={<Allproducts addcart={addcart}  addliked={addliked} />}></Route>
    </Routes>
    
    </BrowserRouter>
  
  
   </>
  );
}

export default App;
