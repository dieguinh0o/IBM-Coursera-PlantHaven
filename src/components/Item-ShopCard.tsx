import {useEffect, useState} from 'react';
import './Item-ShopCart.css';
import CatalogItem from '../types/CatalogItem';
import {getCart} from '../contexts/Cart.tsx';
import CartItem from '../types/CartItem.ts';

interface ShopItemCardProps {
  Item: CatalogItem;
}
function ButtonState(state:Boolean) {
  if (state) {
      const text = 'Remove from Cart';
      const color = 'red';
      return {text, color};
  } else {
      const text = 'Add to Cart';
      const color = 'green';
      return {text, color};
  }
}

export default function ShopItemCard(props:ShopItemCardProps) {
  const item:CatalogItem = props.Item;
  const {cart, setCart} = getCart();

    //Initialize Button State
    const [buttonState, setButtonState] = useState(() => {
        if(cart.some(cartItem => cartItem.Item.Id === item.Id)) {
            return ButtonState(true);
        } else {
            return ButtonState(false);
        }
    });

    //Update Button State
    useEffect(() => {
      if (cart.some(cartItem => cartItem.Item.Id === item.Id)) {
        setButtonState(ButtonState(true));
      } else {
        setButtonState(ButtonState(false))
      }
    }, [cart]);

    function handleButtonClick() {
      const itemInCart = cart.some(cartItem => cartItem.Item.Id === item.Id);
      const newItem: CartItem = {Item: item, Quantity:1}
      if (!itemInCart) {
        setCart([...cart, newItem]);
      } else {
        setCart(cart.filter(cartItem => cartItem.Item.Id !== item.Id));
      }
    }

    return (
    <div className="shop-item-card">
        <h2>{item.Name}</h2>
        <img src={item.Image} alt={item.Name} />
        <p className="description">{item.Description}</p>
        <p className="price">{item.Price}</p>
        <button onClick={handleButtonClick} style={{ backgroundColor: buttonState.color }}>
          {buttonState.text}
        </button>
      </div>
    )
}