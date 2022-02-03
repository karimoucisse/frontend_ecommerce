import React from 'react';
import styled from 'styled-components'
import Row from '../components/Row'
import Container from "../components/Container"
import { useNavigate } from 'react-router';
// const Container = styled.div`
// display: flex;
// width: 100%;
// justify-content: space-around;
// padding: 40px 0;
// background-color:#023047;
// `
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
const Array = [
    {
        title : "CATEGORIES",
        paragraphe0 : "Poisson entier",
        paragraphe1 : "filet de poisson",
        paragraphe2 : "Coquillages et crustacée",
        paragraphe3 : " Produit en période de fête",
    },
    {
        title : "IMFORMATION",
        paragraphe0 : "Contactez-nous",
        paragraphe1 : "Qui sommes-nous",
        paragraphe2 : "Livraison by Express Chronofresh",
        paragraphe3 : " Politique de confidentalité",
    }   
,
    {
        title : "MON COMPTE",
        paragraphe0 : "Mes commandes",
        paragraphe1 : "Mes avoirs",
        paragraphe2 : "Mes adresses",
        paragraphe3 : "Mes informations personnelle",
    }
]

const Footer = () => {
    const navigate = useNavigate()

    const oncliCkNavigate = (content) => {
        if(content === "Qui sommes-nous") {
            navigate("/histoire")
        }
    }

    return (
        <div>
            <Container 
                height= "auto" 
                display= "flex" 
                flexDirection="column" 
                backGroundColor="#023047" 
                gap= "20px"
                padding= "20px 0 5px 0"
                margin= "40px 0 0 0"
            >  
                <Row justifyContent= "space-around" width= "100%">
                {Array.map((element, index) =>{ 
                    return <div key={index}>
                        <h1>{element.title}</h1>, 
                        <Paragraphe>{element.paragraphe0}</Paragraphe>
                        <Paragraphe onClick={() => oncliCkNavigate(element.paragraphe1)}>{element.paragraphe1}</Paragraphe>
                        <Paragraphe>{element.paragraphe2}</Paragraphe>
                        <Paragraphe>{element.paragraphe3}</Paragraphe>
                    </div>
                })}
                 <div>
                   <form>
                    <label>
                        E-mail
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Envoyer" />
                    </form>
                    <Text> Recevez les produits et code promo ! </Text>
                   </div>
                </Row>
                
                <Row justifyContent= "center" gap="50px">
                    <Icones><i className="fab fa-twitter"></i></Icones>   
                    <Icones><i className="fab fa-facebook"></i></Icones> 
                </Row>    
            </Container>
       
            
        </div>
    );
};

export default Footer;