import { createContext, useContext} from "react";
import Cart from '../types/Cart-Interface.tsx';
import CatalogItem from '../types/CatalogItem.ts';

export const CartContext = createContext<CartContext | undefined>(undefined);

interface CartContext {
    cart: Cart;
    setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};

export function getCart() {
    const cart = useCart();
    if (cart === undefined) {
        throw new Error('Cart must be used in the Cart Context');
    }
    return cart;
};

export function sendCartUpdate(item: CatalogItem, action: boolean) {
    const CartUpdateEvent = new CustomEvent("CartUpdate", {
        detail: {
            Item:item,
            Action:action
        }
    });
    window.dispatchEvent(CartUpdateEvent);
};