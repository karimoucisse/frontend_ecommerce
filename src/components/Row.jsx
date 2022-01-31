import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "none"};
    align-items: ${(props) => props.alignItems ? props.alignItems : "none"};
    gap: ${(props) => props.gap? props.gap : "0"};
    margin: ${(props) => props.margin ? props.margin : "0" };
`
const Row = ({children, justifyContent, alignItems, gap, margin}) => {
    return (
        <Container
            justifyContent = {justifyContent}
            alignItems = {alignItems}
            gap = {gap}
        >
            {children}
        </Container>
    )
};

export default Row;
