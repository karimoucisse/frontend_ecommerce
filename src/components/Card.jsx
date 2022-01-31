import styled from "styled-components";
// import Image from "./Image";

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${((props) => props.flexDirection ? props.flexDirection : "row")};
  width: ${(props) => props.width ? props.width : "400px"};
  height: ${(props) => props.height ? props.height : "400px"};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : "20px"} ;
  box-shadow: ${(props) => props.shadow ? props.shadow : "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"};
  position: ${(props) => props.position ? props.position: "none"};
  cursor: pointer;
`
const Card = ({
  children, 
  width, 
  height, 
  shadow, 
  justifyContent, 
  flexDirection, 
  position
}) => {
  return (
    <Container 
      width = {width}
      height = {height}
      shadow = {shadow}
      justifyContent = {justifyContent}
      flexDirection = {flexDirection}
      position = {position}
    >
        {children}
    </Container>
  )
};

export default Card;
