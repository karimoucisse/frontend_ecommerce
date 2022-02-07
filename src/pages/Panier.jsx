import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import EmptyBasket from "../components/EmptyBasket";
import BasketItem from "../components/BasketItem";
import { useState,useEffect } from "react";

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

    return (
        <Container>
            <Header/>
                {/* <EmptyBasket/> */}
                {items.map(items => {
                    <BasketItem 
                        source= "https://poisson-a-domicile.com/18-large_default/sole-portion.jpg"
                        produitContent= "Sole"
                        prixContent= "30€"
                    />
                })}
            <Footer/>
        </Container>
    )
};

export default Panier;
