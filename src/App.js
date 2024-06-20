
import './App.css';
import Home from './components/home/Home';
import Nav from './components/Navbar/Nav';
import { Route,Routes, } from 'react-router-dom';

function App() {
  return (
   <>
   <Nav/>
   <Home/>
   </>
  );
}

export default App;
