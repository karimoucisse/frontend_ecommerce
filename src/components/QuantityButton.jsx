import Button from "./Button";
import styled from "styled-components";
import Row from "./Row";

const Logo = styled.i`
    display: ${(props) => props.hide ? "none" : "block"};
    font-size: 25px;
`
const QuantityButton = ({hide}) => {
    return (
        <Row justifyContent= "space-around" alignItems= "center" margin= "20px 0 0 0">
            <Row alignItems= "center" gap= "8px">
                <Button padding= "2px 10px">-</Button>
                <p>1</p>
                <Button padding= "2px 10px">+</Button>
            </Row>
            <Logo className="fas fa-shopping-basket" hide= {hide}></Logo> 
        </Row>
    )
};

export default QuantityButton;
