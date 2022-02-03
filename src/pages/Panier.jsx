import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import styled from "styled-components";
// import Button from "../components/Button";
// import Section from "../components/Section";
import EmptyBasket from "../components/EmptyBasket";

// const Title = styled.h1`
//     text-align: center;
// `
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
