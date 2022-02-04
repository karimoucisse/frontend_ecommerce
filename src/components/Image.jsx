import styled from "styled-components";

const Container = styled.img`
    width: ${(props) => props.width ? props.width : "400px"};
    height: ${(props) => props.height ? props.height : "300px"};
    box-shadow: ${(props) => props.shadow ? props.shadow : "0 0 0 0"};
    object-fit: ${(props) => props.objectFit ? props.objectFit : "cover"};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : "0px"} ;
    background-color: red;
`
const ShadowContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color ease-in-out 0.2s;
    z-index: 3;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 0;
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
