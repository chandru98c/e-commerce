
import './App.css';
import Home from './components/home/Home';
import Nav from './components/Navbar/Nav';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';
import Allproducts from './components/allproducts/Allproducts';

function App() {
  return (
   <>

   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='wishlist' element={<Wishlist/>}></Route>
    <Route path='cart' element={<Cart/>}></Route>
    <Route path='allproduct' element={<Allproducts/>}></Route>
    </Routes>
    
    </BrowserRouter>
  
  
   </>
  );
}

export default App;
