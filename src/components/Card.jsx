import styled from "styled-components";

const Container = styled.img`
    width: ${(props) => props.width ? props.width : "400px"};
    height: ${(props) => props.height ? props.height : "300px"};
    box-shadow: ${(props) => props.shadow ? props.shadow : "0 0 0 0"};
    object-fit: ${(props) => props.objectFit ? props.objectFit : "cover"};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : "0px"} ;
    cursor: pointer;
    &:hover {
        transform: scale(1.004);
    } 
`
const Card = ({
    width, 
    height,
    shadow,
    objectFit,
    borderRadius, 
    source, 
    alt
}) => {
  return (
        <Container
            width= {width}
            height= {height}
            shadow= {shadow}
            objectFit= {objectFit}
            borderRadius= {borderRadius}
            src= {source}
            alt= {alt}
        />
    )
};

export default Card;
