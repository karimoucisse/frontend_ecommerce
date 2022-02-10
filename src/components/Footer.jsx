import React from 'react';
import styled from 'styled-components'
import Row from '../components/Row'
import Container from "../components/Container"
import { useNavigate } from 'react-router';
import Button from './Button';
// const Container = styled.div`
// display: flex;
// width: 100%;
// justify-content: space-around;
// padding: 40px 0;
// background-color:#023047;
// `

const Title = styled.h1`
    color:
`

const Paragraphe = styled.p`
color: white ;
margin-bottom: 10px;
cursor: pointer;
&:hover {
    text-decoration: underline;
}


`
const Text = styled.p`
color : white ;
font-size : 18px; 
margin-bottom: 5px;

`
const Icones = styled.i`
color : black ;
font-size : 40px; 
margin-bottom: 5px;
justify-content: center;
cursor: pointer;
&:hover {
    color: #181717;
}
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    gap: 20px;
`
const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`
const FormElement = styled.div`
    display: flex;
    align-items: center;
`
const Input = styled.input`
    height: 30px;
    width: 220px;
    font-size: 18px;
`
const Array = [
    {
        title : "CATEGORIES",
        paragraphe0 : "Poissons entiers",
        paragraphe1 : "Filet de poisson",
        paragraphe2 : "Coquillages et crustacés",
        paragraphe3 : " Produit en période de fête",
    },
    {
        title : "INFORMATION",
        paragraphe0 : "Contactez-nous",
        paragraphe1 : "Qui sommes-nous ?",
        paragraphe2 : "Livraison by Express Chronofresh",
        paragraphe3 : " Politique de confidentalité",
    }   
,
    {
        title : "MON COMPTE",
        paragraphe0 : "Mes commandes",
        paragraphe1 : "Mes avoirs",
        paragraphe2 : "Mes adresses",
        paragraphe3 : "Mes informations personnelles",
    }
]

const Footer = () => {
    const navigate = useNavigate()

    const oncliCkNavigate = (content) => {
        if(content === "Qui sommes-nous ?") {
            navigate("/histoire")
        }
    }

    return (
            <Container 
                height= "200px" 
                display= "flex" 
                flexDirection="column" 
                backGroundColor="#023047" 
                gap= "20px"
                padding= "20px 0 5px 0"
                margin= "40px 0 0 0"
            >  
                <Row justifyContent= "space-around" width= "100%" height= "100%" >
                {Array.map((element, index) =>{ 
                    return <div key={index}>
                        <Title>{element.title}</Title>, 
                        <Paragraphe>{element.paragraphe0}</Paragraphe>
                        <Paragraphe 
                            onClick={() => oncliCkNavigate(element.paragraphe1)}
                        >
                            {element.paragraphe1}
                        </Paragraphe>
                        <Paragraphe>{element.paragraphe2}</Paragraphe>
                        <Paragraphe>{element.paragraphe3}</Paragraphe>
                    </div>
                })}
                <FormContainer>
                    <Form>
                        <FormElement>
                            <Input type="text"/>
                            <Button type="submit" backGround= "blue" padding= "1px 40px" margin= "0">Envoyer</Button>
                        </FormElement>
                    </Form>
                    <Text> Recevez les produits et code promo ! </Text>
                </FormContainer>
                </Row>
                
                <Row justifyContent= "center" gap="50px">
                    <Icones><i className="fab fa-twitter"></i></Icones>   
                    <Icones><i className="fab fa-facebook"></i></Icones> 
                </Row>    
            </Container>
    );
};

export default Footer;