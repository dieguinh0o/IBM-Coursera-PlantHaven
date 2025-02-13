import './Checkout.css';
import { getCart } from '../contexts/Cart.jsx';
import CheckoutCard from '../components/Item-Checkout.js';
import { useState, useEffect } from 'react';
import Cart from '../types/Cart-Interface.js';
import { useNavigate } from "react-router-dom";

function CartTotalValue(cart: Cart) {
  return cart.reduce((total, item) => total + item.Item.Price * item.Quantity, 0);
}

export default function Checkout() { 
  const { cart } = getCart();
  const [totalPrice, setTotalPrice] = useState(CartTotalValue(cart));
  const [totalItems, setTotalItems] = useState(cart.length);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalPrice(CartTotalValue(cart));
    setTotalItems(cart.length);
  }, [cart]);

  function handleBackNavigate() {
    navigate(-1);
  }

  function handleCartLogic() {
    if (cart.length >= 1) {
      return (
        <ul className="cart-item-list">
          {cart.map((item) => (
            <li key={item.Item.Id} className='item-container'>
              <CheckoutCard Item={item} />
            </li>
          ))}
          <button>Checkout Coming Soon</button>
        </ul>
      );
    } else {
      return (
        <>
          <p>Cart is empty.</p>
          <button onClick={handleBackNavigate}>Return to Shop</button>
        </>
      );
    }
  }

  return (
    <div className="checkout-page">
      <div className='cartItems-container'>
        {handleCartLogic()}
      </div>
      <div className='cart-detail-container'>
        <h3>Total Price: ${totalPrice}</h3>
        <h6>Total Plants: {totalItems}</h6>
      </div>
    </div>
  );
}