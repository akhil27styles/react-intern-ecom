import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../Global/CartContext'
import head from '../assets/p.PNG'
const Banner = () => {
    const {qty}=useContext(CartContext);
    return (
        <header>
            <div className="headerText">
            <img src={head} className="img-head" alt="not found"/>
            <ul className="right">
                <Link to="cart">
                    <span className="shoopingCart"><i className="fas fa-shopping-cart"></i>
                    <span className="cartCount">{qty}</span> </span>
                    </Link>
            </ul>
            </div>
        </header>
        
    )
}

export default Banner;
