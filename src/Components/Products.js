import React,{useContext} from 'react'
import {ProductsContext} from '../Global/ProductsContext'
import Banner from "./Banner"
import {CartContext} from '../Global/CartContext'
const Products = () => {
const prod= useContext(ProductsContext);
const {dispatch,}=useContext(CartContext);
    return (
        <div className="container">
            <Banner/>
        <div className="products">
        {
        prod.products.map((product) => (
            <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="product-details">
                <div className="product-name">
                 <h4>{product.name}</h4>
                </div>
               <div className="product-price">
                   ${product.price}.00
               </div>
            
            </div>
            <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product:product})}>add to cart</div>
            {product.productStatus === 'new' ? <div className="new">New</div>: ''}
            {product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
            ))}
            
            </div>
            </div>
    )
}

export default Products;
