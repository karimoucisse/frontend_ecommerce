import styled from "styled-components";
import Image from "./Image";
import Row from "./Row";
import Container from "./Container";
import Button from "./Button";
import { CartContext } from "../context/Cart";
import {useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Paragraph = styled.p`
    font-size: 20px;
`
const Element = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
`
const DeleteButton = styled(DeleteIcon)`
    color: red;
    cursor: pointer;
    font-size: 440px;
    font-size: 45px;
    position: absolute;
    top: 0;
    right: 0;
`

const BasketItem = ({
    produitContent, 
    prixContent, 
    source, 
    children,
    itemId

}) => {
    const {cart, fetchOneCart} = useContext(CartContext)

    const deleteItem = async (_id) => {
        const response = await fetch (`http://localhost:5000/lineItems/${_id}`, {
                method: 'delete',
                headers: {
                        'Content-Type': 'application/json',
                    },
            credentials: 'include',
        })
        if(response.status >= 400) {
            alert("Error")
        }else {
            fetchOneCart(cart._id)
        }
    }

    const onclickDelete = (id) => {
        deleteItem(id)
    }

    return (
        <Container 
            height= "0" 
            display= "flex" 
            alignItems= "none"
            justifyContent= "center"
            padding= "40px 0 0 0 "
        >
            <Row 
                width= "60%" 
                gap= "50px" 
                border= "2px solid black" 
                borderRadius= "20px" 
                height= "140px"
                alignItems= "center"
                position= "relative"
            >
                <Image 
                    source= {source} 
                    height= "100%" 
                    width= "250px" 
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
                        {children}
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
                        <Paragraph>{prixContent}€</Paragraph>
                    </Element>
                </Row>
                <DeleteButton
                    onClick={() => onclickDelete(itemId)}
                    style={{fontSize: "30px"}}
                />
            </Row>
        </Container>
    )
};

export default BasketItem;
