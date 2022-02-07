import Footer from "../components/Footer";
import Header from "../components/Header"
import BackGroundImage from "../components/BackGroundImage";
import styled from "styled-components";
import Image from "../components/Image";
import Card from "../components/Card";
import Section from "../components/Section";
import Container from "../components/Container";
import CommentCaMarche from "../components/CommentCaMarche";
import {useEffect, useState} from 'react';
import getCategories from "../api/getCategories";
import GridContainerProduct from "../components/GridContainerProduct";
import {Link} from 'react-router-dom'


// const ProductTitle = styled.h2`
//     position: absolute;
//     bottom: 70px;
//     left: 20%;
//     right: 0;
//     margin: auto !important;
//     color: #ffff;
//     text-shadow: 4px 4px 4px black;
//     font-weight: 600;
//     text-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
// `
const Flex = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
`

const H = styled.h4`
margin: 5px;`


const Home = () => {
const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
      }, [])
    
      const fetchCategories = async () => {
          const categories = await getCategories()
          setCategories(categories)
          console.log("My categories home", categories)
      }

    const category = "La pêche du jour"
    const laPecheDuJour = categories.find(element => element.name = category)

    

    if (!laPecheDuJour) {
        return (
            <p> Loading ... </p>
        )
        
    }
   
    return ( 
        <Container>
            <Header/>
            {/* <BackGroundImage 
                src= "https://www.mashed.com/img/gallery/11-mistakes-everyone-makes-when-cooking-fish/intro.jpg" 
                alt= "homepage fish"
                isShadow
            /> */}
                <h1>Que cherchez vous ?</h1>
            <Section flexDirection='row' margin='80px 0px' alignItems='center'>
                <GridContainerProduct gridGap='0px'> 
                    
                        {categories.map(category => {
                            return (
                                <Card key={category.name} >
                                    <Link to={`/categories/${category._id}`}>
                                        <Image 
                                            source= {category.image}
                                        />
                                    </Link>
                                </Card>
                            )
                        })}
                </GridContainerProduct>
                                         
            </Section>
            <Section>
                <h1>La pêche du jour </h1>
                <GridContainerProduct>
                    {laPecheDuJour.products.map(product => (
                    <Card flexDirection='column' height='250px' width='250px' > 
                        <Image source={product.image} alt={product.name} height='180px' width='250px' borderRadius='20px 20px 0px 0px'/>
                        <H> {product.name} </H>
                        <Flex> 
                            <p> Prix au kilo : {product.kiloPrice}€ </p>
                            <Link to={`/product/${product._id}`} style={{color : 'black', fontSize: '15px'}}> Détails </Link>
                        </Flex> 
                    </Card>
                    ))}
                </GridContainerProduct>
            </Section>
            <CommentCaMarche/>
            <Footer/>
        </Container>
    )
};

export default Home;
