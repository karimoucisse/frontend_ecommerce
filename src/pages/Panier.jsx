import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BasketItem from "../components/BasketItem";
import { useState, useEffect, useContext } from "react";
import Loading from "../components/Loading";
import { UserContext } from "../context/User";
import EmptyBasket from "../components/EmptyBasket"

// const Title = styled.h1`
//     text-align: center;
// `
const Panier = () => {
    const [items, setItems] = useState()
    const {user} = useContext(UserContext)

    useEffect(() => {
        getItems() 
    },[])

    const getItems = async () => {
        const response = await fetch(`http://localhost:5000/lineItems`, {
            credentials: 'include',
        })

        const data = await response.json()
        setItems(data)
    }
    if(!items) {
        return <Loading height= "50vh"/>
    }
    const onQuantityClick = (prixContent, quantity ) => {
        const content = {
            prixContent,
            quantity
        }
        modifyItem(content)
        console.log("onQuantityClick");
    }

    const modifyItem = async values => {
        const response = await fetch ('http://localhost:5000/auth/signup', {
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
            const modifiedItem = await response.json()
        }
        getItems()
    }
    console.log("items:" , items );
    return (
        <Container>
            <Header/>
                {!items && <EmptyBasket/>}
                {items.map(item => {
                    return <BasketItem 
                                key={item.product._id}
                                source= {item.product.image}
                                produitContent= {item.product.name}
                                prixContent= {item.totalPrice * item.quantity}
                                quantity = {item.quantity}
                                onclick= {() => onQuantityClick(item.quantity, item.totalPrice )}
                            />
                    
                 })}
            <Footer/>
        </Container>
    )
};

export default Panier;
