import Row from "./Row";
import styled from "styled-components";
const Element = styled.div`
    cursor: pointer;
    border-right: 2px solid #023047;
    padding: 0 15px;
    &:nth-child(3) {
        border: none;
    }
    
`
const Paragraph =styled.p`
    font-size: 26px;
    transition: all ease-in 0.2s;
    &:hover {
        transform: scale(1.02);
        color: #023047;
    }
`
const ProfilBar = () => {
    return (
        <Row width= "100%" 
            backgroundColor= "#ffff" 
            padding= "20px 20px" 
            alignItems= "baseline" 
            justifyContent= "center"
        >
            <Element><Paragraph>Profil</Paragraph></Element>
            <Element><Paragraph>Coordonées bancaires</Paragraph></Element>
            <Element><Paragraph>historique des commandes</Paragraph></Element>
        </Row>
    )
};

export default ProfilBar;