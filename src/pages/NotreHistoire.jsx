import React from 'react';
import Card from "../components/Card";
import Container from "../components/Container";
import Footer from "../components/Footer";
// import GridProducts from "../../components/GridProducts";
import Header from "../components/Header";
import Row from "../components/Row";
import Image from '../components/Image';
import Fade from 'react-reveal/Fade'
const NotreHistoire = () => {
    return (
        <Container>
            <Header/>
            <Row 
                justifyContent= "center"
                margin= "70px 70px"
            >
                <h1>Notre poissonnerie en ligne : Comment ça marche ?</h1>
            </Row>
            <Row justifyContent="space-evenly" margin= "50px 50px">
                <Fade left>
                    <Card shadow = 'none' flexDirection= 'column' height="300px">
                        <h2>ARRIVAGE</h2>
                        <p>Une fois les bateaux rentrés au port, les lots de poissons sont mis en vente, à la demande du client, nous achetons, lors de la criée, sole, barbue, congre, bar, etc, ..
                            Les coquillages, crustacés et fruits de mer sont pêchés par nos soins au large de Pirou et de Portbail ( Manche ). Le poisson que nous vous expédions provient de nos côtes normandes et Atlantique ouest.</p>
                    </Card>
                </Fade>
                <Fade right>
                    <Card  shadow = 'none'>
                        <Image source="https://images.midilibre.fr/api/v1/images/view/5b47294b8fe56f78b367146a/large/image.jpg"
                            alt= 'image de pêcheur'
                            widht
                        />
                    </Card>
                </Fade>
            </Row>
            <Row justifyContent="space-evenly">
                <Fade left>
                    <Card shadow = 'none'>
                        <Image source="https://poisson-a-domicile.com/img/cms/img-qui-sommes-nous/colissage-min.jpg"/>
                    </Card>
                </Fade>
                <Fade right>
                    <Card shadow = 'none' flexDirection= 'column' height="300px">
                        <h2>PRÉPARATION DES POISSONS</h2>
                        <p>Après Rungis direction nos ateliers où nos poissons sont écaillés, vider, découper en fonction des besoins et des commandes.
                        Les poissons sont achetés entier ( ni vidé, ni en filet ). Nous préparons tout nous mêmes.
                        Une fois votre commande passée sur le site poisson à domicile, notre équipe se charge de préparer, en suivant vos indications, votre poisson, vos crustacés et/ou vos coquillages.</p>
                    </Card>
                </Fade>
            </Row>
            <Row justifyContent="space-evenly">
                <Fade left>
                    <Card shadow = 'none'  flexDirection= 'column' height="300px">
                        <h2>CONDITIONNEMENT</h2>
                        <p>Après avoir préparé votre commande, vos produits sont placés sous vide, ce qui leur permet d'être conservés 5 jours.
                        Attention : LES PRODUITS VIVANTS NE SONT PAS MIS SOUS VIDE !</p>
                    </Card>
                </Fade>
                <Fade right>
                    <Card shadow = 'none'>
                        <Image source="https://mychef.distform.com/wp-content/uploads/2020/02/envasado-vacio-carnes-pescados-equipamiento-profesional-mychef.jpg"/>
                    </Card>
                </Fade>
            </Row>
            <Row justifyContent="space-evenly">
                <Fade left>
                    <Card shadow = 'none'>
                        <Image source="https://www.chronopost.fr/sites/default/files/styles/banniere/public/thumbnails/image/ma_collecte_fresh_service.jpg?itok=EvzITPtM"/>
                    </Card>
                </Fade>
                <Fade right>
                    <Card shadow = 'none' flexDirection= 'column' height="300px">
                        <h2>LA LIVRAISON</h2>
                        <p>Votre commande est enfin prête, un chauffeur « Chronofresh » vient récupérer otre commande. La société Chronofresh est spécialisé dans le livraison express de produits alimentaires frais pour en savoir plus
                        Attendez 24 à 48h ( suivant la zone où vous habitez ) et votre colis vous attend chez vous et est prêt à être dégusté.</p>
                    </Card>
                </Fade>
            </Row>
            <Row justifyContent="space-around">
                <Card shadow = 'none' height="100px">
                    <h3>1500 Kg de poissons frais</h3>
                </Card>
                <Card shadow = 'none' height="100px">
                    <h3>99% de clients satisfaits</h3>
                </Card>
            </Row>
            <Footer/>
        </Container>
    );
};

export default NotreHistoire;