import styled from "styled-components";
import Row from "./Row";
import { useEffect, useState } from "react";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
    margin: 0 15px ;
    border: 2px solid #023047;
    background-color: #023047;
    color: #ffff;
    font-size: 18px;
    height: 30px;
    width: 40px;
    border-radius: 10px;
    cursor: pointer;
    transform: all ease-in-out 0.2s;
    &:hover {
        background-color: #ffff;
        color:#023047;
    }
`

const BasketQuantityButton = ({
    itemId,
    margin, 
    quantity, 
    setItemToChange,
    pricePerPiece,
    onclickAction
}) => {

    const [number, setNumber] = useState(quantity ? quantity : 0)

    useEffect(() => {
        setItemToChange({
            _id: itemId,
            quantity: number,
            price: pricePerPiece
        })
    }, [number])

    const compteur = (operator) => {
        if(operator === "plus") {
            setNumber(number + 1)
        }else if(operator === "moin" && number > 0) {
            setNumber(number - 1)
        }
    }

    return (
        <Row alignItems= "center" margin= {margin} justifyContent= "space-between">
            <Row alignItems= "center" justifyContent= "center" >
                <Button onClick= {() => compteur("moin")}>-</Button>
                <p>{number}</p>
                <Button onClick= {() => compteur("plus")}>+</Button>
            </Row>
        </Row>
    )
}


export default BasketQuantityButton;
