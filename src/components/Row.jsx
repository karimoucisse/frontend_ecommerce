import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "none"};
    align-items: ${(props) => props.alignItems ? props.alignItems : "none"};
    gap: ${(props) => props.gap ? props.gap : "0"};
    margin: ${(props) => props.margin ? props.margin : "0" };
    padding: ${(props) => props.padding ? props.padding : "none"};
    position: ${(props) => props.position ? props.position: "none"};
    width: ${(props) => props.width ? props.width : "none"};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "transparent" };
    /* height: ${(props) => props.height ? props.height : "auto"}; */
`
const Row = ({
    children, 
    justifyContent, 
    alignItems, 
    gap, 
    margin, 
    position, 
    padding,
    width,
    backgroundColor
}) => {
    return (
        <Container
            justifyContent = {justifyContent}
            alignItems = {alignItems}
            gap = {gap}
            margin = {margin}
            position = {position}
            padding= {padding}
            width= {width}
            backgroundColor= {backgroundColor}
        >
            {children}
        </Container>
    )
};

export default Row;
