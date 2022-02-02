import styled from "styled-components";
import Image from "./Image";
import Row from "./Row";
import QuantityButton  from "./QuantityButton"
import Container from "./Container";

const Paragraph = styled.p`
    font-size: 20px;
`
const Element = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
`
const BasketItem = ({produitContent, prixContent, source }) => {
    return (
        <Container height= "60vh" display= "flex">
            <Row width= "60%" gap= "80px" border= "2px solid black">
                <Image source= {source} height= "150px" width= "auto"/>
                <Row flexDirection= "column" gap= "40px">
                    <Paragraph>Produit</Paragraph>
                    <Element>
                        <Paragraph>{produitContent}</Paragraph>
                    </Element>
                </Row>
                <Row flexDirection= "column" gap= "40px">
                    <Paragraph>Quantité</Paragraph>
                    <Element>
                        <QuantityButton hide/>
                    </Element>
                </Row>
                <Row flexDirection= "column" gap= "40px">
                    <Paragraph>Prix</Paragraph>
                    <Element>
                        <Paragraph>{prixContent}</Paragraph>
                    </Element>
                </Row>
            </Row>
        </Container>
    )
};

export default BasketItem;
