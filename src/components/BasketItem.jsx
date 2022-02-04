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
        <Container 
            height= "140" 
            display= "flex" 
            alignItems= "none"
            padding= "40px 0 0 0 "
        >
            <Row 
                width= "760px" 
                gap= "50px" 
                border= "2px solid black" 
                borderRadius= "20px" 
                height= "140px"
            >
                <Image 
                    source= {source} 
                    height= "100%" 
                    width= "auto" 
                    borderRadius = "20px 0 0 20px"
                />
                <Row 
                    flexDirection= "column" 
                    gap= "40px" 
                    alignItems= "center"
                    padding="5px 0 0 0"
                >
                    <Paragraph>Produit</Paragraph>
                    <Element>
                        <Paragraph>{produitContent}</Paragraph>
                    </Element>
                </Row>
                <Row 
                    flexDirection= "column" 
                    gap= "40px" 
                    alignItems= "center"
                    padding="5px 0 0 0"
                >
                    <Paragraph>Quantité</Paragraph>
                    <Element>
                        <QuantityButton hide />
                    </Element>
                </Row>
                <Row 
                    flexDirection= "column" 
                    gap= "40px"
                    alignItems= "center"
                    padding="5px 0 0 0"
                >
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
