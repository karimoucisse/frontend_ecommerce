import Container from "./Container";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Title = styled.h1`
    font-size: 60px;
`
const Button = styled.button`
    padding: 5px 25px;
    border-radius: 20px;
`
const NotFound = () => {
    return (
        <Container display= "flex" flexDirection= "column" gap= "40px" backGroundColor= "#f5f5f">
            <Title>404 Not Found</Title>
            <Button><Link to="/" style={{color: "#023047"}}> Retourner au site web </Link></Button>
            <Button><Link to="/login" style={{color: "#023047"}}> Se connecter </Link></Button>
        </Container>
    )
};

export default NotFound;
