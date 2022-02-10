import styled from "styled-components";

const Body = styled.div`
    display: ${(props) => props.display ? props.display : "block"};
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => props.alignItems ? props.alignItems : "center"};
    width: ${(props) => props.width ? props.width : "100%"};
    min-height : ${(props) => props.height ? props.height : "100vh"};
    gap: ${(props) => props.gap ? props.gap : "0px"};
    flex-direction: ${(props => props.flexDirection ? props.flexDirection : "none")} ;
    margin: ${(props) => props.margin ? props.margin : "0"};
    padding: ${(props) => props.padding ? props.padding : "0"};
    border: ${(props) => props.border ? props.border : "none"};
    position: ${(props) => props.position ? props.position : "none"};
    top: ${(props) => props.top ? props.top : "none"};
    bottom: ${(props) => props.bottom ? props.bottom : "none"};
    left: ${(props) => props.left ? props.left : "none"};
    right: ${(props) => props.right ? props.right : "none"};
    z-index: ${(props) => props.zIndex ? props.zIndex : "none"};
    background-color: ${(props) => props.backGroundColor ? props.backGroundColor : "transparent"};
    overflow: hidden;
`
const Container = ({
    children, 
    alignItems, 
    justifyContent, 
    height, 
    width, 
    display, 
    gap,
    margin,
    padding,
    flexDirection,
    border,
    position,
    backGroundColor,
    top,
    bottom,
    left,
    right,
    zIndex
}) => {
    return (
        <Body
            alignItems = {alignItems}
            justifyContent = {justifyContent}
            height = {height}
            width= {width}
            display= {display}
            gap= {gap}
            margin= {margin}
            padding= {padding}
            flexDirection = {flexDirection}
            border={border}
            position= {position}
            backGroundColor= {backGroundColor}
            top = {top}
            bottom = {bottom} 
            left = {left}
            right = {right}
            zIndex = {zIndex}
        >
            {children}
        </Body>
    )
};

export default Container;
