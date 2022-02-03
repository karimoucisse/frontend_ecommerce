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
    margin: 5px;
    `

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
`





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
                            <Image source={product.image} alt='fish' height='350px' width="350px" borderRadius='20px'/>
                        </Card>
                        <Content>
                            <div>
                                <h3> {product.name} </h3>
                                <Paragraph> {product.kiloPrice}€ kilo</Paragraph>
                                <Paragraph> Prix par pièce : {product.pricePerPiece}€ </Paragraph>
                            </div>
                            <Card flexDirection='column' height='200px' padding='0px 20px' > 
                                <Paragraph> Caractéristique : {product.characteristic} </Paragraph>
                                <Paragraph> Pays élevage ou zone de pêche : {product.fishingArea} </Paragraph>
                                <Paragraph> Poids net : {product.netWeight}g </Paragraph>
                                <Paragraph> Conditionnement: {product.conditioning} </Paragraph>
                            </Card>
                        </Content>
                    </Section>
                <Footer />
            </Container>
        </>
    );
};

export default Product;