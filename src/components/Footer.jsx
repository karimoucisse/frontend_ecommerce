import React from 'react';
import styled from 'styled-components'
import Row from '../components/Row'


const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
padding: 40px 0;
background-color:#023047;


`
const Paragraphe = styled.p`
color: white ;


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
        paragraphe0 : "Contactez-nous<",
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
    return (
        <div>
             <Container>  
          
                {Array.map(element =>{ 
                    return <div>
                        <h1>{element.title}</h1>, 
                        <Paragraphe>{element.paragraphe0}</Paragraphe>
                        <Paragraphe>{element.paragraphe1}</Paragraphe>
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
            </Container>
            <Row justifyContent= "center" gap="50px">
                <Icones><i className="fab fa-twitter"></i></Icones>   
                <Icones><i className="fab fa-facebook"></i></Icones> 
          </Row>    
       
            
        </div>
    );
};

export default Footer;