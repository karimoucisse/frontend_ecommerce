import { createContext, useState,useEffect  } from "react";

const CartContext = createContext({})

const CartContextProvider = props => {
    const [cart, setCart] = useState()
    

    const API = "http://localhost:5000/carts"

    
    useEffect(() => {
        getCart() 
    },[])
    
    const getCart = async () => {
        const response = await fetch(`${API}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        setCart(data)
    }
    
    const value = {
        cart,
        setCart,
    }

    return (
        <CartContext.Provider value = {value}>
            {props.children}
        </CartContext.Provider>
    )

}

export {
    CartContextProvider,
    CartContext
}