import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
import EmptyBasket from "../components/EmptyBasket";
import BasketItem from "../components/BasketItem";

// const Title = styled.h1`
//     text-align: center;
// `
const Panier = () => {
    return (
        <Container>
            <Header/>
                {/* <EmptyBasket/> */}
                <BasketItem 
                    source= "https://poisson-a-domicile.com/18-large_default/sole-portion.jpg"
                    produitContent= "saumon"
                    prixContent= "30€"
                />
            <Footer/>
        </Container>
    )
};

export default Panier;
