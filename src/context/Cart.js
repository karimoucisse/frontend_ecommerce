import { createContext, useState,useEffect , useContext } from "react";
import { UserContext } from "./User";

const CartContext = createContext({})

const CartContextProvider = props => {
    const {user, setUser} = useContext(UserContext)
    const [cart, setCart] = useState()
    const [cartId, setCardId] = useState()

    const API = "http://localhost:5000/carts"

    
    useEffect(() => {
        // getCart() 
        if(localStorage.getItem("id")) {
            // getCart()
            console.log("yes");
        }else {
            console.log("no");
            localStorage.setItem("id", cartId )
            createCart({
                user: user._id,
                
             })
        }
    },[])
    
    const createCart = async values => {
        const response = await fetch ('http://localhost:5000/carts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            alert("Error")
        } else {
            const cartCreate = await response.json()
            console.log(cartCreate)
        }
    }

    // const getCart = async () => {
    //     const response = await fetch(`${API}`, {
    //         credentials: 'include',
    //     })
        
    //     const data = await response.json()
    //     setCart(data)
    // }
    // const getCartById = async () => {
    //     const response = await fetch(`${API}/`, {
    //         credentials: 'include'
    //     })
    //     const data = await response.json()
    //     setCardId(data)
    // }
    
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