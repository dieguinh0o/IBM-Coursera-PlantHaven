import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import './Navbar.css'
import getImageURL from '../utilities/url-utilities.js'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { getCart } from "../contexts/Cart.js";

export default function NavBar() {

    const location = useLocation();
    const [title, setTitle] = useState(location.pathname.substring(1));

    useEffect(() => {
        setTitle(location.pathname.substring(1));
    }, [location]);

    const {cart} = getCart();


    return (
        <>
            <div className="nav-container">
                <nav>
                    <div className="nav-left">
                        <Link to="/" className="logo-container">
                            <img src={getImageURL('logo.svg')} alt="Green Haven Logo"/>
                            <h3 className="logo-type">Green Haven</h3>
                        </Link>
                    </div>
                    <div className="nav-center">
                        <h1 className="title">{title}</h1>
                    </div>
                    <div className="nav-right">
                        <Link to="Shop" id="back-to-shop"><IoIosArrowBack className="icon back-icon"/><p>Back to Shop</p></Link>
                        <Link to="Checkout">
                            <div className="cart-container">
                                <span className="item-count">{cart.length}</span>
                                <FaShoppingCart className="icon cart-icon"/>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
        
    )   
}