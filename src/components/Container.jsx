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
    flexDirection
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
        >
            {children}
        </Body>
    )
};

export default Container;
