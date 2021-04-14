import React,{createContext,useState} from 'react'
import one from "../assets/1.PNG"
import two from "../assets/2.PNG"
import three from "../assets/3.PNG"
import four from "../assets/4.jpg"
import five from "../assets/5.jpg"
import six from "../assets/6.jpg"
import seven from "../assets/7.PNG"
import eight from "../assets/8.PNG"

export const ProductsContext=createContext();
const ProductsContextProvider = (props) => {
    const [products,setproducts]=useState([
        {id:1, name:'WALE X WRESTLEMANIA TEES',price:300,image:one,status:'new'},
        {id:2, name:'POPPY X NXT TAKEOVER',price:900,image:two,status:'hot'},
        {id:3, name:'LOGAN PAUL T-SHIRTS',price:500,image:three,status:'hot'},
        {id:4, name:'Cesaro "Back In The Swing" Authentic',price:500,image:four,status:'hot'},
        {id:5, name:'Seth Rollins 2015 collection',price:500,image:five,status:'hot'},
        {id:6, name:'WrestleMania 37 Doing it BIG',price:500,image:six,status:'hot'},
        {id:7, name:'Seth Rollins Burn It Down',price:500,image:seven,status:'hot'},
        {id:8, name:'Wale X WrestleMania 37 Doing it BIG' ,price:500,image:eight,status:'hot'},
    ]);
    return (
        <ProductsContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
