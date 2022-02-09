import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BasketItem from "../components/BasketItem";
import { useState, useEffect, useContext } from "react";
import Loading from "../components/Loading";
import { UserContext } from "../context/User";
import { CartContext } from "../context/Cart";
import EmptyBasket from "../components/EmptyBasket"
import BasketQuantityButton from "../components/BasketQuantityButton";

// const Title = styled.h1`
//     text-align: center;
// `
const Panier = () => {
    const {user} = useContext(UserContext)
    const {cart, fetchOneCart} = useContext(CartContext)
    const [itemToChange, setItemToChange] = useState(null)

    useEffect(() => {
        if (itemToChange) {
            const content = {
                quantity: itemToChange.quantity,
                totalPrice: itemToChange.quantity *  itemToChange.price
            }
            modifyItem(content, itemToChange._id)
        }
    }, [itemToChange])
    
    const modifyItem = async (values, _id) => {
        const response = await fetch (`http://localhost:5000/lineItems/${_id}`, {
                method: 'put',
                headers: {
                        'Content-Type': 'application/json',
                    },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            alert("Error")
        } else {
            fetchOneCart(cart._id)
        }
    }

   

    if(!cart) {
        return <Loading/>
    }

    console.log("cart.lineItems", cart.lineItems.length);
    return (
        <Container>
            <Header/>
                <Container height= "80vh">
                    {cart.lineItems.map((item, index) => {
                        return  <BasketItem 
                                    key={index}
                                    source= {item.product.image}
                                    produitContent= {item.product.name}
                                    prixContent= {Math.round(item.product.pricePerPiece * item.quantity * 100) / 100}
                                    itemId={item._id}
                                >
                                    <BasketQuantityButton  
                                        itemId={item._id}
                                        quantity= {item.quantity}
                                        pricePerPiece={item.product.pricePerPiece}
                                        setItemToChange= {setItemToChange}
                                    />

                                </BasketItem> 
                                
                    })}
                    {cart.lineItems.length === 0 && <EmptyBasket/>}
                </Container>
            <Footer/>
        </Container>
    )
};

export default Panier;
