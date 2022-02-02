import Loading from "./Loading"
import Container from "./Container";
import Card from "./Card";
import Row from "./Row";
import Button from "./Button"
import styled from "styled-components";
import { UserContext } from "../context/User";
import { useContext, useState} from "react";

const Paragraph = styled.p`
    font-size: 18px;
`

const ProfilComponent = () => {
    const {user} = useContext(UserContext)
    console.log(user);
    
    if(!user) {
        return <Loading height= "50vh"/>
    }
    return (
        <Container display= "flex"  height= "60vh">
            <Card flexDirection= "column"  gap= "25px" height= "400px" width= "500px">
                {user.map(element => {
                    return(
                        <>
                            <Row justifyContent= "space-around" alignItems= "center">
                                <Paragraph>Name: {element.firstName} {element.name}</Paragraph>
                                <Button fontSize= "16px" padding= " 4px 20px">Modifier</Button>
                            </Row>
                            <Row justifyContent= "space-around" alignItems= "center">
                                <Paragraph>Email: {element.email}</Paragraph>
                                <Button fontSize= "16px" padding= " 4px 20px">Modifier</Button>
                            </Row>
                            <Row justifyContent= "space-around" alignItems= "center">
                                <Paragraph>Phone: {element.phoneNumber}</Paragraph>
                                <Button fontSize= "16px" padding= " 4px 20px">Modifier</Button>
                            </Row>
                            <Row justifyContent= "space-around" alignItems= "center">
                                <Paragraph>Adresse: {element.adress}</Paragraph>
                                <Button fontSize= "16px" padding= " 4px 20px">Modifier</Button>
                            </Row>
                        </> 
                    ) 
                })}
                
            </Card>
        </Container>
    )
};

export default ProfilComponent;
