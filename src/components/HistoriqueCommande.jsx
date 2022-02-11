import Container from "./Container";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/User";
import OrderLineItem from "./OrderLineItem"
import Card from "./Card";
import { useState } from "react";

const HistoriqueCommande = () => {
    const { user } = useContext(UserContext)
    const [total, setTotal] = useState(0)

    console.log("orders", user.orders)


    if (user.orders.length === 0) {
        return (
            <Container display= "flex"  height= "60vh">
                <h1>0 commandes</h1>
            </Container>
        )
    }
    const Calculate = (order) => {
        let count = 0
            order.lineItems.forEach(item => {
                count += item.totalPrice 
            })
        return Math.round(count * 100) / 100
    }
    return (
        <Container height= "80vh"  display= "flex" flexDirection= "column">
            {user.orders.map(order => (
                <>
                    <Card 
                        flexDirection="column" 
                        justifyContent= "center"
                        alignItems= "center" 
                        gap= "10px" 
                        width= "700px" 
                        height= "auto"
                        margin= "20px 0"
                        borderRadius= "0px"
                        padding= "10px 20px"
                    >
                        {order.lineItems.map(item => (
                            <OrderLineItem item={item} />
                        ))}
                    <h3>Total: {Calculate(order)}€ </h3>
                    </Card >
                </>
            ))}
        </Container>
    )
};

export default HistoriqueCommande;
