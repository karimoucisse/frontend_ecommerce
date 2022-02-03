import Container from "./Container";
import Card from "./Card";
import Row from "./Row";
import Button from "./Button"
import styled from "styled-components";
import Loading from "../components/Loading"

const Paragraph = styled.p`
    font-size: 18px;
`

const ProfilComponent = ({user}) => {
    if(!user) {
        return <Loading height= "50vh"/>
    }
    return (
        <Container display= "flex" height= "60vh">
            <Card 
                flexDirection= "column"  
                justifyContent= "none"
                gap= "1px" 
                height= "550px" 
                width= "600px" 
                background = "#ffff"
            >
                <Row justifyContent= "space-between" padding= "0 30px" alignItems= "center">
                    <Paragraph>Name: {user.firstName} {user.name}</Paragraph>
                    <Button fontSize= "16px" padding= " 14px 40px">Modifier</Button>
                </Row>
                <Row justifyContent= "space-between" padding= "0 30px" alignItems= "center">
                    <Paragraph>Email: {user.email}</Paragraph>
                    <Button fontSize= "16px" padding= " 14px 40px">Modifier</Button>
                </Row>
                <Row justifyContent= "space-between" padding= "0 30px" alignItems= "center">
                    <Paragraph>Phone: {user.phoneNumber}</Paragraph>
                    <Button fontSize= "16px" padding= " 14px 40px">Modifier</Button>
                </Row>
                <Row justifyContent= "space-between" padding= "0 30px" alignItems= "center">
                    <Paragraph>Adresse: {user.adress}</Paragraph>
                    <Button fontSize= "16px" padding= " 14px 40px">Modifier</Button>
                </Row>
                <Row justifyContent= "center">
                    <Button padding="15px 55px" backGround= "#eb2d2d">Deconnexion</Button>
                </Row>
            </Card>
        </Container>
    )
};

export default ProfilComponent;
