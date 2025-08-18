import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)
const StorecontextProvider = (props) =>{

const [cartItems, setCartItems] = useState({});
const addToCart = (itemId)=>{
if(!cartItems[itemId]){
  setCartItems((prev) =>({...prev, [itemId]:1}))  
}
else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
}
  
const removeFromCart = (itemId) =>{
    setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
}

useEffect(()=>{
    console.log(cartItems);
    
}, [cartItems])
    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
       addToCart,
       removeFromCart

    }
    return(
        <Storecontext.Provider value={contextValue}>

{props.children}

        </Storecontext.Provider>
    )
}
export default StorecontextProvider;