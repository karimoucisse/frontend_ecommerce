import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BasketItem from "../components/BasketItem";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

// const Title = styled.h1`
//     text-align: center;
// `
const Panier = () => {
    const [items, setItems] = useState()

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
    console.log("items:" , items );
    if(!items) {
        return <Loading height= "50vh"/>
    }

    return (
        <Container>
            <Header/>
                {/* <EmptyBasket/> */}
                {items.map(item => {
                    return <BasketItem 
                                source= {item.product.image}
                                produitContent= {item.product.name}
                                prixContent= {item.totalPrice}
                            />
                    
                })} 
            <Footer/>
        </Container>
    )
};

export default Panier;
