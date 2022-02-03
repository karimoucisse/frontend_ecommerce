import styled from "styled-components";

const Container = styled.img`
    width: ${(props) => props.width ? props.width : "400px"};
    height: ${(props) => props.height ? props.height : "300px"};
    box-shadow: ${(props) => props.shadow ? props.shadow : "0 0 0 0"};
    object-fit: ${(props) => props.objectFit ? props.objectFit : "cover"};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : "0px"} ;
`
const ShadowContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    transition: all ease-in-out 0.2s;
    &:hover {
        background-color: rgba(0, 0, 0, 0.45);
    }
`
const Image = ({
    width, 
    height,
    shadow,
    objectFit,
    borderRadius, 
    source, 
    alt,
    isShadow
}) => {
  return (
        <>
        {isShadow && <ShadowContainer></ShadowContainer>}
            
            <Container
                width= {width}
                height= {height}
                shadow= {shadow}
                objectFit= {objectFit}
                borderRadius= {borderRadius}
                src= {source}
                alt= {alt}
            />
        </>
    )
};

export default Image;
