import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "none"};
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : "row"};
    align-items: ${(props) => props.alignItems ? props.alignItems : "none"};
    gap: ${(props) => props.gap ? props.gap : "0"};
    margin: ${(props) => props.margin ? props.margin : "0" };
    padding: ${(props) => props.padding ? props.padding : "none"};
    position: ${(props) => props.position ? props.position: "none"};
    width: ${(props) => props.width ? props.width : "none"};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "transparent" };
    border: ${(props) => props.border ? props.border : "none"};
`
const Row = ({
    children, 
    justifyContent, 
    flexDirection,
    alignItems, 
    gap, 
    margin, 
    position, 
    padding,
    width,
    backgroundColor,
    border
}) => {
    return (
        <Container
            justifyContent = {justifyContent}
            flexDirection = {flexDirection}
            alignItems = {alignItems}
            gap = {gap}
            margin = {margin}
            position = {position}
            padding= {padding}
            width= {width}
            backgroundColor= {backgroundColor}
            border = {border}
        >
            {children}
        </Container>
    )
};

export default Row;
