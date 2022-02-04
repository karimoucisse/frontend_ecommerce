import styled from "styled-components";

const ButtonContainer = styled.button`
    display: flex;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => props.alignItems ? props.alignItems : "center"};
    padding: ${(props) => props.padding ? props.padding : "10px 25px"};
    border: 2px solid ${(props) => props.backGround ? props.backGround : "#023047"} ;
    background-color: ${(props) => props.backGround ? props.backGround : "#023047"};
    color: #ffff;
    font-size: ${(props) => props.fontSize ? props.fontSize : "18px"};
    height:${(props) => props.height ? props.height : "30px"};
    width:${(props) => props.width ? props.width : "40px"};
    margin:${(props) => props.margin ? props.margin : "40px"};
    border-radius: 10px;
    cursor: pointer;
    transform: all ease-in-out 0.2s;
    &:hover {
        background-color: #ffff;
        color:  ${(props) => props.backGround ? props.backGround : "#023047"};
    }
`
const Button = ({
    children, 
    padding, 
    fontSize, 
    type, 
    height, 
    width, 
    margin, 
    backGround, 
    onClickAction,
    alignItems,
    justifyContent
}) => {

  return <ButtonContainer
            padding = {padding}
            fontSize = {fontSize}
            type= {type}
            height= {height}
            width={width}
            margin={margin}
            backGround = {backGround}
            alignItems= {alignItems}
            justifyContent= {justifyContent}
            onClick={onClickAction}
        >
            {children}
        </ButtonContainer>;
};

Button.defaultProps = {
    onClickAction: () => {}
}

export default Button;
