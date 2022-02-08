import { createContext, useState,useEffect , useContext } from "react";
import { UserContext } from "./User";

const CartContext = createContext({})

const CartContextProvider = props => {
    const {user, setUser} = useContext(UserContext)
    const [cart, setCart] = useState()
    const [cartId, setCardId] = useState()

    const API = "http://localhost:5000/carts"

    
    useEffect(() => {
        if(localStorage.getItem("id")) {
            getCartById(localStorage.getItem("id"))
        }else {
            localStorage.setItem("id", cartId )
            createCart()
        }

    },[])

    
    const createCart = async values => {
        const response = await fetch (`${API}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            console.log("error");
        } else {
            const cartCreate = await response.json()
            setCardId(cartCreate._id)
        }
    }

    // const getCart = async () => {
    //     const response = await fetch(`${API}`, {
    //         credentials: 'include',
    //     })
        
    //     const data = await response.json()
    //     setCart(data)
    // }

    const getCartById = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            credentials: 'include'
        })
        const data = await response.json()
        setCart(data)
    }
    
    const value = {
        cart,
        setCart
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