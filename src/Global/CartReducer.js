export const CartReducer=(state,action)=>{
    const {shoppingCart,totalPrice,qty}=state;
    let product;
    let index;
    let upadtePrice;
    let updatedQty;
    switch(action.type){
        case 'ADD_TO_CART':
            const check=shoppingCart.find(product=>product.id===action.id);
            if(check){
                return state;
            }
            else{
                product=action.product;
                product['qty']=1;
                updatedQty=qty+1;
                upadtePrice=totalPrice+product.price;
                return {shoppingCart:[product,...shoppingCart],totalPrice:
                upadtePrice,qty:updatedQty}
            }
            break;

            case 'INC':
                product=action.cart;
                product.qty=product.qty+1;
                upadtePrice=totalPrice+product.price;
                updatedQty=qty+1;
                index=shoppingCart.findIndex(cart=>cart.id===action.id) ;
                shoppingCart[index]=product;
                return {shoppingCart:[...shoppingCart],totalPrice:upadtePrice,qty:updatedQty}
                break;
            case 'DEC':
                product=action.cart;
                if(product.qty>1){
                product.qty=product.qty-1;
                upadtePrice=totalPrice-product.price;
                updatedQty=qty-1;
                index=shoppingCart.findIndex(cart=>cart.id===action.id) ;
                shoppingCart[index]=product;
                return {shoppingCart:[...shoppingCart],totalPrice:upadtePrice,updatedQty,qty:updatedQty}
                }   
                else{
                    return state;
                }         
                break;
            case 'DELETE':
                const filtered =shoppingCart.filter(product=>product.id!==action.id)
                      product=action.cart;
                      updatedQty=qty-product.qty;
                      upadtePrice=totalPrice-product.price * product.qty;
                      return {shoppingCart:[...filtered],totalPrice:upadtePrice,qty:updatedQty}
                      break;
            case 'EMPTY':
                return {shoppingCart:[],totalPrice:0,qty:0}
                
                default:
                return state;
                
    }
}