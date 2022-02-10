import Container from "./Container";
import { useContext } from "react";
import { UserContext } from "../context/User";
import OrderLineItem from "./OrderLineItem"
import Card from "./Card";

const HistoriqueCommande = () => {
    const { user } = useContext(UserContext)

    console.log("orders", user.orders)

    if (user.orders.length === 0) {
        return (
            <Container display= "flex"  height= "60vh">
                <h1>0 commandes</h1>
            </Container>
        )
    }

    return (
        <Container height= "80vh"  display= "flex" flexDirection= "column">
            {user.orders.map(order => (
                <Card 
                    flexDirection="column" 
                    justifyContent= "center"
                    alignItems= "center" 
                    gap= "10px" 
                    alignItems= "center" 
                    width= "700px" 
                    height= "auto"
                    margin= "20px 0"
                    borderRadius= "0px"
                    padding= "10px 20px"
                >
                    {order.lineItems.map(item => (
                        <OrderLineItem item={item} />
                    ))}
                    <h3></h3>
                </Card >
            ))}
        </Container>
    )
};

export default HistoriqueCommande;
