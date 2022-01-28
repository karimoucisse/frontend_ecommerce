import styled from "styled-components";

const BackgroundImage = styled.img`
    width: 100%;
    height: calc(100vh - 100px);
    object-fit: cover;
`
const BackGroundImage = ({src, alt}) => {
    return (
        <BackgroundImage src={src} alt={alt} />
    )
};

export default BackGroundImage;
