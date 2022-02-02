import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
import EmptyBasket from "../components/EmptyBasket";

const Panier = () => {
    return (
        <Container>
            <Header/>
                <EmptyBasket/>
            <Footer/>
        </Container>
    )
};

export default Panier;
