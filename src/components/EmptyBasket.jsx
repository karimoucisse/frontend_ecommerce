import { useNavigate } from 'react-router';
import styled from "styled-components";
import Container from "../components/Container"
import Button from "../components/Button";
import Section from "../components/Section";

const Title = styled.h1`
    text-align: center;
`

const EmptyBasket = () => {
    const navigate = useNavigate()
    return (
        <Container 
            height= "80vh" 
            alignItems= "center" 
            display= "flex" 
            flexDirection= "column"
        >
            <Title>Votre panier est vide</Title>
            <Section margin= "40px 0 0 0">
                <h3>En manque d'inspiration ?</h3>
                <Button onClickAction= {() => navigate("/")} padding= "5px 70px">Accueil</Button>
            </Section>
        </Container>
    )
};

export default EmptyBasket;
