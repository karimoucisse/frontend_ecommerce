import styled from "styled-components";

const ButtonContainer = styled.button`
    padding: ${(props) => props.padding ? props.padding : "10px 25px"};
    border: 2px solid #023047 ;
    background-color: #023047;
    color: #ffff;
    font-size: ${(props) => props.fontSize ? props.fontSize : "18px"};
    border-radius: 10px;
    cursor: pointer;
    transform: all ease-in-out 0.2s;
    &:hover {
        background-color: #ffff;
        color: #023047;
    }
`
const Button = ({children, padding, fontSize, type}) => {
  return <ButtonContainer
            padding = {padding}
            fontSize = {fontSize}
            type= {type}
        >
            {children}
        </ButtonContainer>;
};

export default Button;
