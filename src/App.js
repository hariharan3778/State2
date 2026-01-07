import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Product from './components/Product';
import CartSummary from './components/CartSummary';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

function App() {
  const[cart,setCart]=useState([]);
  return (
    <div className="App">
      <NavBar cartCount={cart.length}/>
      <ProductList cart={cart} setCart={setCart}/>
      <CartSummary cart={cart}/>
    </div>
  );
}

export default App;
