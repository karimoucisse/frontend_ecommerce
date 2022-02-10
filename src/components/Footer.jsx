import React from 'react';
import styled from 'styled-components'
import Row from '../components/Row'
import Container from "../components/Container"
import Button from './Button';
import { Link } from 'react-router-dom'


// const Container = styled.div`
// display: flex;
// width: 100%;
// justify-content: space-around;
// padding: 40px 0;
// background-color:#023047;
// `

const Title = styled.h1`
    color: #ffff;
    margin-bottom: 20px;
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
        title : "CATÉGORIES",
        paragraphe0 : "Poissons entiers",
        paragraphe1 : "Filets de poisson",
        paragraphe2 : "Coquillages",
        paragraphe3 : "Produits festifs",
        paragraphe4 : "Crustacés"
    }];

const Array2 = [

    {
        title : "INFORMATION",
        paragraphe0 : "Contactez-nous",
        paragraphe1 : "Qui sommes-nous ?",
        paragraphe2 : "Livraison by Express Chronofresh",
        paragraphe3 : " Politique de confidentalité",
    }   
];

const Array3 = [
    {
        title : "MON COMPTE",
        paragraphe0 : "Mes commandes",
        paragraphe1 : "Mes avoirs",
        paragraphe2 : "Mes adresses",
        paragraphe3 : "Mes informations personnelles",
    }
];

const Footer = () => {

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
                        <Title>{element.title}</Title> 
                        <Paragraphe><Link to="/categories/61fd213faab4a988cfb816b7">{element.paragraphe0}</Link></Paragraphe>
                        <Paragraphe><Link to="/categories/61fd2238aab4a988cfb816b9">{element.paragraphe1}</Link></Paragraphe>
                        <Paragraphe><Link to="/categories/61fd20b9aab4a988cfb816b5">{element.paragraphe2}</Link></Paragraphe>
                        <Paragraphe><Link to="/categories/61fd22dcaab4a988cfb816bb">{element.paragraphe3}</Link></Paragraphe>
                        <Paragraphe><Link to="/categories/61f7b97f6384d88156c62890">{element.paragraphe4}</Link></Paragraphe>
                    </div>
                })}
                
                {Array2.map((element, index) =>{ 
                    return <div key={index}>
                        <Title>{element.title}</Title> 
                        <Paragraphe><Link to="/contacter">{element.paragraphe0}</Link></Paragraphe>
                        <Paragraphe><Link to="/histoire">{element.paragraphe1}</Link></Paragraphe>
                        <Paragraphe><a href="https://www.chronofresh.fr/fr">{element.paragraphe2}</a></Paragraphe>
                        <Paragraphe><Link to="/contacter">{element.paragraphe3}</Link></Paragraphe>
                    </div>
                })}
                
                {Array3.map((element, index) =>{ 
                    return <div key={index}>
                        <Title>{element.title}</Title> 
                        <Paragraphe><Link to="/profil">{element.paragraphe0}</Link></Paragraphe>
                        <Paragraphe><Link to="/profil">{element.paragraphe1}</Link></Paragraphe>
                        <Paragraphe><Link to="/profil">{element.paragraphe2}</Link></Paragraphe>
                        <Paragraphe><Link to="/profil">{element.paragraphe3}</Link></Paragraphe>
                    </div>
                })}
                
                <FormContainer>
                    <Form>
                        <FormElement>
                            <Input type="text" placeholder='Email'/>
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