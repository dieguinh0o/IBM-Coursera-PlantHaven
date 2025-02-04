import './Checkout.css';
import {getCart} from '../contexts/Cart.jsx';


export default function Checkout() {

  const {cart} = getCart();

  return (
    <div>
      <h1>Cart</h1>
      <div className='cart-container'>
        <ul className="cart-item-list">
          {cart.map((item) => (
            <li key={item.Item.Id} className='item-container'>
              <h2 className='item-name'>{item.Item.Name}</h2>
              <img src={item.Item.Image} alt={item.Item.Name} className='item-img'/>
              <p className="item-price">{item.Item.Price}</p>
              <p className='item-quantity-tooltip'>Quantity:</p>
              <button className='item-btn item-btn-subtract'>-</button>
              <span className='item-quantity'>{item.Quantity}</span>
              <button className='item-btn item-btn-add'>+</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}