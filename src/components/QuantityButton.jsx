import Button from "./Button";
import styled from "styled-components";
import Row from "./Row";
import { useState } from "react";

const Logo = styled.i`
    display: ${(props) => props.hide ? "none" : "block"};
    font-size: 25px;
    color: #023047;
    margin-right: 20px;
    &:hover {
        color: #063e5a;
    }
`
const QuantityButton = ({hide, margin, quantity, setQuantityNumber}) => {

    const [number, setNumber] = useState(quantity ? quantity : 0)

    const compteur = (operator) => {
        console.log('hello');
        if(operator === "plus") {
            setNumber(number + 1)
            quantity = number
            console.log(quantity);
        }else if(operator === "moin" && number > 0) {
            setNumber(number - 1)
            quantity = number
            console.log(quantity);
        }
    }
    return (
        <Row alignItems= "center" margin= {margin} justifyContent= "space-between">
            <Row alignItems= "center" justifyContent= "center">
                <Button padding= "2px 5px" onClickAction = {() => compteur("moin")}>-</Button>
                <p>{number}</p>
                <Button padding= "0px 5px" onClickAction = {() => compteur("plus")}>+</Button>
            </Row>
            <Logo className="fas fa-shopping-basket" hide= {hide} onc></Logo> 
        </Row>
    )
}


export default QuantityButton;
