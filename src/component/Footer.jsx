import React from 'react';
import styled from 'styled-components'



const MaxiContainer = styled.div`
background-color: blue;
`   
const Container = styled.div`
background-color: #023047 ;
display : flex;
justify-content : space-around;
padding: 10px 10px;
`
const Title = styled.h3`
color: black;   
font-size : 25px;
`
const Text = styled.p`
color : white ;
font-size : 18px; 
margin-bottom: 5px;

`
const Footer = () => {
    return (
        <div>
            <MaxiContainer>
                <Container>
                    <div>
                        <Title> CATEGORIES</Title>
                        <Text> Poisson entier</Text>
                        <Text> filet de poisson</Text>
                        <Text> Coquillages et crustacée</Text>
                        <Text> Produit en période de fête</Text>
                    </div>
                    <div>
                        <Title> INFORMATION </Title>
                        <Text> Contactez-nous</Text>
                        <Text> Qui sommes-nous</Text>
                        <Text> Livraison by Express Chronofresh</Text>
                        <Text> Politique de confidentalité</Text>
                    </div>
                    <div>
                        <Title> MON COMPTE</Title>
                        <Text>Mes commandes</Text>
                        <Text>Mes avoirs</Text>
                        <Text>Mes adresses</Text>
                        <Text>Mes informations personnelle</Text>
                        <i class="fab fa-facebook"></i>
                        
                   </div>
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
             </MaxiContainer>
        </div>
    );
};

export default Footer;