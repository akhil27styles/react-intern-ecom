import React from 'react'
import {Link} from 'react-router-dom'
import head from '../assets/p.PNG'
const Navbar = () => {
    return (
        <nav>
            <ul className="right">
                <li><Link to="cart">
                    <span className="shoopingCart"><i className="fas fa-shopping-cart"></i>
                    <span className="cartCount">0</span> </span>
                    </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
