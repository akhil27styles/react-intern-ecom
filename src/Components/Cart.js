import React ,{useContext} from 'react'
import {CartContext} from '../Global/CartContext'
import StripeCheckout from 'react-stripe-checkout'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
const Cart = (props) => {
    const {shoppingCart,totalPrice,qty,dispatch}=useContext(CartContext);
    const handleToken=async(token)=>{
        const product ={name:'All products',price:totalPrice}
        const response=await axios.post("http://localhost:8080/checkout",{
            product,
            token
        })
         console.log(response);
         const {status}=response.data;
         if(status==="success"){
             dispatch({type:'EMPTY'});
             props.history.push('/');
       
toast.success('Successfully toasted!')
         }
         else{
            props.history.push('/');
            toast.error('Successfully toasted!') 
         }
    }
    return (
        <div className="cart-container">   
            <Toaster position="top-right" reverseOrder={false}>
            </Toaster>
            <div className="cart-details" style={{marginTop:'100px'}}>
            
                {shoppingCart.length>0?
                shoppingCart.map(cart=>(
                 <div className="cart" key={cart.id}>
                     <span className="cart-image"><img src={cart.image} alt="not found"/>
                     </span>
                     <span className="cart-product-name">{cart.name}</span>
                     <span className="cart-product-price">{cart.price}</span>
                     <span className="inc" onClick={()=>dispatch({type:'INC',id:cart.id,cart})}><i class="fas fa-plus"></i></span>
                     <span className="product-quantity">{cart.qty}</span>
                     <span className="dec" onClick={()=>dispatch({type:'DEC',id:cart.id,cart})}><i class="fas fa-minus"></i></span>
                     <span className="product-total-price">${cart.price * cart.qty}</span>
                     <span className="delete-product" onClick={()=>dispatch({type:'DELETE',id:cart.id,cart})}><i class="fas fa-trash-alt"></i></span>
                 </div>
                ))
                :'Sorry your cart is currently empty'}
                <h2>Shopping cart</h2>
            </div>
            {shoppingCart.length>0 ?<div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                    <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total Price</div>
                        <dic className="items-price">${totalPrice}.00</dic>
                    </div>
                    <div className="stripe-section">
                        <StripeCheckout
                        stripeKey="pk_test_51Ig2YHSAUsH5cwkCiOL0SZA1iFKhv8CEBlfaS5piCUc7aDwNfDDafg3YOkDeHqWfcuByVI6WCQlntrTGXdmVmQPL00bu4exCtA"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={totalPrice * 100}
                        name="All products"
                        >

                        </StripeCheckout>
                        </div>
                    </div>
                    
                    </div>
                           :''}
     </div>
    )
}

export default Cart;
