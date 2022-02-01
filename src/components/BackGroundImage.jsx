import styled from "styled-components";

const Container = styled.div`
    position: relative;
    height: ${(props) => props.height ? props.height : "550px"} ;
`
const Shadow = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
`
const BackgroundImage = styled.img`
    width: 100%;
    height:100%;
    /* height: calc(100vh - 100px); */
    object-fit: cover ;
`
const BackGroundImage = ({src, alt, height, isShadow}) => {
    return (
        <Container 
            height = {height}
        >
            {isShadow && <Shadow></Shadow> }
            <BackgroundImage src={src} alt={alt} height= {height}/>
        </Container>
    )
};

export default BackGroundImage;
