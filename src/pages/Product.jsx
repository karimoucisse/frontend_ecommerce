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
import QuantityButton from '../components/QuantityButton';
import Loading from "../components/Loading"
import { useContext } from 'react';
import { CartContext } from '../context/Cart';


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
    const { cart, cartId } = useContext(CartContext)
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [quantityNumber, setQuantityNumber] = useState(0)

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const product = await getProduct(id)
        setProduct(product)
    }


    const postLineItems = async values => {
        const response = await fetch ('http://localhost:5000/lineItems', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            alert("Error")
        } else {
            const lineItems = await response.json()
        }
    }
    // Quand on click sur le logo panier on recuper la valeur 
    // "values en paramettre de la fonction onBasketClick" 
    // puis la fonction onBasketClick va executé la fonction postLineItems 

    const onBasketClick = (values) => {
        postLineItems(values)
        console.log(values);
        console.log("cart:", cart);
    }

    if (!product) {
        return (
           <Loading/>
        )
    }
    // const mapId = cart.map(car => console.log(car))
    // console.log("mon map",mapId);
    return (
        <>
            <Container> 
                <Header />
                    <Section flexDirection='row' margin='50px'>
                        <Card alignItems='center' >
                            <Image 
                                source={product.image} 
                                alt='fish' 
                                height='350px' 
                                width="350px" 
                                borderRadius='20px'
                            />
                        </Card>
                        <Content>
                            <div>
                                <h3> {product.name} </h3>
                                <Paragraph> {product.kiloPrice}€ kilo</Paragraph>
                                <Paragraph> Prix par pièce : {product.pricePerPiece}€ </Paragraph>
                                <QuantityButton 
                                    margin = "0" 
                                    setQuantityNumber = {setQuantityNumber}
                                    onBasketClick = {() => onBasketClick ({
                                        cart:  cart._id,
                                        product:product._id ,
                                        quantity: quantityNumber,
                                        weight: quantityNumber * product.netWeight ,
                                        totalPrice: quantityNumber * product.pricePerPiece
                                    })}
                                />   
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