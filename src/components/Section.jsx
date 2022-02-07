import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: ${((props) => props.flexDirection ? props.flexDirection : "column")};
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => props.alignItems ? props.alignItems : "center" };
    margin: ${(props) => props.margin ? props.margin : "50px 0 0 0"};
    padding: ${(props) => props.padding ? props.padding : "0 0 0 0"};
    border: ${(props) => props.border ? props.border : "none"};
    flex-wrap: ${(props) => props.flexWrap ? props.flexWrap : "no-wrap"};
    gap: 30px;
`

const Section = ({
  children, 
  flexDirection, 
  justifyContent, 
  alignItems, 
  margin, 
  padding,
  border,
  flexWrap
}) => {
  return (
    <Container
        flexDirection = {flexDirection}
        justifyContent = {justifyContent}
        alignItems = {alignItems}
        margin = {margin}
        padding = {padding}
        border= {border}
        flexWrap= {flexWrap}
    >
        {children}
    </Container>
  )
};

export default Section;
