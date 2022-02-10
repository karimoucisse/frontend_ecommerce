import Container from "./Container";
import { useContext } from "react";
import { UserContext } from "../context/User";
import OrderLineItem from "./OrderLineItem"

const HistoriqueCommande = () => {
    const { user } = useContext(UserContext)

    console.log(user)

    if (user.orders.length === 0) {
        return (
            <Container display= "flex"  height= "60vh">
                <h1>0 commandes</h1>
            </Container>
        )
    }

    return (
        <Container height= "60vh">
            {user.orders.map(order => (
                <div>
                    {order.lineItems.map(item => (
                        <OrderLineItem item={item} />
                    ))}
                </div>
            ))}
        </Container>
    )
};

export default HistoriqueCommande;
