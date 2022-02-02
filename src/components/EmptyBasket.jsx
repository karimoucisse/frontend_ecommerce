import styled from "styled-components";
import Container from "../components/Container"
import Button from "../components/Button";
import Section from "../components/Section";

const Title = styled.h1`
    text-align: center;
`

const EmptyBasket = () => {
    return (
        <Container 
            height= "80vh" 
            alignItems= "center" 
            display= "flex" 
            flexDirection= "column"
        >
            <Title>Votre panier est vide</Title>
            <Section margin= "80px 0 0 0">
                <h3>En manque d'inspiration ?</h3>
                <Button>Continuer Mes Achats</Button>
            </Section>
        </Container>
    )
};

export default EmptyBasket;
