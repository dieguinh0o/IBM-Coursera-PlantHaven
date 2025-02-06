import CartItem from '../types/CartItem';
import { getCart } from '../contexts/Cart';
import './Item-Checkout.css'

interface CheckoutCardProps {
  Item: CartItem;
}

export default function CheckoutCard(props: CheckoutCardProps) {

  const {Item, Quantity} = props.Item;
  const {setCart} = getCart();

  function handleAdd() {
    setCart(prevCart => {
      const itemInCart = prevCart.find(cartItem => cartItem.Item.Id === Item.Id);
      if (itemInCart) {
        return prevCart.map(cartItem =>
          cartItem.Item.Id === Item.Id
            ? { ...cartItem, Quantity: cartItem.Quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { Item, Quantity: 1 }];
      }
      return prevCart;
    });
  }
    

  function handleRemove() {
    setCart(prevCart => {
      const itemInCart = prevCart.find(cartItem => cartItem.Item.Id === Item.Id);
      if (itemInCart && itemInCart.Quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.Item.Id === Item.Id
            ? { ...cartItem, Quantity: cartItem.Quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart;
      }
    });
  }
      
    function handleRemoveFromCart() {
        return setCart(prevCart => prevCart.filter(itemToRemove => Item.Id != itemToRemove.Item.Id));
      }


  return (
    <div className='checkout-item-card'>
      <h2 className='item-name'>{Item.Name}</h2>
      <img src={Item.Image} alt={Item.Name} className='item-img'/>
      <p className="item-price">${Item.Price}</p>
      <div className='add-remove-container'>
        <p className='item-quantity-tooltip'>Quantity:</p>
        <div className='buttons-container'>
          <button className='item-btn item-btn-subtract' onClick={handleRemove}>-</button>
          <span className='item-quantity'>{Quantity}</span>
          <button className='item-btn item-btn-add' onClick={handleAdd}>+</button>
        </div>
        <button className='item-btn item-btn-remove' onClick={handleRemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  )
}