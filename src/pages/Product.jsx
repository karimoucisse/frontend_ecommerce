import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Section from '../components/Section';
import Image from '../components/Image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getProduct from '../api/getProduct';
import { useParams } from 'react-router-dom'


const Paragraph = styled.p`
    margin: 5px`



const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const product = await getProduct(id)
        setProduct(product)
        console.log("My product", product)
    }

    if (!product) {
        return (
            <p> Loading... </p>
        )
    }

    return (
        <>
            <Container> 
                <Header />
                    <Section flexDirection='row' margin='50px'>
                        <Card alignItems='center' >
                            <Image source="https://www.luximer.com/img/cms/Rouget%20barbet%202.png" alt='fish' height='350px' width="350px" borderRadius='20px'/>
                        </Card>
                        <div>
                            <div>
                                <h3> Bar 200g </h3>
                                <Paragraph> 12$ kilo</Paragraph>
                                <Paragraph> 6€ la pièce </Paragraph>
                            </div>
                            <Card flexDirection='column' height='200px' padding='0px 20px' margin='30px 0px'> 
                                <Paragraph> Poisson : gjkeorfjko </Paragraph>
                                <Paragraph> Pays élevage ou zone de pêche : fghjdbshj </Paragraph>
                                <Paragraph> Poids net : nfckd</Paragraph>
                                <Paragraph> Prix par : Pièce </Paragraph>
                                <Paragraph> Conditionnement: Sous vide </Paragraph>
                            </Card>
                        </div>
                    </Section>
                <Footer />
            </Container>
        </>
    );
};

export default Product;