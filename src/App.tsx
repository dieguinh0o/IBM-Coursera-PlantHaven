import './App.css'
import Home from './pages/Home.tsx'
import Shop from './pages/Shop.tsx'
import Checkout from './pages/Checkout.tsx'
import Layout from './Layout.tsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { CartContext } from './contexts/Cart.jsx';
import { useEffect, useState } from 'react';
import Cart from './types/Cart-Interface.ts';

function App() {

  const [cart, setCart] = useState<Cart>([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);


  return (
      <CartContext.Provider value={{cart, setCart}}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop/>} />
              <Route path="/Checkout" element={<Checkout/>} />
            </Route>
          </Routes>
        </Router>
      </CartContext.Provider> 
  )
}

export default App
