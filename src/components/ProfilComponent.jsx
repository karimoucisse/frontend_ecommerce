import { useNavigate } from 'react-router';
import Container from "./Container";
import Card from "./Card";
import Row from "./Row";
import Button from "./Button"
import styled from "styled-components";
import Loading from "../components/Loading"
import { UserContext } from "../context/User";
import { useContext, useState} from "react";

const Paragraph = styled.p`
    font-size: 18px;
`

const ProfilComponent = ({user}) => {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)

    if(!user) {
        return <Loading height= "50vh"/>
    }
    const onclickLogout = () => {
        Logout()
    }
    const Logout = async values => {
        const response = await fetch ('http://localhost:5000/auth/logout', {
            method:'DELETE',
            headers: {
                'Content-Type':'application/json',
            },
            
            credentials: 'include'
            // body: JSON.stringify(values)
        })
        // if(response.status >= 400) {
        //     alert("Error")
        // } else {
        //     const userLogout = await response.json()
        // }
        setUser(null)
        navigate('/')

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
                    <Button 
                        padding="15px 55px" 
                        backGround= "#eb2d2d"
                        onClickAction={onclickLogout}
                    >
                        Deconnexion
                    </Button>
                </Row>
            </Card>
        </Container>
    )
};

export default ProfilComponent;
